import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Button from '../../../../shared/components/Button';
import {
  colors,
  fonts,
  fontSize,
  spacing,
  borderRadius,
} from '../../../../shared/theme';
import { Difficulty, RootStackParamList } from '../../../../shared/types';

type ResultScreenProps = NativeStackScreenProps<RootStackParamList, 'Result'>;

const difficultyInfo: Record<Difficulty, { label: string }> = {
  easy: { label: 'Asan' },
  medium: { label: 'Orta' },
  hard: { label: 'Çətin' },
};

const ResultScreen = ({ route, navigation }: ResultScreenProps) => {
  const { result } = route.params;
  const {
    score,
    totalQuestions,
    correctAnswers,
    difficulty,
    isNewHighScore,
  } = result;

  const info = difficultyInfo[difficulty];
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  const getResultTitle = (): string => {
    if (percentage === 100) return 'MÜKƏMMƏL!';
    if (percentage >= 70) return 'TƏBRİKLƏR!';
    if (percentage >= 50) return 'YAXŞI İŞ!';
    return 'DAHA YAXŞISI OLAR!';
  };

  const handleRestart = () => {
    navigation.replace('Game', { difficulty });
  };

  const handleGoHome = () => {
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.background}
      />

      <View style={styles.content}>
        <View style={styles.topSection}>
          <Text style={styles.title}>{getResultTitle()}</Text>
          {/* Score Card */}
          <View style={styles.scoreCard}>
            <Text style={styles.scoreLabel}>Yekun Bal</Text>
            <Text style={styles.scoreValue}>{score}</Text>
            <Text style={styles.scoreMax}>/ {totalQuestions * 5}</Text>
          </View>

          {/* High Score Badge */}
          {isNewHighScore && (
            <View style={styles.highScoreBadge}>
              <Text style={styles.highScoreText}>YENİ REKORD</Text>
            </View>
          )}

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Düzgün cavab</Text>
              <Text style={styles.statValue}>
                {correctAnswers}/{totalQuestions}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Uğur faizi</Text>
              <Text style={[styles.statValue, styles.percentageValue]}>
                {percentage}%
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Səviyyə</Text>
              <Text style={styles.statValue}>{info.label}</Text>
            </View>
          </View>
        </View>

        {/* Bottom Section */}
        <View style={styles.buttonsContainer}>
          <Button
            title="Yenidən Başla"
            variant="success"
            size="large"
            fullWidth
            onPress={handleRestart}
            style={styles.buttonSpacing}
          />

          <Button
            title="Ana Səhifə"
            variant="primary"
            size="large"
            fullWidth
            onPress={handleGoHome}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
    justifyContent: 'space-between',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSize.xxxl,
    fontWeight: '800',
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  scoreCard: {
    alignItems: 'center',
    marginBottom: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  scoreLabel: {
    color: colors.textMuted,
    fontFamily: fonts.regular,
    fontSize: fontSize.md,
    fontWeight: '500',
    marginBottom: spacing.sm,
    position: 'absolute',
    top: -30,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  scoreValue: {
    color: colors.primary,
    fontFamily: fonts.regular,
    fontSize: 90,
    fontWeight: '800',
    letterSpacing: -2,
  },
  scoreMax: {
    color: colors.textMuted,
    fontFamily: fonts.regular,
    fontSize: fontSize.xxl,
    fontWeight: '500',
    marginLeft: spacing.sm,
    marginBottom: spacing.md,
    alignSelf: 'flex-end',
  },
  highScoreBadge: {
    backgroundColor: colors.scoreBg,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.full,
    marginBottom: spacing.xl,
    marginTop: spacing.md,
    shadowColor: colors.scoreBg,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  highScoreText: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSize.md,
    fontWeight: '800',
    letterSpacing: 2,
  },
  statsContainer: {
    width: '100%',
    backgroundColor: colors.cardBg,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
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
    fontSize: fontSize.lg,
    fontWeight: '700',
  },
  percentageValue: {
    color: colors.primary,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    opacity: 0.5,
  },
  buttonsContainer: {
    width: '100%',
  },
  buttonSpacing: {
    marginBottom: spacing.md,
  },
});

export default ResultScreen;