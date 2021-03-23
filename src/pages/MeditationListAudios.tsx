import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Platform,
  Image,
  ScrollView,
  SafeAreaViewBase,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Colors from '../constant/Colors';
// import Icon from 'react-native-vector-icons/Ionicons';
import audiosContent from '../data/contents.json';
import {EMOTIONSTYPE} from '../data/dummyData';
import {SESSIONDETAIL} from '../data/dummyData';
import AudioPlayer from '../components/AudioPlayerCard';
import getEmotionImages from '../utils/ImageGenerator';
import mainContent from '../data/contents.json';
import getEmotionGif from '../utils/GifGenerator';
const Meditation = (props: any) => {
  const [emotion, setEmotion] = useState('sad');
  const audioContent = audiosContent[emotion];
  console.log('Audio content of happy', audioContent);
  // Background Image of the Meditation Screen
  const mainresultViewBgImg = require('../assets/images/rever.jpg');
  // Dynamic Animation of Displaying Cartoon Animation
  const moodBaseAnimate = getEmotionGif(audioContent.emotionId);
  // Two Different Button Redering Logic
  // let backButton =
  //   Platform.OS === 'android' ? (
  //     <Icon name="arrow-back-outline" size={27} color={Colors.white} />
  //   ) : (
  //     <Icon name="chevron-back-outline" size={33} color={Colors.white} />
  //   );
  // Static Text
  const contentHeader = (
    <Text style={styles.headerContent}>Suggest Session on your Mood</Text>
  );
  
  return (
      <View style={styles.screen}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <ImageBackground
          source={mainresultViewBgImg}
          style={styles.image}
          imageStyle={{opacity: 0.6}}>
          <View style={styles.backContainer}>
            {
              /* back Button */
              // Customizable navigation will come here
            }
            {/* {backButton} */}
          </View>
          <View style={styles.animationMaincontainer}>
            {/* Animation Video and Title Description */}
            <View style={styles.gifImageContainer}>
              <Image source={moodBaseAnimate} style={styles.moodImage} />
            </View>
            <View
              style={{
                ...styles.subTitleTextView,
                marginTop: 180,
              }}>
              <Text style={[styles.subTextTitle,{ fontSize: 18, marginTop: 25}]}>
                {audioContent.title}
              </Text>
            </View>
            <View style={styles.subTitleTextView}>
              <Text style={styles.subTextTitle}>
                {audioContent.description}
              </Text>
            </View>
          </View>
          {contentHeader}
          <FlatList
            data={audioContent.media}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({item, index, separators}) => (
              <AudioPlayer
                image={getEmotionImages(item.id)}
                sessionHeader={item.title}
                mode={item.mode}
                duration={item.duration}
                onclick={() =>
                  props.navigation.navigate('AudioBegin', {data: item})
                }
              />
            )}
          />
          {/* <AudioPlayer
            image={require('../assets/images/audio-image/List1.jpg')}
            sessionHeader={SESSIONDETAIL[0].sessionHeader}
            mode={SESSIONDETAIL[0].modeOfSession}
            duration={SESSIONDETAIL[0].duration}
            onclick={() => props.navigation.navigate('AudioBegin')}
          />
          <AudioPlayer
            image={require('../assets/images/audio-image/List2.jpg')}
            sessionHeader={SESSIONDETAIL[1].sessionHeader}
            mode={SESSIONDETAIL[1].modeOfSession}
            duration={SESSIONDETAIL[1].duration}
            onclick={() => {}}
          />
          <AudioPlayer
            image={require('../assets/images/audio-image/List3.jpeg')}
            sessionHeader={SESSIONDETAIL[2].sessionHeader}
            mode={SESSIONDETAIL[2].modeOfSession}
            duration={SESSIONDETAIL[2].duration}
            onclick={() => {}}
          />
          <AudioPlayer
            image={require('../assets/images/audio-image/List4.jpg')}
            sessionHeader={SESSIONDETAIL[3].sessionHeader}
            mode={SESSIONDETAIL[3].modeOfSession}
            duration={SESSIONDETAIL[3].duration}
            onclick={() => {}}
          />
          <AudioPlayer
            image={require('../assets/images/audio-image/List5.jpg')}
            sessionHeader={SESSIONDETAIL[4].sessionHeader}
            mode={SESSIONDETAIL[4].modeOfSession}
            duration={SESSIONDETAIL[4].duration}
            onclick={() => {}}
          /> */}
          <View style={{marginBottom: 80}}></View>
        </ImageBackground>
      </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'rgb(0,0,0)',
    alignItems: 'center',
  },
  backContainer: {
    marginTop: Platform.OS === 'android' ? 28 : 40,
    paddingRight: Platform.OS === 'android' ? 350 : 370,
  },
  animationMaincontainer: {
    backgroundColor: Colors.bgMainPrimary,
    height: 350,
    width: Platform.OS === 'ios' ? 690 : 790,
    opacity: 0.8,
    marginTop: 5,
    borderBottomLeftRadius: Platform.OS === 'ios' ? 1150 : 1100,
    borderBottomRightRadius: Platform.OS === 'ios' ? 1150 : 1100,
  },
  gifImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  moodImage: {
    height: 250,
    width: 250,
    marginTop: 10,
  },
  subTitleTextView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subTextTitle: {
    color: Colors.white,
    fontFamily: 'Raleway-Bold',
  },
  headerContent: {
    color: Colors.white,
    fontSize: 15,
    fontFamily: 'OpenSans-Italic',
    marginTop: 15,
    marginRight: 13,
    marginLeft: Platform.OS === 'android' ? 10 : 0,
    marginBottom: 20,
  },
});
export default Meditation;