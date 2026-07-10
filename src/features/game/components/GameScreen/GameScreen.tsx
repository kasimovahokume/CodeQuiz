import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { colors, spacing } from '../../../../shared/theme';
import { Difficulty } from '../../../../shared/types';
import { useGame } from '../../hooks';
import QuestionCard from '../QuestionCard';
import OptionButton from '../OptionButton';
import ScoreBar from '../ScoreBar';
import ResultModal from '../ResultModal';

type GameScreenProps = {
  difficulty: Difficulty;
  onGoHome: () => void;
};

const GameScreen = ({ difficulty, onGoHome }: GameScreenProps) => {
  const {
    currentQuestion,
    currentQuestionIndex,
    questions,
    score,
    selectedAnswer,
    answerStatus,
    isGameOver,
    gameResult,
    selectAnswer,
    resetGame,
  } = useGame(difficulty);

  // Suallar hələ yüklənməyibsə, boş ekran
  if (!currentQuestion) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.background}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          {/* Score Bar */}
          <ScoreBar
            score={score}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />

          {/* Question Card */}
          <QuestionCard
            question={currentQuestion.question}
            currentIndex={currentQuestionIndex}
            totalQuestions={questions.length}
          />

          {/* Options - FlashList */}
          <View style={styles.optionsWrapper}>
            <FlashList
              data={currentQuestion.options}
              keyExtractor={(item, index) => `${item}-${index}`}
              renderItem={({ item }) => (
                <OptionButton
                  option={item}
                  correctAnswer={currentQuestion.correctAnswer}
                  selectedAnswer={selectedAnswer}
                  answerStatus={answerStatus}
                  onPress={selectAnswer}
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.optionsContainer}
            />
          </View>
        </View>
      </KeyboardAvoidingView>

      {/* Result Modal */}
      <ResultModal
        visible={isGameOver}
        result={gameResult}
        onRestart={resetGame}
        onGoHome={onGoHome}
      />
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
    paddingTop: spacing.md,
  },
  optionsWrapper: {
    flex: 1,
    minHeight: 300,
  },
  optionsContainer: {
    paddingBottom: spacing.lg,
  },
});

export default GameScreen;
