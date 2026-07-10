import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  fontSize,
  spacing,
  borderRadius,
} from '../../../../shared/theme';

type QuestionCardProps = {
  question: string;
  currentIndex: number;
  totalQuestions: number;
};

const QuestionCard = ({
  question,
  currentIndex,
  totalQuestions,
}: QuestionCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.questionNumber}>
          Sual {currentIndex + 1}/{totalQuestions}
        </Text>
      </View>

      <View style={styles.questionBox}>
        <Text style={styles.questionText}>{question}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  questionNumber: {
    color: colors.textLight,
    fontFamily: fonts.regular,
    fontSize: fontSize.md,
    fontWeight: '600',
    letterSpacing: 1,
  },
  questionBox: {
    backgroundColor: colors.cardBg,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 2,
    borderColor: colors.border,
    minHeight: 120,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  questionText: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSize.xl,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 28,
  },
});

export default QuestionCard;