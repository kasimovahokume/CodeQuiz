import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Difficulty } from './shared/types';
import GameScreen from './features/game/components/GameScreen';
import HomeScreen from './features/home/components/HomeScreen';
import { useBootSplash } from './features/splash/hooks';


type ScreenType = 'home' | 'game';

function App() {
  const { isReady } = useBootSplash();
  const [screen, setScreen] = useState<ScreenType>('home');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [playerName, setPlayerName] = useState<string>('');

  // BootSplash hələ gizlənməyibsə, heç nə göstərmə
  if (!isReady) {
    return null;
  }

  const handleSelectDifficulty = (
    selectedDifficulty: Difficulty,
    name: string
  ) => {
    setDifficulty(selectedDifficulty);
    setPlayerName(name);
    setScreen('game');
  };

  const handleGoHome = () => {
    setScreen('home');
  };

  return (
    <SafeAreaProvider>
      {screen === 'home' ? (
        <HomeScreen onSelectDifficulty={handleSelectDifficulty} />
      ) : (
        <GameScreen difficulty={difficulty} onGoHome={handleGoHome} />
      )}
    </SafeAreaProvider>
  );
}

export default App;