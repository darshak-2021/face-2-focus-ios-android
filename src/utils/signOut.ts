import { Alert } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { deleteToken } from './StorageHelper';

const signOut = async () => {
    try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        deleteToken();
    } catch (error) {
        Alert.alert('SOMETHING ELSE WENT WRONG', error.toString());
    }
}
export default signOut;