
import React, { useState, useCallback } from 'react';
import { QuizState, Answers, CareerSuggestion } from './types';
import { QUIZ_QUESTIONS } from './constants';
import { getCareerSuggestions } from './services/geminiService';
import StartScreen from './components/StartScreen';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import ResultsDisplay from './components/ResultsDisplay';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>(QuizState.Start);
  const [answers, setAnswers] = useState<Answers>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState<CareerSuggestion[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleStartQuiz = () => {
    setQuizState(QuizState.Quiz);
  };

  const processAndFetchResults = useCallback(async (finalAnswers: Answers) => {
    setQuizState(QuizState.Loading);
    setError(null);
    try {
      const suggestions = await getCareerSuggestions(finalAnswers);
      setResults(suggestions);
      setQuizState(QuizState.Results);
    } catch (err) {
      console.error(err);
      setError(
        'An error occurred while analyzing your results. Please try again.'
      );
      setQuizState(QuizState.Error);
    }
  }, []);

  const handleAnswer = useCallback((questionId: number, answerValue: string) => {
      const newAnswers = { ...answers, [questionId]: answerValue };
      setAnswers(newAnswers);

      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < QUIZ_QUESTIONS.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        processAndFetchResults(newAnswers);
      }
    },
    [answers, currentQuestionIndex, processAndFetchResults]
  );

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setResults([]);
    setError(null);
    setQuizState(QuizState.Start);
  };

  const renderContent = () => {
    switch (quizState) {
      case QuizState.Start:
        return <StartScreen onStart={handleStartQuiz} />;
      case QuizState.Quiz:
        const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
        return (
          <div className="w-full max-w-2xl mx-auto px-4">
            <ProgressBar
              current={currentQuestionIndex + 1}
              total={QUIZ_QUESTIONS.length}
            />
            <QuestionCard
              question={currentQuestion}
              onAnswer={(value) => handleAnswer(currentQuestion.id, value)}
            />
          </div>
        );
      case QuizState.Loading:
        return (
            <div className="text-center">
                <LoadingSpinner />
                <h2 className="text-2xl font-semibold text-slate-700 mt-6">Analyzing your answers...</h2>
                <p className="text-slate-500 mt-2">Our AI is finding the perfect career paths for you!</p>
            </div>
        );
      case QuizState.Results:
        return <ResultsDisplay results={results} onReset={handleReset} />;
      case QuizState.Error:
        return (
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-600">Oops! Something went wrong.</h2>
            <p className="text-slate-600 mt-4">{error}</p>
            <button
              onClick={handleReset}
              className="mt-6 bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Try Again
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100 flex flex-col items-center justify-center p-4 font-sans">
      {renderContent()}
    </div>
  );
};

export default App;
