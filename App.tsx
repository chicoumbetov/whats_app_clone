import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import {Navigation} from "./navigation";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";


 const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <SafeAreaProvider>
            <React.Fragment>
                <NavigationContainer
                    linking={LinkingConfiguration}
                    theme={colorScheme === 'dark' ? DefaultTheme : DarkTheme }>
                <Navigation />
                </NavigationContainer>
            </React.Fragment>
        </SafeAreaProvider>
    );
  }
}

export default App
