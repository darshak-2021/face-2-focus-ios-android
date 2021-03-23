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
import IconIoni from 'react-native-vector-icons/Ionicons';
import Colors from '../constant/Colors';
import Controller from '../components/Controller';
import SeekBar from '../components/SeekBar';
import getEmotionImages from '../utils/ImageGenerator';
const BeginScreenSession = (props: any) => {
  const { data } = props.route.params;
  const backButton = (
    <IconIoni name="chevron-back-outline" size={27} color={Colors.white} />
  );
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
        source={getEmotionImages(data.id)}
        imageStyle={{opacity: 0.4}}>
        <TouchableOpacity
          style={styles.backContainer}
          activeOpacity={0.8}
          onPress={() => props.navigation.navigate('MeditationListAudios')}>
          {backButton}
        </TouchableOpacity>
        <View style={styles.mainContainer}>
          <Text style={styles.mainHeaderText}>
            {data.title}
          </Text>
          <View style={styles.textLabelView}>
            <Text style={styles.textLabel}>{data.duration}</Text>
          </View>
          <Controller />
          <View style={styles.MusicProgresserBar}>
            {<SeekBar trackLength={354} currentPosition={206} />}
          </View>
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
  MusicProgresserBar: {
    width: 425,
  },
});
export default BeginScreenSession;