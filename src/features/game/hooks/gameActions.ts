import { Question } from '../types';

export type GameAction =
  | { type: 'LOAD_QUESTIONS'; payload: Question[] }
  | { type: 'SELECT_ANSWER'; payload: { answer: string; isCorrect: boolean } }
  | { type: 'NEXT_QUESTION' };