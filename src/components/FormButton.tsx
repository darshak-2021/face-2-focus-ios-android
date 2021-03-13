import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../constant/Colors';
import {windowHeight, windowWidth} from '../utils/Dimentions';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest} activeOpacity={0.8}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 15,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: Colors.button,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Raleway-Regular',
  },
});