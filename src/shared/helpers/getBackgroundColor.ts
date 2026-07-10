import { colors } from '../theme';
import { ButtonVariant } from '../types';

export const getBackgroundColor = (
  variant: ButtonVariant,
  disabled: boolean
): string => {
  if (disabled) return colors.textMuted;

  const variantColors: Record<ButtonVariant, string> = {
    primary: colors.primary,
    success: colors.easy,
    warning: colors.medium,
    danger: colors.hard,
  };

  return variantColors[variant];
};