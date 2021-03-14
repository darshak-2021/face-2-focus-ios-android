import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';

import Colors from '../../constant/Colors';

import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import SocialButton from '../../components/SocialButton';

const backImageFront = require('../../assets/images/mountain.jpg');

const topIconFront = require('../../assets/images/login-icon/logo.png');

{
  /* SHH1 Android : 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25 */
}

const LoginScreen = (props: any) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const color = Colors.textWhiteaccent;

  const loginMode =
    Platform.OS === 'android' ? (
      <SocialButton
        buttonTitle="Sign In with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="rgba(255,255,255,0.5)"
        onPress={() => {}}
      />
    ) : (
      <SocialButton
        buttonTitle="Sign In with Apple"
        btnType="apple"
        color="#ffffff"
        backgroundColor="rgba(0,0,0,0.5)"
        onPress={() => {}}
      />
    );

  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ImageBackground
        source={backImageFront}
        imageStyle={{opacity: 0.7}}
        style={styles.image}
        blurRadius={Platform.OS === 'android' ? 0 : 0}>
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

        <View style={styles.inputFieldContainer}>
          <FormInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholderText="Email"
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FormInput
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText="Password"
            iconType="lock"
            secureTextEntry={true}
          />

          <View>
            <FormButton buttonTitle="Sign In" onPress={() => {}} />
          </View>

          <TouchableOpacity
            style={styles.forgotButton}
            activeOpacity={0.8}
            onPress={() => props.navigation.navigate('SignUpModule')}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={styles.navButtonText}>
                Don't have an acount? Create here
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback>
            {/* Google Login Comes under here - Functionality of BackEnd */}
            <SocialButton
              buttonTitle="Sign In with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="rgba(255,255,255,0.5)"
              onPress={() => {}}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>{loginMode}</TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputFieldContainer: {
    margin: 20,
    marginTop: 25,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  topimage: {
    marginTop: 45,
  },
  textContainer: {
    marginTop: 0,
  },
  welcomeText: {
    fontSize: 23,
    textAlign: 'center',
    fontFamily: 'SFUIDisplay-Black',
  },
  infoContainer: {
    marginTop: 25,
    marginHorizontal: 15,
  },
  infoText: {
    fontSize: 17,
    fontFamily: 'SFUIDisplay-Semibold',
  },
  buttonContainer: {
    marginVertical: 0,
  },
  forgotButton: {
    marginTop: 20,
  },
  navButtonText: {
    fontSize: 14,
    color: Colors.silver,
    fontFamily: 'SFUIDisplay-Medium',
  },
});

export default LoginScreen;
