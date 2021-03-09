import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constant/Colors';

const BeginButton = (props: any) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onClickButtonHandler}>
      <View style={styles.buttonContainer}>
        <Text style={{...styles.button, ...props.style}}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 0,
    width: 380,
    borderColor: Colors.white,
    borderRadius: 25,
    padding: 12,
    backgroundColor: Colors.button,
    alignItems: 'center',
    marginTop: 32,
  },
  button: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Raleway-Regular',
  },
});
export default BeginButton;
