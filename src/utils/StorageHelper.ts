import AsyncStorage from '@react-native-async-storage/async-storage';

const storeLoginToken = (token) => {
  AsyncStorage.setItem('token', token);
};

const deleteToken = () => {
  AsyncStorage.removeItem('token')
}

const getToken = async () => {
  return await AsyncStorage.getItem('token');
}

export {
  storeLoginToken,
  deleteToken,
  getToken
};