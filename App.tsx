/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// React Hooks
import React, {Component, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
// Splash Screen
import SplashScreen from 'react-native-splash-screen';
// Navigations
import Providers from './src/navigator/index';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Providers />;
};

export default App;
