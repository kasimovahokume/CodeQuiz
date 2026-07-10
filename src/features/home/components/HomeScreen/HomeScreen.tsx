import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import {
  colors,
  fonts,
  fontSize,
  spacing,
  borderRadius,
} from '../../../../shared/theme';
import { APP_CONFIG } from '../../../../shared/constants';
import { Difficulty, DifficultyInfo } from '../../../../shared/types';
import { getAllHighScores } from '../../../../shared/storage';
import { DIFFICULTIES } from '../../constants';
import DifficultyCard from '../DifficultyCard';

type HomeScreenProps = {
  onSelectDifficulty: (difficulty: Difficulty, playerName: string) => void;
};

const HomeScreen = ({ onSelectDifficulty }: HomeScreenProps) => {
  const [playerName, setPlayerName] = useState('');
  const highScores = getAllHighScores();

  const handleSelectDifficulty = (difficulty: Difficulty) => {
    const name = playerName.trim() || 'Oyunçu';
    onSelectDifficulty(difficulty, name);
  };

  const renderItem = ({ item }: { item: DifficultyInfo }) => (
    <DifficultyCard
      difficulty={item}
      highScore={highScores[item.key]}
      onPress={() => handleSelectDifficulty(item.key)}
    />
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.background}
      />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.emoji}>🧠</Text>
              <Text style={styles.title}>{APP_CONFIG.NAME}</Text>
              <Text style={styles.subtitle}>{APP_CONFIG.DESCRIPTION}</Text>
            </View>

            {/* Player Name Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>👤 Adınız</Text>
              <TextInput
                style={styles.input}
                placeholder="Adınızı daxil edin..."
                placeholderTextColor={colors.textMuted}
                value={playerName}
                onChangeText={setPlayerName}
                maxLength={20}
                returnKeyType="done"
              />
            </View>

            {/* Difficulty Selection - FlashList */}
            <View style={styles.difficultySection}>
              <Text style={styles.sectionTitle}>Çətinlik səviyyəsini seç</Text>

              <View style={styles.listWrapper}>
                <FlashList
                  data={DIFFICULTIES}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.key}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.listContainer}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  emoji: {
    fontSize: 70,
    marginBottom: spacing.sm,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSize.huge,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: spacing.xs,
  },
  subtitle: {
    color: colors.textLight,
    fontFamily: fonts.regular,
    fontSize: fontSize.md,
    fontWeight: '400',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: spacing.lg,
  },
  inputLabel: {
    color: colors.textLight,
    fontFamily: fonts.regular,
    fontSize: fontSize.md,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  input: {
    backgroundColor: colors.cardBg,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSize.md,
    borderWidth: 2,
    borderColor: colors.border,
  },
  difficultySection: {
    flex: 1,
  },
  sectionTitle: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSize.lg,
    fontWeight: '600',
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  listWrapper: {
    flex: 1,
    minHeight: 300,
  },
  listContainer: {
    paddingBottom: spacing.lg,
  },
});

export default HomeScreen;