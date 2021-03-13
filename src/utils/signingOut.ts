import firebaseSetup from '../credential/firebase-setup';

const signOut = async () => {
    const { auth } = firebaseSetup();
    await auth().signOut();
}
export default signOut;