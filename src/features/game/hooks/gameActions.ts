import { Question, GameResult } from '../types';

export type GameAction =
  | { type: 'LOAD_QUESTIONS'; payload: Question[] }
  | { type: 'SELECT_ANSWER'; payload: { answer: string; isCorrect: boolean } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'END_GAME'; payload: GameResult }
  | { type: 'RESET_GAME'; payload: Question[] };