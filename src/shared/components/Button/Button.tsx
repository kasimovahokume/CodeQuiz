import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { colors, fonts, borderRadius } from '../../theme';
import { ButtonProps } from '../../types';
import {
  getBackgroundColor,
  getPadding,
  getButtonFontSize,
} from '../../helpers';

const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  fullWidth = false,
  style,
  textStyle,
}: ButtonProps) => {
  const isDisabled = disabled || loading;
  const bgColor = getBackgroundColor(variant, isDisabled);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: bgColor,
          shadowColor: bgColor,
        },
        getPadding(size),
        fullWidth && styles.fullWidth,
        style,
      ]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.85}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} size="small" />
      ) : (
        <Text
          style={[
            styles.text,
            { fontSize: getButtonFontSize(size) },
            textStyle,
          ]}
        >
          {icon ? `${icon}  ${title}` : title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  fullWidth: {
    width: '100%',
  },
  text: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});

export default Button;