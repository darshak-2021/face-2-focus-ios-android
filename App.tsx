/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
// Splash Screen
import SplashScreen from 'react-native-splash-screen';
// Mobile Pages
import QuotationPage from './src/pages/QuotationPage';

class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <View style={styles.screenContainer}>
        <QuotationPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});

export default App;
