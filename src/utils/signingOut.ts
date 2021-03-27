import firebaseSetup from '../credential/firebase-setup';
import { deleteToken } from './StorageHelper';

const signOut = async () => {
    const { auth } = firebaseSetup();
    deleteToken()
    await auth().signOut();
}
export default signOut;