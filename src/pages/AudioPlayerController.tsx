import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconIoni from 'react-native-vector-icons/Ionicons';
import IconEnty from 'react-native-vector-icons/Entypo';
import Colors from '../constant/Colors';
import {SESSIONDETAIL} from '../data/dummyData';
const BeginScreenSession = (props: any) => {
  const [toggleController, setToggleController] = useState(false);
  const [toggleHeart, setToggleHeart] = useState(false);

  const backButton = (
    <IconIoni name="chevron-back-outline" size={27} color={Colors.white} />
  );
  const replayTen = <Icon name="replay-10" size={35} color={Colors.silver} />;

  const musicController = toggleController ? (
    <IconEnty name="controller-play" size={40} color={Colors.silver} />
  ) : (
    <IconEnty name="controller-paus" size={40} color={Colors.silver} />
  );

  const heartLike = toggleHeart ? (
    <IconIoni name="md-heart-outline" size={35} color={Colors.silver} />
  ) : (
    <IconIoni name="md-heart-sharp" size={35} color="#fb3958" />
  );

  const toggleControllerHandler = () => {
    setToggleController(!toggleController);
  };
  const toggleHeartLikeHandler = () => {
    setToggleHeart(!toggleHeart);
  };
  return (
    <View style={styles.screen}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      {/* This Should be Fetch from the server -- Perticular image will display at 
            background
        */}
      <ImageBackground
        style={styles.image}
        source={require('../assets/images/audio-image/List1.jpg')}
        imageStyle={{opacity: 0.3}}>
        <TouchableOpacity
          style={styles.backContainer}
          activeOpacity={0.8}
          onPress={() => props.navigation.navigate('Meditation')}>
          {backButton}
        </TouchableOpacity>
        <View style={styles.mainContainer}>
          <Text style={styles.mainHeaderText}>
            {SESSIONDETAIL[0].sessionHeader}
          </Text>
          <View style={styles.textLabelView}>
            <Text style={styles.textLabel}>{SESSIONDETAIL[0].duration}</Text>
          </View>
          <View style={styles.symbolContainer}>
            <View style={styles.sideController}>{replayTen}</View>
            {/* The Music Bar will be Progress around the Border*/}
            <View style={styles.musicControllerContainer}>
              <TouchableOpacity
                onPress={toggleControllerHandler}
                activeOpacity={1}>
                {musicController}
              </TouchableOpacity>
            </View>

            <View style={styles.sideController}>
              <TouchableOpacity
                onPress={toggleHeartLikeHandler}
                activeOpacity={1}>
                {heartLike}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.MusicProgresserBar}></View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {flex: 1},
  image: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'rgb(0,0,0)',
    alignItems: 'center',
  },
  backContainer: {
    flexDirection: 'row',
    marginRight: Platform.OS === 'ios' ? 350 : 340,
    marginTop: Platform.OS === 'ios' ? 50 : 30,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 70,
  },
  mainHeaderText: {
    color: Colors.white,
    fontFamily: 'OpenSans-Bold',
    fontSize: 25,
  },
  textLabelView: {
    marginTop: 20,
    backgroundColor: 'rgba(77,82,90,0.6)',
    borderRadius: 25,
    width: 80,
    alignItems: 'center',
    padding: 5,
  },
  textLabel: {
    fontSize: 13,
    color: Colors.silver,
    fontFamily: 'Raleway-Bold',
  },
  symbolContainer: {
    flexDirection: 'row',
    marginVertical: 40,
  },
  musicControllerContainer: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: 70,
    width: 70,
    justifyContent: 'center',
    borderRadius: 45,
    alignItems: 'center',
  },
  symboViewLabel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbolTextLabel: {
    color: Colors.silver,
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
  },
  sideController: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginTop: 12,
    marginHorizontal: 20,
  },
  MusicProgresserBar: {
    width: 380,
    borderWidth: 0.5,
    borderColor: Colors.silver,
  },
});
export default BeginScreenSession;
