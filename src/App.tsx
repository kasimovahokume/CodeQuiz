import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from './shared/theme';
import AppNavigator from './navigation';
import { useBootSplash } from './features/splash/hooks';

function App() {
  const { isReady } = useBootSplash();

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.background}
        translucent={false}
      />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;