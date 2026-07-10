import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  fontSize,
  spacing,
  borderRadius,
} from '../../../../shared/theme';
import { GAME_CONFIG } from '../../../../shared/constants';

type ScoreBarProps = {
  score: number;
  currentQuestion: number;
  totalQuestions: number;
};

const ScoreBar = ({
  score,
  currentQuestion,
  totalQuestions,
}: ScoreBarProps) => {
  const maxScore = totalQuestions * GAME_CONFIG.POINTS_PER_QUESTION;
  const progressPercent = (currentQuestion / totalQuestions) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreLabel}>🏆 Bal</Text>
          <Text style={styles.scoreValue}>
            {score}
            <Text style={styles.scoreMax}>/{maxScore}</Text>
          </Text>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.progressLabel}>⭐ Sual</Text>
          <Text style={styles.progressValue}>
            {currentQuestion}
            <Text style={styles.progressMax}>/{totalQuestions}</Text>
          </Text>
        </View>
      </View>

      <View style={styles.progressBarBackground}>
        <View
          style={[
            styles.progressBarFill,
            { width: `${progressPercent}%` },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBg,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreLabel: {
    color: colors.gold,
    fontFamily: fonts.regular,
    fontSize: fontSize.md,
    fontWeight: '700',
    marginRight: spacing.sm,
  },
  scoreValue: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSize.xl,
    fontWeight: '700',
  },
  scoreMax: {
    color: colors.textMuted,
    fontSize: fontSize.md,
    fontWeight: '400',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressLabel: {
    color: colors.primary,
    fontFamily: fonts.regular,
    fontSize: fontSize.md,
    fontWeight: '700',
    marginRight: spacing.sm,
  },
  progressValue: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSize.xl,
    fontWeight: '700',
  },
  progressMax: {
    color: colors.textMuted,
    fontSize: fontSize.md,
    fontWeight: '400',
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: colors.background,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
  },
});

export default ScoreBar;