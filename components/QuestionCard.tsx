
import React from 'react';
import { QuizQuestion } from '../types';

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswer: (value: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full animate-fade-in">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-indigo-100 rounded-full mr-4">
          {question.icon}
        </div>
        <h2 className="text-2xl font-bold text-slate-800">{question.text}</h2>
      </div>
      <div className="space-y-4">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            className="w-full text-left p-4 bg-slate-100 rounded-lg hover:bg-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 transform hover:scale-102"
          >
            <span className="text-lg text-slate-700">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Add keyframes for animation in a style tag for simplicity
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);


export default QuestionCard;
