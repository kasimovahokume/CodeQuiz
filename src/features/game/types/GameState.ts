import { Difficulty } from '../../../shared/types';
import { Question } from './Question';

export type AnswerStatus = 'idle' | 'correct' | 'wrong';

export type GameState = {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  correctAnswers: number;
  selectedAnswer: string | null;
  answerStatus: AnswerStatus;
};

export type GameResult = {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  difficulty: Difficulty;
  isNewHighScore: boolean;
};