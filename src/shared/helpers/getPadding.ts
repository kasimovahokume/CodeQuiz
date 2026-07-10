import { spacing } from '../theme';
import { ButtonSize } from '../types';

type Padding = {
  paddingVertical: number;
  paddingHorizontal: number;
};

export const getPadding = (size: ButtonSize): Padding => {
  const paddings: Record<ButtonSize, Padding> = {
    small: { paddingVertical: spacing.sm, paddingHorizontal: spacing.md },
    medium: { paddingVertical: spacing.md, paddingHorizontal: spacing.lg },
    large: { paddingVertical: spacing.lg, paddingHorizontal: spacing.xl },
  };

  return paddings[size];
};