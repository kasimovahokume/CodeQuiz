import React, { useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Text,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import Button from '../../../../shared/components/Button';
import {
  colors,
  fonts,
  fontSize,
  spacing,
  borderRadius,
} from '../../../../shared/theme';
import { RootStackParamList } from '../../../../shared/types';
import { GameResult } from '../../types';
import { useGame } from '../../hooks';
import QuestionCard from '../QuestionCard';
import OptionButton from '../OptionButton';
import ScoreBar from '../ScoreBar';

type GameScreenProps = NativeStackScreenProps<RootStackParamList, 'Game'>;

const GameScreen = ({ route, navigation }: GameScreenProps) => {
  const { difficulty } = route.params;
  const [showExitModal, setShowExitModal] = useState(false);

  const handleGameOver = useCallback(
    (result: GameResult) => {
      navigation.replace('Result', { result });
    },
    [navigation]
  );

  const {
    currentQuestion,
    currentQuestionIndex,
    questions,
    score,
    selectedAnswer,
    answerStatus,
    selectAnswer,
  } = useGame(difficulty, handleGameOver);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        setShowExitModal(true);
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    }, [])
  );

  const handleExitConfirm = () => {
    setShowExitModal(false);
    navigation.popToTop();
  };

  const handleExitCancel = () => {
    setShowExitModal(false);
  };

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
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.background}
      />

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

          {/* Exit Button */}
          <View style={styles.exitButtonContainer}>
            <Button
              title="Oyunu Bitir"
              variant="danger"
              size="medium"
              fullWidth
              onPress={() => setShowExitModal(true)}
            />
          </View>
        </View>
      </KeyboardAvoidingView>

      {/* Exit Confirmation Modal */}
      <Modal
        visible={showExitModal}
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={handleExitCancel}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalEmoji}>⚠️</Text>
            <Text style={styles.modalTitle}>Əminsiniz?</Text>
            <Text style={styles.modalMessage}>
              Oyunu bitirmək istəyirsiniz? Cari nəticəniz itəcək!
            </Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={handleExitCancel}
              >
                <Text style={styles.modalButtonText}>Xeyr</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleExitConfirm}
              >
                <Text style={styles.modalButtonText}>Bəli</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    minHeight: 250,
  },
  optionsContainer: {
    paddingBottom: spacing.md,
  },
  exitButtonContainer: {
    paddingVertical: spacing.md,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },
  modalContainer: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: colors.modalBg,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border,
  },
  modalEmoji: {
    fontSize: 60,
    marginBottom: spacing.md,
  },
  modalTitle: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSize.xxl,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },
  modalMessage: {
    color: colors.textLight,
    fontFamily: fonts.regular,
    fontSize: fontSize.md,
    textAlign: 'center',
    marginBottom: spacing.lg,
    lineHeight: 22,
  },
  modalButtons: {
    flexDirection: 'row',
    width: '100%',
    gap: spacing.md,
  },
  modalButton: {
    flex: 1,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: colors.cardBg,
    borderWidth: 2,
    borderColor: colors.border,
  },
  confirmButton: {
    backgroundColor: colors.wrong,
  },
  modalButtonText: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: fontSize.md,
    fontWeight: '700',
  },
});

export default GameScreen;