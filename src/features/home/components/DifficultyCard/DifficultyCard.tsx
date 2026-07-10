import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  fontSize,
  spacing,
  borderRadius,
} from '../../../../shared/theme';
import { DifficultyInfo } from '../../../../shared/types';

type DifficultyCardProps = {
  difficulty: DifficultyInfo;
  highScore: number;
  onPress: () => void;
};

const DifficultyCard = ({
  difficulty,
  highScore,
  onPress,
}: DifficultyCardProps) => {
  return (
    <TouchableOpacity
      style={[styles.card, { borderColor: difficulty.color }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <Text style={styles.emoji}>{difficulty.emoji}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.label}>{difficulty.label}</Text>
            <Text style={styles.subLabel}>
              {difficulty.pointsPerQuestion} xal / sual
            </Text>
          </View>
        </View>

        <View style={styles.rightSection}>
          <Text style={styles.highScoreLabel}>🏆 Rekord</Text>
          <Text style={[styles.highScoreValue, { color: difficulty.color }]}>
            {highScore}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.sm,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  emoji: {
    fontSize: 40,
    marginRight: spacing.md,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSize.xl,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  subLabel: {
    color: colors.textLight,
    fontFamily: fonts.regular,
    fontSize: fontSize.sm,
    fontWeight: '400',
  },
  rightSection: {
    alignItems: 'center',
  },
  highScoreLabel: {
    color: colors.textMuted,
    fontFamily: fonts.regular,
    fontSize: fontSize.xs,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  highScoreValue: {
    fontFamily: fonts.regular,
    fontSize: fontSize.xxl,
    fontWeight: '700',
  },
});

export default DifficultyCard;