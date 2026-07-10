import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import Button from '../../../../shared/components/Button';
import {
  colors,
  fonts,
  fontSize,
  spacing,
  borderRadius,
} from '../../../../shared/theme';
import { Difficulty } from '../../../../shared/types';
import { GameResult } from '../../types';

type ResultModalProps = {
  visible: boolean;
  result: GameResult | null;
  onRestart: () => void;
  onGoHome: () => void;
};

const difficultyInfo: Record<Difficulty, { label: string; emoji: string }> = {
  easy: { label: 'Asan', emoji: '🟢' },
  medium: { label: 'Orta', emoji: '🟡' },
  hard: { label: 'Çətin', emoji: '🔴' },
};

const ResultModal = ({
  visible,
  result,
  onRestart,
  onGoHome,
}: ResultModalProps) => {
  if (!result) return null;

  const { score, totalQuestions, correctAnswers, difficulty, isNewHighScore } =
    result;
  const info = difficultyInfo[difficulty];
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  const getResultEmoji = (): string => {
    if (percentage === 100) return '🏆';
    if (percentage >= 70) return '🎉';
    if (percentage >= 50) return '👏';
    return '💪';
  };

  const getResultTitle = (): string => {
    if (percentage === 100) return 'MÜKƏMMƏL!';
    if (percentage >= 70) return 'TƏBRİKLƏR!';
    if (percentage >= 50) return 'YAXŞI İŞ!';
    return 'DAHA YAXŞISI OLAR!';
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <Text style={styles.emoji}>{getResultEmoji()}</Text>
          <Text style={styles.title}>{getResultTitle()}</Text>

          {/* Score */}
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreLabel}>🏆 Yekun Bal</Text>
            <Text style={styles.scoreValue}>{score}</Text>
          </View>

          {/* New High Score Badge */}
          {isNewHighScore && (
            <View style={styles.highScoreBadge}>
              <Text style={styles.highScoreText}>⭐ YENİ REKORD! ⭐</Text>
            </View>
          )}

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Düzgün cavab:</Text>
              <Text style={styles.statValue}>
                {correctAnswers}/{totalQuestions}
              </Text>
            </View>

            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Uğur faizi:</Text>
              <Text style={styles.statValue}>{percentage}%</Text>
            </View>

            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Səviyyə:</Text>
              <Text style={styles.statValue}>
                {info.emoji} {info.label}
              </Text>
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.buttonsContainer}>
            <Button
              title="Yenidən Başla"
              icon="🔄"
              variant="success"
              size="large"
              fullWidth
              onPress={onRestart}
              style={styles.buttonSpacing}
            />

            <Button
              title="Ana Səhifə"
              icon="🏠"
              variant="primary"
              size="large"
              fullWidth
              onPress={onGoHome}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },
  modalContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: colors.modalBg,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 20,
  },
  emoji: {
    fontSize: 80,
    marginBottom: spacing.sm,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSize.xxl,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  scoreLabel: {
    color: colors.gold,
    fontFamily: fonts.regular,
    fontSize: fontSize.md,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  scoreValue: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSize.huge,
    fontWeight: '700',
  },
  highScoreBadge: {
    backgroundColor: colors.scoreBg,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.full,
    marginBottom: spacing.lg,
  },
  highScoreText: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSize.md,
    fontWeight: '700',
    letterSpacing: 1,
  },
  statsContainer: {
    width: '100%',
    backgroundColor: colors.cardBg,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  statLabel: {
    color: colors.textLight,
    fontFamily: fonts.regular,
    fontSize: fontSize.md,
    fontWeight: '500',
  },
  statValue: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSize.md,
    fontWeight: '700',
  },
  buttonsContainer: {
    width: '100%',
  },
  buttonSpacing: {
    marginBottom: spacing.md,
  },
});

export default ResultModal;