import firebase from 'firebase';

// const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyCu3RT4NqyAHLK3bBHKcEZ9HM4oF2SJqq4",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "chefevi",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_ID"
};
firebase.initializeApp(config);

firebase.firestore().settings({});

export default firebase;