import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Platform,
} from 'react-native';

import Controller from '../components/Controller';

import SeekBar from '../components/SeekBar';

import Video from 'react-native-video';

import IconIoni from 'react-native-vector-icons/Ionicons';
import Colors from '../constant/Colors';

import getEmotionImages from '../utils/ImageGenerator';

class Player extends Component {
  state: {paused: boolean; totalLength: number; currentPosition: number};
  setState: any;
  refs: any;
  loadStart: any;
  props: any;
  onEnd: any;
  videoError: any;
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      totalLength: 1,
      currentPosition: 0,
    };
  }

  setDuration(data) {
    this.setState({totalLength: Math.floor(data.duration)});
  }

  setTime(data) {
    this.setState({currentPosition: Math.floor(data.currentTime)});
  }

  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time,
      paused: false,
    });
  }

  onBack() {
    if (this.state.currentPosition < 10) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({isChanging: true});
      setTimeout(
        () =>
          this.setState({
            currentPosition: 0,
            paused: false,
            totalLength: 1,
            isChanging: false,
          }),
        0,
      );
    } else {
      this.refs.audioElement.seek(0);
      this.setState({
        currentPosition: 0,
      });
    }
  }

  render() {
    const {data} = this.props.route.params;

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
        fontSize: 20,
        padding:5
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

    const backButton = (
      <IconIoni name="chevron-back-outline" size={27} color={Colors.white} />
    );

    const demoAudio = data.mediaUrl;
    const video = (
      <Video
        source={{uri: demoAudio}} // Can be a URL or a local file.
        ref="audioElement"
        paused={this.state.paused} // Pauses playback entirely.
        resizeMode="cover" // Fill the whole screen at aspect ratio.
        repeat={true} // Repeat forever.
        onLoadStart={this.loadStart} // Callback when video starts to load
        onLoad={this.setDuration.bind(this)} // Callback when video loads
        onProgress={this.setTime.bind(this)} // Callback every ~250ms with currentTime
        onEnd={this.onEnd} // Callback when playback finishes
        onError={this.videoError} // Callback when video cannot be loaded
        style={{height: 0, width: 0}}
      />
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
            onPress={() =>
              this.props.navigation.navigate('MeditationListAudios')
            }>
            {backButton}
          </TouchableOpacity>
          <View style={styles.mainContainer}>
            <Text style={styles.mainHeaderText}>{data.title}</Text>
            <View style={styles.textLabelView}>
              <Text style={styles.textLabel}>{data.duration}</Text>
            </View>
              <Controller
                onPressPlay={() => this.setState({paused: false})}
                onPressPause={() => this.setState({paused: true})}
                onBack={this.onBack.bind(this)}
                paused={this.state.paused}
              />

              <View style={styles.MusicProgresserBar}>
                {
                  <SeekBar
                    onSeek={this.seek.bind(this)}
                    trackLength={this.state.totalLength}
                    currentPosition={this.state.currentPosition}
                  />
                }
              {video}
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Player;
