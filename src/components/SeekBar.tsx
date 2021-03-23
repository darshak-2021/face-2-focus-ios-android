import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Slider from 'react-native-slider'
function pad(n: string | number | any[], width: number, z = 0) {
  const numberAssignToString = z.toString();
  n = n + '';
  return n.length >= width
    ? n
    : new Array(width - n.length + 1).join(numberAssignToString) + n;
}
const minutesAndSeconds = (position: number) => [
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
];
const SeekBar = (props) => {
  const elapsed = minutesAndSeconds(props.currentPosition);
  const remaining = minutesAndSeconds(
    props.trackLength - props.currentPosition,
  );
  const seekBarSlide = (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>{elapsed[0] + ':' + elapsed[1]}</Text>
        <View style={{flex: 1}} />
        <Text style={[styles.text, {width: 40}]}>
          {props.trackLength > 1 && '-' + remaining[0] + ':' + remaining[1]}
        </Text>
      </View>
      <Slider
        maximumValue={Math.max(props.trackLength, 1, props.currentPosition + 1)}
        onSlidingStart={props.onSlidingStart}
        onSlidingComplete={props.onSeek}
        value={props.currentPosition}
        style={styles.slider}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="rgba(255, 255, 255, 0.14)"
        thumbStyle={styles.thumb}
        trackStyle={styles.track}
      />
    </View>
  );
  return seekBarSlide;
};
const styles = StyleSheet.create({
  slider: {
    marginTop: -12,
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    textAlign: 'center',
  },
});
export default SeekBar;