import { config } from '../../config';

const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

class FirebaseServiceProvider {
  constructor(configuration) {
    firebase.initializeApp(configuration);
    this.db = firebase.firestore();

    this.db.settings({
      timestampsInSnapshots: true,
    });

    this.usersCollection = this.db.collection('users');
  }

  async loginWithGoogle(idToken, accessToken) { // eslint-disable-line
    const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    const fbResponse = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
    return fbResponse;
  }

  async logOut() { // eslint-disable-line
    await firebase.auth().signOut();
  }

  async createBackup(userId, stateToSave) {
    this.usersCollection.doc(userId).set({
      backup: stateToSave,
    }, { merge: false });
  }

  async synchronizeData(userId, stateToSave) {
    const doc = await this.usersCollection.doc(userId).get();

    if (doc.exists) {
      return doc.data().backup;
    }
    this.createBackup(userId, stateToSave);
    return null;
  }
}


const firebaseServiceProvider = new FirebaseServiceProvider(config.firebaseConfig);
export default firebaseServiceProvider;
