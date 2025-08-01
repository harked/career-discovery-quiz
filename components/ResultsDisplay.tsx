
import React from 'react';
import { CareerSuggestion } from '../types';
import { SparklesIcon, ArrowPathIcon } from './Icons';

interface ResultsDisplayProps {
  results: CareerSuggestion[];
  onReset: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results, onReset }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="text-center mb-10">
        <div className="flex justify-center items-center mx-auto w-16 h-16 bg-green-100 rounded-full mb-4">
           <SparklesIcon />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">Your AI-Powered Career Matches</h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-slate-500">
          Based on your answers, here are a few career paths that could be a great fit for you.
        </p>
      </div>

      <div className="space-y-8">
        {results.map((suggestion, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-indigo-700">{suggestion.jobTitle}</h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">{suggestion.description}</p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-slate-700 mb-3">Key Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {suggestion.keySkills.map((skill, i) => (
                    <span key={i} className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 bg-slate-700 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 transition-all duration-300"
        >
          <ArrowPathIcon />
          Take the Quiz Again
        </button>
      </div>
    </div>
  );
};

export default ResultsDisplay;
