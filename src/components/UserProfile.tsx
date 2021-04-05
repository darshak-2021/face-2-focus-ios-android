import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

import Colors from '../constant/Colors';
import {getUserInfo} from '../utils/StorageHelper';
import SimpleImagePicker from './ImagePicker';

const UserProfile = (props: any) => {
  const [userPhoto, setUserPhoto] = useState(null);
  const [userGivenName, setUserGivenName] = useState(null);

  getUserInfo().then((userData) => {
    setUserGivenName(userData.user.givenName);
    setUserPhoto(userData.user.photo);
  });

  const today = new Date();
  const currentHours = today.getHours();
  let greetingMessage = null;

  if (currentHours < 12) greetingMessage = 'Good Morning';
  else if (currentHours >= 12 && currentHours <= 17)
    greetingMessage = 'Good Afternoon';
  else if (currentHours >= 17 && currentHours <= 24)
    greetingMessage = 'Good Evening';

  console.log(props);

  return (
    <View style={styles.profileContainer}>
      <TouchableWithoutFeedback onPress={props.onProfilePicture}>
        <View style={styles.profileInfoContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.userImageProfile} source={{uri: userPhoto}} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.grettingText}>
              {' '}
              {greetingMessage}, {userGivenName}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <SimpleImagePicker onImagePicked = {(dataVal) => props.onPickerPicture(dataVal)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 0,
    flexDirection: 'row',
    marginVertical: Platform.OS === 'ios' ? 40 : 20,
  },
  profileInfoContainer: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  imageContainer: {
    padding: 0,
  },
  userImageProfile: {
    width: 43,
    height: 43,
    borderRadius: 30,
    borderColor: Colors.cameraText,
    borderWidth: 0,
  },
  textContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 14,
  },
  grettingText: {
    color: Colors.cameraText,
    fontFamily: 'Raleway-BoldItalic',
    paddingRight: 90,
    fontSize: 16,
  },
  settingContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 25,
  },
  imagePickerContainer: {
    justifyContent: 'center',
    marginTop: 7,
  },
});
export default UserProfile;
function data(data: any) {
  throw new Error('Function not implemented.');
}
