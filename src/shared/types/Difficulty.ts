export type Difficulty = 'easy' | 'medium' | 'hard';

export type DifficultyInfo = {
  key: Difficulty;
  label: string;
  emoji?: string;
  color: string;
  pointsPerQuestion: number;
};