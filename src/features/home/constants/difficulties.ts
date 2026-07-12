import { colors } from '../../../shared/theme';
import { DifficultyInfo } from '../../../shared/types';

export const DIFFICULTIES: DifficultyInfo[] = [
  {
    key: 'easy',
    label: 'Asan',
    color: colors.easy,
    pointsPerQuestion: 5,
  },
  {
    key: 'medium',
    label: 'Orta',
    color: colors.medium,
    pointsPerQuestion: 5,
  },
  {
    key: 'hard',
    label: 'Çətin',
    color: colors.hard,
    pointsPerQuestion: 5,
  },
];