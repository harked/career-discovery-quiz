
import React from 'react';
import { RocketLaunchIcon } from './Icons';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
      <div className="flex justify-center items-center">
        <div className="p-4 bg-indigo-100 rounded-full">
          <RocketLaunchIcon />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-slate-800 mt-6">
        Discover Your Perfect Career Path
      </h1>
      <p className="text-slate-600 mt-4 mb-8 text-lg">
        Take this short quiz to analyze your interests and skills. Our AI will match you with job roles that align with your unique profile.
      </p>
      <button
        onClick={onStart}
        className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:translate-y-[-2px] shadow-md"
      >
        Start the Quiz
      </button>
    </div>
  );
};

export default StartScreen;
