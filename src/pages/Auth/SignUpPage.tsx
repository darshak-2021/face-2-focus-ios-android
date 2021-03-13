import React, {useState, useEffect} from 'react';
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
  ScrollView,
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import Colors from '../../constant/Colors';
import firebaseSetup from '../../credential/firebase-setup';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import SocialButton from '../../components/SocialButton';

const backImageFront = require('../../assets/images/mountain.jpg');

const topIconFront = require('../../assets/images/login-icon/logo.png');

import IconIoni from 'react-native-vector-icons/Ionicons';

{
  /* SHH1 Android : 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25 */
}

const LoginScreen = (props: any) => {
  const backButton = (
    <IconIoni name="chevron-back-outline" size={30} color={Colors.white} />
  );
  const {auth} = firebaseSetup();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const onAuthStateChangedHandler = (user) => {
    if (user) {
      setUserId(user.uid);
      setUserName(user.displayName);
      setUserEmail(user.email);
      console.log('User Loged In....');
    } else {
      setUserId('');
      setUserName('');
      setUserEmail('');
    }
  };
  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChangedHandler);
    return subscribe; // unsubscribe on unmount
  }, []);

  const signInWithGoogleHandler = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
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
        imageStyle={{opacity: 0.7}}
        style={styles.image}
        blurRadius={Platform.OS === 'android' ? 0 : 0}>
        <View style={styles.backContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.navigation.navigate('LoginModule')}>
            {backButton}
          </TouchableOpacity>
        </View>

        <View>
          <Image source={topIconFront} />
        </View>

        <Text style={{...styles.welcomeText, color}}>
          Welcome to Face2Focus
        </Text>

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

          <FormInput
            labelValue={confirmPassword}
            onChangeText={(userPassword) => setConfirmPassword(userPassword)}
            placeholderText="Confirm Password"
            iconType="lock"
            secureTextEntry={true}
          />
          <View>
            <FormButton buttonTitle="Sign Up" onPress={() => {}} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback>
            {/* Google Login Comes under here - Functionality of BackEnd */}
            <SocialButton
              buttonTitle="Sign In with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="rgba(255,255,255,0.5)"
              onPress={signInWithGoogleHandler}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>{loginMode}</TouchableWithoutFeedback>
        </View>

        <TouchableOpacity
          style={styles.forgotButton}
          activeOpacity={0.8}
          onPress={() => props.navigation.navigate('LoginModule')}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={styles.navButtonText}>Have an account? Sign In</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backContainer: {
    marginRight: Platform.OS === 'ios' ? 350 : 340,
    marginTop: Platform.OS === 'ios' ? 50 : 30,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 25,
    padding: 2,
  },
  inputFieldContainer: {
    margin: 20,
    marginTop: 15,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  welcomeText: {
    fontSize: 21,
    textAlign: 'center',
    fontFamily: 'SFUIDisplay-Black',
    marginBottom:20
  },
  infoContainer: {
    marginVertical: 15,
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
    marginTop: 10,
  },
  navButtonText: {
    fontSize: 16,
    color: Colors.silver,
    fontFamily: 'SFUIDisplay-Medium',
  }
});

export default LoginScreen;
