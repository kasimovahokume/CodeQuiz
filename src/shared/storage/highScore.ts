import { Difficulty } from '../types';

const memoryStorage: Record<string, number> = {};

const HIGH_SCORE_PREFIX = 'highScore_';

/**
 * High Score-u saxlayır (yalnız köhnədən yüksəkdirsə)
 */
export const saveHighScore = (
  difficulty: Difficulty,
  score: number
): boolean => {
  const key = `${HIGH_SCORE_PREFIX}${difficulty}`;
  const currentHigh = memoryStorage[key] ?? 0;

  if (score > currentHigh) {
    memoryStorage[key] = score;
    return true;
  }

  return false;
};

/**
 * High Score-u oxuyur
 */
export const getHighScore = (difficulty: Difficulty): number => {
  const key = `${HIGH_SCORE_PREFIX}${difficulty}`;
  return memoryStorage[key] ?? 0;
};

/**
 * Bütün high score-ları oxuyur
 */
export const getAllHighScores = (): Record<Difficulty, number> => {
  return {
    easy: getHighScore('easy'),
    medium: getHighScore('medium'),
    hard: getHighScore('hard'),
  };
};

/**
 * Bütün high score-ları silir
 */
export const clearAllHighScores = (): void => {
  delete memoryStorage[`${HIGH_SCORE_PREFIX}easy`];
  delete memoryStorage[`${HIGH_SCORE_PREFIX}medium`];
  delete memoryStorage[`${HIGH_SCORE_PREFIX}hard`];
};