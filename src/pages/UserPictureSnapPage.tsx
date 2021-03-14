import React from 'react';

import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';

import CloseOutline from 'react-native-vector-icons/Ionicons';

import Button from '../components/Button';

const UserSnapScreen = (props: any) => {
  console.log(props);
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
          onPress={() => {}}>
          <CloseOutline name="close-outline" size={38} color="white" />
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <Button
            title="Find Meditation"
            style={styles.buttonTextContainer}
            onClickButtonHandler={() =>
              props.navigation.navigate('MeditationListAudios')
            }
          />
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
