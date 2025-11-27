import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { AppNavigator } from './src/navigation/AppNavigator';
import SafeLayout from './src/layout/saveLayout';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {

        await Font.loadAsync({
          'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
          'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
          'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
          'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
          'Poppins-Light': require('./src/assets/fonts/Poppins-Light.ttf'),
          'Poppins-Thin': require('./src/assets/fonts/Poppins-Thin.ttf'),
          'Poppins-Black': require('./src/assets/fonts/Poppins-Black.ttf'),
          'Poppins-ExtraBold': require('./src/assets/fonts/Poppins-ExtraBold.ttf'),
          'Poppins-Italic': require('./src/assets/fonts/Poppins-Italic.ttf'),
          'Poppins-LightItalic': require('./src/assets/fonts/Poppins-LightItalic.ttf'),
          'Poppins-MediumItalic': require('./src/assets/fonts/Poppins-MediumItalic.ttf'),
          'Poppins-BoldItalic': require('./src/assets/fonts/Poppins-BoldItalic.ttf'),
          'Poppins-SemiBoldItalic': require('./src/assets/fonts/Poppins-SemiBoldItalic.ttf'),
          'Poppins-ExtraBoldItalic': require('./src/assets/fonts/Poppins-ExtraBoldItalic.ttf'),
          'Poppins-ThinItalic': require('./src/assets/fonts/Poppins-ThinItalic.ttf'),
          'Poppins-BlackItalic': require('./src/assets/fonts/Poppins-BlackItalic.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeLayout>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <AppNavigator />
      </View>
    </SafeLayout>
  );
}