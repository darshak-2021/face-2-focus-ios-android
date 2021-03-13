import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
// import database from '';
// import storage from '';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '510250510237-dds8kmo22tn03l462ao2dvkii99uot63.apps.googleusercontent.com',
});

export default () => {
    return { firebase, auth }
}