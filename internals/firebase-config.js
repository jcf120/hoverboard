import admin from 'firebase-admin';
// import serviceAccount from '../serviceAccount';

let firestore = null;
export function initializeFirebase() {
  return new Promise((resolve) => {

    const firebaseApp = admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
    firestore = admin.firestore();
    resolve(firebaseApp);
  });
}

export {
  firestore,
}
