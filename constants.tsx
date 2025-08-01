
import React from 'react';
import { QuizQuestion } from './types';
import { BrainIcon, UsersIcon, GlobeAltIcon, CodeBracketIcon, LightBulbIcon, BuildingOfficeIcon } from './components/Icons';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: 'Which type of tasks do you find more engaging?',
    icon: <BrainIcon />,
    questionPrompt: "The user prefers tasks that are",
    options: [
      { text: 'Creative & Artistic', value: 'creative and artistic, involving imagination and new ideas.' },
      { text: 'Analytical & Logical', value: 'analytical and logical, involving data, patterns, and problem-solving.' },
    ],
  },
  {
    id: 2,
    text: 'What is your ideal work environment?',
    icon: <UsersIcon />,
    questionPrompt: "The user's ideal work environment is",
    options: [
      { text: 'Collaborative & Team-Oriented', value: 'collaborative and team-oriented, thriving on group projects.' },
      { text: 'Independent & Focused', value: 'independent, allowing for deep focus and autonomy.' },
    ],
  },
  {
    id: 3,
    text: 'Where would you rather work?',
    icon: <BuildingOfficeIcon />,
    questionPrompt: "The user would rather work",
    options: [
      { text: 'Indoors, in an office or a structured setting', value: 'indoors in a structured setting like an office or lab.' },
      { text: 'Outdoors, or with frequent travel', value: 'outdoors or in a role that involves frequent travel and a change of scenery.' },
    ],
  },
  {
    id: 4,
    text: 'How comfortable are you with new technology?',
    icon: <CodeBracketIcon />,
    questionPrompt: "Regarding technology, the user is",
    options: [
      { text: 'Very comfortable, an early adopter', value: 'very comfortable with technology and enjoys learning new tools.' },
      { text: 'Moderately comfortable, willing to learn', value: 'moderately comfortable and willing to learn what is necessary for the job.' },
      { text: 'I prefer tools that are simple and established', value: 'more comfortable with simple, established tools rather than complex new technology.' },
    ],
  },
  {
    id: 5,
    text: 'When facing a challenge, you prefer to:',
    icon: <LightBulbIcon />,
    questionPrompt: "When facing a challenge, the user prefers to",
    options: [
      { text: 'Brainstorm innovative, out-of-the-box solutions', value: 'brainstorm innovative and unconventional solutions.' },
      { text: 'Apply proven, reliable methods and processes', value: 'apply proven, reliable methods to ensure a predictable outcome.' },
      { text: 'Organize and manage resources to overcome it', value: 'organize people and resources to tackle the problem efficiently.' },
    ],
  },
  {
    id: 6,
    text: 'What kind of impact do you want to make?',
    icon: <GlobeAltIcon />,
    questionPrompt: "The user wants to make an impact by",
    options: [
      { text: 'Helping people directly, on a personal level', value: 'helping individuals directly and seeing personal impact.' },
      { text: 'Building something tangible that people can use', value: 'building tangible products or systems that many people can use.' },
      { text: 'Discovering new knowledge or advancing a field', value: 'contributing to knowledge and advancing a particular field.' },
    ],
  },
];
