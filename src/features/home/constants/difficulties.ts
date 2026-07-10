import { colors } from '../../../shared/theme';
import { DifficultyInfo } from '../../../shared/types';

export const DIFFICULTIES: DifficultyInfo[] = [
  {
    key: 'easy',
    label: 'Asan',
    emoji: '🟢',
    color: colors.easy,
    pointsPerQuestion: 5,
  },
  {
    key: 'medium',
    label: 'Orta',
    emoji: '🟡',
    color: colors.medium,
    pointsPerQuestion: 5,
  },
  {
    key: 'hard',
    label: 'Çətin',
    emoji: '🔴',
    color: colors.hard,
    pointsPerQuestion: 5,
  },
];