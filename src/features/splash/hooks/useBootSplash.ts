import { useEffect, useState } from 'react';
import BootSplash from 'react-native-bootsplash';
import { APP_CONFIG } from '../../../shared/constants';

type UseBootSplashReturn = {
  isReady: boolean;
};

export const useBootSplash = (): UseBootSplashReturn => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      await new Promise<void>((resolve) =>
        setTimeout(() => resolve(), APP_CONFIG.SPLASH_DURATION_MS)
      );
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      setIsReady(true);
    });
  }, []);

  return { isReady };
};