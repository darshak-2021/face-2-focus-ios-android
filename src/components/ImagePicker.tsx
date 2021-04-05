import React, {useState} from 'react';

import {TouchableOpacity, View, Alert, StyleSheet} from 'react-native';

import ImagePicker from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../constant/Colors';

const SimpleImagePicker = (props: any) => {
  const [imageSource, setImageSource] = useState(null);

  console.log(props);

  const selectImage = () => {
    let options = {
      title: 'You can choose one image',
      storageOptions: {
        skipBackup: true,
      },
      noData: true,
      mediaType: 'photo',
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log({response});
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        console.log({source});
        setImageSource(source.uri);
        props.onImagePicked(source.uri)
      }
    });
  };

  return (
    <TouchableOpacity onPress={selectImage}>
      <View style={styles.imagePickerContainer}>
        <Icon name="cloud-upload" size={30} color={Colors.silver} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imagePickerContainer: {
    justifyContent: 'center',
    marginTop: 7,
  },
});

export default SimpleImagePicker;
