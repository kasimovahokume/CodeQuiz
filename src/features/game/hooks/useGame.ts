import { useReducer, useEffect, useCallback } from 'react';
import { Difficulty } from '../../../shared/types';
import { GAME_CONFIG } from '../../../shared/constants';
import { saveHighScore } from '../../../shared/storage';
import { GameResult } from '../types';
import { getShuffledQuestions } from '../utils';
import { gameReducer, initialGameState } from './gameReducer';

export const useGame = (
  difficulty: Difficulty,
  onGameOver: (result: GameResult) => void
) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  const currentQuestion = state.questions[state.currentQuestionIndex] ?? null;
  const isLastQuestion =
    state.currentQuestionIndex >= state.questions.length - 1;

  useEffect(() => {
    const questions = getShuffledQuestions(difficulty);
    dispatch({ type: 'LOAD_QUESTIONS', payload: questions });
  }, [difficulty]);

  const selectAnswer = useCallback(
    (answer: string) => {
      if (state.answerStatus !== 'idle' || !currentQuestion) return;

      const isCorrect = answer === currentQuestion.correctAnswer;

      dispatch({
        type: 'SELECT_ANSWER',
        payload: { answer, isCorrect },
      });

      setTimeout(() => {
        if (isLastQuestion) {
          const finalScore = isCorrect
            ? state.score + GAME_CONFIG.POINTS_PER_QUESTION
            : state.score;
          const finalCorrect = isCorrect
            ? state.correctAnswers + 1
            : state.correctAnswers;

          const isNewHighScore = saveHighScore(difficulty, finalScore);

          const result: GameResult = {
            score: finalScore,
            totalQuestions: state.questions.length,
            correctAnswers: finalCorrect,
            difficulty,
            isNewHighScore,
          };

          onGameOver(result);
        } else {
          dispatch({ type: 'NEXT_QUESTION' });
        }
      }, GAME_CONFIG.ANSWER_DELAY_MS);
    },
    [state, currentQuestion, isLastQuestion, difficulty, onGameOver]
  );

  return {
    ...state,
    currentQuestion,
    selectAnswer,
  };
};