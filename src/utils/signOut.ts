import { Alert } from 'react-native';
import {Auth} from 'aws-amplify';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { deleteToken } from './StorageHelper';


function signOutHandler() {
    GoogleSignin.hasPlayServices()
        .then(() => {
            GoogleSignin.signOut();
            deleteToken();
            Auth.signOut();
        })
        .catch((error) => {
            Alert.alert('SOMETHING ELSE WENT WRONG', error.toString());
        })
    console.log('SIGNING OUT');
}


export default signOutHandler;