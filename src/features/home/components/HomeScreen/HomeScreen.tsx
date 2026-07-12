import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  colors,
  fonts,
  fontSize,
  spacing,
} from '../../../../shared/theme';
import { APP_CONFIG } from '../../../../shared/constants';
import {
  Difficulty,
  DifficultyInfo,
  RootStackParamList,
} from '../../../../shared/types';
import { getAllHighScores } from '../../../../shared/storage';
import { DIFFICULTIES } from '../../constants';
import DifficultyCard from '../DifficultyCard';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const highScores = getAllHighScores();

  const handleSelectDifficulty = (difficulty: Difficulty) => {
    navigation.navigate('Game', { difficulty });
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
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Image
              style={styles.logo}
              source={require('../../../../assets/images/brain.png')}
            />
            <Text style={styles.title}>{APP_CONFIG.NAME}</Text>
            <Text style={styles.subtitle}>{APP_CONFIG.DESCRIPTION}</Text>
          </View>

          {/* Difficulty Selection */}
          <View style={styles.difficultySection}>
            <Text style={styles.sectionTitle}>Çətinlik səviyyəsini seç</Text>

            <View style={styles.listWrapper}>
              <FlashList
                data={DIFFICULTIES}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
              />
            </View>
          </View>
        </View>
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
  logo: {
    width: 120,
    height: 120,
    marginBottom: spacing.md,
    resizeMode: 'contain',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
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