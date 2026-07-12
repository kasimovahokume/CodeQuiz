import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigation';
import { useBootSplash } from './features/splash/hooks';


function App() {
  const { isReady } = useBootSplash();

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <AppNavigator/>
    </SafeAreaProvider>
  );
}

export default App;