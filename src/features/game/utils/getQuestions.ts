import { Difficulty } from '../../../shared/types';
import { Question } from '../types';
import { easyQuestions, mediumQuestions, hardQuestions } from '../data/questions';

export const getQuestions = (difficulty: Difficulty): Question[] => {
  const questionsMap: Record<Difficulty, Question[]> = {
    easy: easyQuestions,
    medium: mediumQuestions,
    hard: hardQuestions,
  };

  return questionsMap[difficulty];
};


export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export const shuffleQuestion = (question: Question): Question => {
  return {
    ...question,
    options: shuffleArray(question.options),
  };
};

export const getShuffledQuestions = (difficulty: Difficulty): Question[] => {
  const questions = getQuestions(difficulty);
  const shuffledQuestions = shuffleArray(questions);
  
  return shuffledQuestions.map(shuffleQuestion);
};