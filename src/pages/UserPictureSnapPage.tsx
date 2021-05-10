import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Platform,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';

import CloseOutline from 'react-native-vector-icons/Ionicons';
import ImgToBase64 from 'react-native-image-base64';
import ImageResizer from 'react-native-image-resizer';
import axios from 'axios';
import Button from '../components/Button';

const UserSnapScreen = (props: any) => {
  console.log(props);
  const [fetching, setFetching] = useState(false);

  const generateBase64 = () => {
    setFetching(true);
    ImageResizer.createResizedImage(
      props.route.params.uri,
      500,
      800,
      'JPEG',
      50,
      0,
      null,
    )
      .then((response) => {
        console.log('***********', response);

        ImgToBase64.getBase64String(response.uri)
          .then((base64String) => {
            const names = response.uri.split('/');
            const name = names[names.length - 1];
            console.log('base64', name);
            axios
              .post(
                'https://pkdfgfb200.execute-api.ap-south-1.amazonaws.com/production/facereko',
                JSON.stringify({
                  image: base64String,
                  name: name,
                }),
                {
                  headers: {
                    'content-type': 'application/json',
                  },
                },
              )
              .then((response) => {
                setFetching(false);
                console.log(
                  'api response image detect',
                  response.data?.FaceDetails[0].Emotions,
                );
                const type = response.data?.FaceDetails[0].Emotions[0].Type;
                if (type == 'HAPPY' || type == 'SAD' || type == 'CALM') {
                  props.navigation.navigate('MeditationListAudios', {
                    emotion: type,
                  });
                } else {
                  Alert.alert(
                    'Face can not Recognised',
                    'Make sure your face is visible and only [Happy Calm Sad] Emotion are Acceptable',
                    [
                      {
                        text: 'Got it',
                        onPress: () => {
                          console.log('Got it Pressed');
                          props.navigation.navigate('CameraModule');
                        },
                        style: 'cancel',
                      },
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                  );
                }
              })
              .catch((error) => {
                setFetching(false);
                console.log('api image detect error', error);
                Alert.alert('HTTP 403 Forbidden',`${error}`)
              });
          })
          .catch((err) => console.log('base64 error', err));
        // response.uri is the URI of the new image that can now be displayed, uploaded...
        // response.path is the path of the new image
        // response.name is the name of the new image with the extension
        // response.size is the size of the new image
      })
      .catch((err) => {
        // Oops, something went wrong. Check that the filename is correct and
        // inspect err to get more details.
      });
  };

  return (
    <View style={styles.screen}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <ImageBackground
        source={{uri: props.route.params.uri}}
        style={styles.image}>
        <TouchableOpacity
          style={styles.closeContainer}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate('CameraModule')}>
          <CloseOutline name="close-outline" size={38} color="white" />
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          {fetching ? (
            <View style={{}}>
              <ActivityIndicator size={'large'} color={'yellow'} />
            </View>
          ) : (
            <Button
              title="Find Meditation"
              style={styles.buttonTextContainer}
              onClickButtonHandler={() =>
                // props.navigation.navigate('MeditationListAudios')
                generateBase64()
              }
            />
          )}
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
  closeContainer: {
    marginRight: Platform.OS === 'android' ? 340 : 360,
    marginTop: Platform.OS === 'android' ? 30 : 40,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: Platform.OS === 'android' ? 30 : 40,
  },
  buttonTextContainer: {
    fontFamily: 'Raleway-Bold',
    color: 'white',
    fontSize: 20,
  },
});

export default UserSnapScreen;
