
import { GoogleGenAI, Type } from "@google/genai";
import { Answers, CareerSuggestion } from '../types';
import { QUIZ_QUESTIONS } from '../constants';

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      jobTitle: {
        type: Type.STRING,
        description: "The name of the suggested job role."
      },
      description: {
        type: Type.STRING,
        description: "A brief, one-paragraph description of the job role and why it fits the user's profile based on their answers."
      },
      keySkills: {
        type: Type.ARRAY,
        description: "A list of 3-5 key skills required for this job.",
        items: {
          type: Type.STRING
        }
      }
    },
    required: ["jobTitle", "description", "keySkills"]
  }
};

const buildPrompt = (answers: Answers): string => {
  let prompt = "Based on the following quiz answers, act as an expert career counselor. Analyze the user's interests and skills to suggest three ideal job roles that are a great match. For each role, provide a concise description explaining why it's a good fit, and list 3-5 key skills.\n\nHere is the user's profile:\n";

  for (const question of QUIZ_QUESTIONS) {
    if (answers[question.id]) {
      const answerText = question.options.find(opt => opt.value === answers[question.id])?.text;
      prompt += `- ${question.questionPrompt}: ${answers[question.id]}\n`;
    }
  }
  return prompt;
};

export const getCareerSuggestions = async (answers: Answers): Promise<CareerSuggestion[]> => {
  const prompt = buildPrompt(answers);

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
      },
    });

    const jsonText = response.text.trim();
    const suggestions: CareerSuggestion[] = JSON.parse(jsonText);
    
    if (!Array.isArray(suggestions) || suggestions.length === 0) {
      throw new Error("API returned an unexpected or empty format.");
    }

    return suggestions;
  } catch (error) {
    console.error("Error fetching career suggestions from Gemini API:", error);
    // Rethrow a more generic error to be handled by the UI
    throw new Error("Failed to get career suggestions from AI.");
  }
};
