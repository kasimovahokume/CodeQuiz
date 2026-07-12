import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import {
  colors,
  fonts,
  fontSize,
  spacing,
  borderRadius,
} from '../../../../shared/theme';
import { AnswerStatus } from '../../types';

type OptionButtonProps = {
  option: string;
  correctAnswer: string;
  selectedAnswer: string | null;
  answerStatus: AnswerStatus;
  onPress: (option: string) => void;
};

const OptionButton = ({
  option,
  correctAnswer,
  selectedAnswer,
  answerStatus,
  onPress,
}: OptionButtonProps) => {
  const isSelected = selectedAnswer === option;
  const isCorrect = option === correctAnswer;
  const isAnswered = answerStatus !== 'idle';
  const showFeedback = isAnswered;

  const getBackgroundColor = (): string => {
    if (!showFeedback) {
      return colors.primary; 
    }

    // Cavab verilib
    if (isCorrect) {
      return colors.correct; 
    }

    if (isSelected && !isCorrect) {
      return colors.wrong; 
    }

    return colors.cardBg;
  };

  const getIcon = (): string => {
    if (!showFeedback) return '';
    if (isCorrect) return '✓  ';
    if (isSelected && !isCorrect) return '✗  ';
    return '';
  };

  const getOpacity = (): number => {
    if (!showFeedback) return 1;
    if (isCorrect || isSelected) return 1;
    return 0.5; 
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: getBackgroundColor(), opacity: getOpacity() },
      ]}
      onPress={() => onPress(option)}
      disabled={isAnswered}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <Text style={styles.text}>
          {getIcon()}
          {option}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginVertical: spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSize.md,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default OptionButton;