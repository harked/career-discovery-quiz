
export enum QuizState {
  Start,
  Quiz,
  Loading,
  Results,
  Error,
}

export interface QuizOption {
  text: string;
  value: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  icon: React.ReactNode;
  options: QuizOption[];
  questionPrompt: string;
}

export interface CareerSuggestion {
  jobTitle: string;
  description: string;
  keySkills: string[];
}

export type Answers = Record<number, string>;
