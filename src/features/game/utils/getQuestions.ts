import { Difficulty } from '../../../shared/types';
import { Question } from '../types';
import { easyQuestions, mediumQuestions, hardQuestions } from '../data/questions';

/**
 * Difficulty-ə görə uyğun sualları qaytarır
 */
export const getQuestions = (difficulty: Difficulty): Question[] => {
  const questionsMap: Record<Difficulty, Question[]> = {
    easy: easyQuestions,
    medium: mediumQuestions,
    hard: hardQuestions,
  };

  return questionsMap[difficulty];
};

/**
 * Array-i qarışdırır (Fisher-Yates shuffle algoritmi)
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
};

/**
 * Difficulty-ə görə qarışdırılmış sualları qaytarır
 */
export const getShuffledQuestions = (difficulty: Difficulty): Question[] => {
  const questions = getQuestions(difficulty);
  return shuffleArray(questions);
};