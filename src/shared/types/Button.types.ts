import { ViewStyle, TextStyle } from 'react-native';

export type ButtonVariant = 'primary' | 'success' | 'warning' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};