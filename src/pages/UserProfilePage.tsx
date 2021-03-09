import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Platform,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFav from 'react-native-vector-icons/MaterialIcons';
import Button from '../components/Button';

import Colors from '../constant/Colors';

const Profile = () => {
  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor={'transparent'}
      />
      <View style={styles.headerContainer}>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.headerText}>My Profile</Text>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../assets/images/user-image/picture-background.jpg')}
          style={styles.image}
          blurRadius={3}
          imageStyle={{opacity: 0.3}}>
          <View style={styles.profileInfo}>
            <View>
              <Image
                source={require('../assets/images/user-image/picture.jpg')}
                style={styles.profileImage}
              />
            </View>
            <Text style={styles.profileName}>Darshak Parmar</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 32, marginVertical: 20}}>
        <Icon name="add-circle" size={Platform.OS === 'ios' ? 25 : 20} color={Colors.white} />
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.libraryContainer}>My Library</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          Alert.alert('Your Favorites Screen UI not ready');
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.favMainOuter}>
            <View style={styles.favRowAlignment}>
              <View style={styles.heartOutline}>
                <IconFav name="favorite" size={32} color="#FA2245" />
              </View>
              <Text style={styles.favTextContent}>Favorites</Text>
              <Icon
                name="chevron-forward-sharp"
                size={25}
                color={Colors.white}
                style={{marginRight: -50}}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Logout"
          style={{
            color: Colors.white,
          }}
          onClickButtonHandler = {() => Alert.alert('You are Signing Out....')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#2c3132',
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 45 : 28,
    marginLeft: Platform.OS === 'ios' ? 15 : 8,
  },
  headerText: {
    fontFamily: 'Raleway-Bold',
    color: Colors.silver,
    fontSize: 20,
    marginLeft: 0,
  },
  imageContainer: {
    marginTop: 15,
  },
  image: {
    height: 300,
    width: '100%',
    backgroundColor: 'rgb(0,0,0)',
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 55,
  },
  profileName: {
    color: Colors.silver,
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    marginTop: 25,
  },
  libraryContainer: {
    fontFamily: 'Raleway-Regular',
    color: Colors.white,
    marginLeft: 5,
    fontSize:13,
    marginTop: Platform.OS === 'android' ? -3 : 0
  },
  favMainOuter: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: 80,
    width: 350,
    borderRadius: 15,
  },
  favRowAlignment: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  heartOutline: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius:25,
    padding:5,
    marginLeft: -45,
    marginTop:5
  },
  favTextContent: {
    fontSize: 17,
    fontFamily: 'OpenSans-Light',
    color: Colors.white,
    fontWeight: '400',
    marginLeft: -120,
  },
});
export default Profile;
