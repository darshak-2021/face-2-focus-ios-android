import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
  Alert,
} from 'react-native';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import Button from '../components/Button';

import {WEB_CLIENT_ID} from '../utils/keys';

import Colors from '../constant/Colors';
import SocialButton from '../components/SocialButton';
import firebaseSetup from '../credential/firebase-setup';

const backImageFront = require('../assets/images/mountain.jpg');
const topIconFront = require('../assets/images/login-icon/logo.png');

const LoginScreen = (props: any) => {
  const {auth} = firebaseSetup();
  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    configureGoogleSign();
  }, []);

  function configureGoogleSign() {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: false,
    });
  }

  async function onGoogleButtonPress() {
    try {
      const userInfo = await GoogleSignin.signIn();
      const idToken = userInfo.idToken // Get the Users ID token
      console.log(userInfo);
      const googleCredential = auth.GoogleAuthProvider.credential(idToken); // Create a Google Credential with the Token
      setUserInfo(userInfo);
      setError(null);
      setIsLoggedIn(true);
      return auth().signInWithCredential(googleCredential); // Sign-in the user with the Credential
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        {
          /*-------When User cancel Sign In Progress-----*/
        }
        Alert.alert('PROCESS HAS BEEN CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        {
          /*-------When in Progress Ready-------*/
        }
        Alert.alert('PROCESS HAS IN PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        {
          /*--------When Play Services not Available------*/
        }
        Alert.alert('PLAY SERVICES ARE NOT AVAILABLE');
      } else {
        {
          /*--------Some Other Errors-------*/
        }
        Alert.alert('SOMETHING ELSE WENT WRONG');
        setError(error);
      }
    }
    console.log('Sign IN');
  }

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);
      setError(null);
      setIsLoggedIn(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        {
          /*-------When User cancel Sign In Progress-----*/
        }
        Alert.alert('PROCESS HAS BEEN CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        {
          /*-------When in Progress Ready-------*/
        }
        Alert.alert('PROCESS HAS IN PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        {
          /*--------When Play Services not Available------*/
        }
        Alert.alert('PLAY SERVICES ARE NOT AVAILABLE');
      } else {
        {
          /*--------Some Other Errors-------*/
        }
        Alert.alert('SOMETHING ELSE WENT WRONG');
        setError(error);
      }
    }
    console.log('Sign IN');
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setIsLoggedIn(false);
    } catch (error) {
      Alert.alert('SOMETHING ELSE WENT WRONG', error.toString());
    }
    console.log('Sign OUT');
  };

  async function signingOut() {
    try {
      await auth().signOut();
      setIsLoggedIn(false);
    } catch (error) {
      Alert.alert('SOMETHING ELSE WENT WRONG', error.toString());
    }
    console.log('Sign OUT');
  }

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setUserInfo(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        {
          /*When User Has Not Sign In Yet*/
        }
        Alert.alert('PLEASE SIGN IN');
        setIsLoggedIn(false);
      } else {
        Alert.alert('SOMETHING ELSE WENT WRONG', error.toString());
        setIsLoggedIn(false);
      }
    }
  };

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
        style={styles.image}
        blurRadius={Platform.OS === 'android' ? 5 : 5}>
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

        <View style={styles.status}>
          {isLoggedIn === false ? (
            <Text style={styles.loggedinMessage}>You must sign in!</Text>
          ) : (
            <Button
              onClickButtonHandler={() => signingOut()}
              title="Sign out"
              color="#332211"
            />
          )}
        </View>

        <View style={styles.userInfoContainer}>
          {isLoggedIn === true ? (
            <>
              <Text style={styles.displayTitle}>
                Welcome to Face2Focus {userInfo.user.name}
              </Text>
              <View style={styles.profileImageContainer}>
                <Image
                  style={styles.profileImage}
                  source={{
                    uri: userInfo && userInfo.user && userInfo.user.photo,
                  }}
                />
              </View>
            </>
          ) : null}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback>
            {/* Google Login Comes under here - Functionality of BackEnd */}
            <SocialButton
              buttonTitle="Sign In with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="rgba(255,255,255,0.5)"
              onPress={() => {
                onGoogleButtonPress();
                isLoggedIn === true
                  ? props.navigation.navigate('UserProfile')
                  : '';
              }}
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  topimage: {
    marginVertical: 45,
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
    marginVertical: 25,
    marginHorizontal: 15,
  },
  infoText: {
    fontSize: 17,
    fontFamily: 'SFUIDisplay-Semibold',
  },
  buttonContainer: {
    marginVertical: 0,
  },
  status: {
    marginVertical: 10,
  },
  loggedinMessage: {
    fontSize: 20,
    color: 'tomato',
  },
  userInfoContainer: {
    marginVertical: 10,
  },
  profileImageContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor:Colors.silver,
    borderWidth:2

  },
  displayTitle: {
    fontSize: 22,
    color: Colors.silver,
    fontFamily:'Raleway-Bold',
    marginHorizontal: 20
  },
});

export default LoginScreen;
