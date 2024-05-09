/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './screen/onboarding/splashScreen';
import MainNavigation from './navigation/mainNavigation';
import Login from './screen/login/index';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): React.JSX.Element {

  

  return (
    < >
     <MainNavigation /> 
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
