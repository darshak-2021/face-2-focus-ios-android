import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
} from 'react-native';

import Colors from '../constant/Colors';


const backImageFront = require('../assets/images/mountain.jpg');
const topIconFront = require('../assets/images/login-icon/logo.png');

const LoginScreen = (props: any) => {
  const color = Colors.textWhiteaccent;

  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ImageBackground
        source={backImageFront}
        style={styles.image}
        blurRadius={Platform.OS === 'android' ? 5 : 20}>
        <View style={styles.topimage}>
          <Image source={topIconFront} />
        </View>
        <View style={styles.textContainer}>
          <Text style={{...styles.welcomeText, color}}>
            Welcome to Face2Focus
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={{...styles.infoText, color}}>
            A Facial Emotion to Meditation & Mindfulness
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          {/* <TouchableWithoutFeedback> */}
            {/* Google Login Comes under here - Functionality of BackEnd */}
          {/* </TouchableWithoutFeedback> */}
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  topimage: {
    marginVertical: 45,
  },
  textContainer: {
    marginTop: 80,
  },
  welcomeText: {
    fontSize: 23,
    textAlign: 'center',
    fontFamily: 'SFUIDisplay-Black',
  },
  infoContainer: {
    marginVertical: 50,
    marginHorizontal: 15,
  },
  infoText: {
    fontSize: 17,
    fontFamily: 'SFUIDisplay-Semibold',
  },
  buttonContainer: {
    marginVertical: 90,
  },
});

export default LoginScreen;
