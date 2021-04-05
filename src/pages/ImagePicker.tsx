import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Colors from '../constant/Colors';

const SimpleImagePicker = () => {
    
  const [imageSource, setImageSource] = useState(null);
  const selectImage = () => {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
      noData: true,
      mediaType: 'photo', // other values 'video', 'mixed'
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
      }
    });
  };

  return (
    <View style={[styles.flex, styles.centerContainer]}>
      <Text style={[styles.title]}>Simple Image Picker</Text>
      {/* ADD THIS */}
      <View style={styles.imageContainer}>
        {imageSource === null ? (
          <Image
            source={require('../assets/placeholder.jpeg')}
            style={styles.imageBox}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={{uri: imageSource}}
            style={styles.imageBox}
            resizeMode="contain"
          />
        )}
      </View>

      <TouchableOpacity
        onPress={selectImage}
        style={[styles.selectButtonContainer]}>
        <Text style={styles.selectButtonTitle}>Pick an image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bgMainPrimary,
  },
  title: {
    fontSize: 22,
    color: Colors.silver,
  },
  selectButtonContainer: {
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#f8f8f2',
  },
  selectButtonTitle: {
    padding: 10,
    fontSize: 18,
  },
  imageContainer: {
    marginVertical: 0,
  },
  imageBox: {
    width: 300,
    height: 300,
  },
});

export default SimpleImagePicker;
