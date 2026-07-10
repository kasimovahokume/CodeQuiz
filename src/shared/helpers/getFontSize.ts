import { fontSize } from '../theme';
import { ButtonSize } from '../types';

export const getButtonFontSize = (size: ButtonSize): number => {
  const sizes: Record<ButtonSize, number> = {
    small: fontSize.sm,
    medium: fontSize.md,
    large: fontSize.xl,
  };

  return sizes[size];
};