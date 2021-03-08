import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Colors from '../constant/Colors';

const Home = () => {
  return (
    <View style={styles.screen}>
        <StatusBar barStyle="light-content"/>
      <Text
        style={{fontFamily: 'Raleway-Bold', fontSize: 30, color: Colors.white}}>
        Home
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.bgMainPrimary
  },
});

export default Home;
