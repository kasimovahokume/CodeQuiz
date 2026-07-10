import { GAME_CONFIG } from '../../../shared/constants';
import { GameState } from '../types';
import { GameAction } from './gameActions';

export const initialGameState: GameState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  correctAnswers: 0,
  selectedAnswer: null,
  answerStatus: 'idle',
  isGameOver: false,
  gameResult: null,
};

export const gameReducer = (
  state: GameState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case 'LOAD_QUESTIONS':
      return {
        ...state,
        questions: action.payload,
      };

    case 'SELECT_ANSWER':
      return {
        ...state,
        selectedAnswer: action.payload.answer,
        answerStatus: action.payload.isCorrect ? 'correct' : 'wrong',
        score: action.payload.isCorrect
          ? state.score + GAME_CONFIG.POINTS_PER_QUESTION
          : state.score,
        correctAnswers: action.payload.isCorrect
          ? state.correctAnswers + 1
          : state.correctAnswers,
      };

    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedAnswer: null,
        answerStatus: 'idle',
      };

    case 'END_GAME':
      return {
        ...state,
        isGameOver: true,
        gameResult: action.payload,
      };

    case 'RESET_GAME':
      return {
        ...initialGameState,
        questions: action.payload,
      };

    default:
      return state;
  }
};