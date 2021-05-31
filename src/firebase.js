import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCdr3VQPG_60keRqd7_-_U2xpvzGyw-cyk",
    authDomain: "linkedin-clone-7a437.firebaseapp.com",
    projectId: "linkedin-clone-7a437",
    storageBucket: "linkedin-clone-7a437.appspot.com",
    messagingSenderId: "266675848338",
    appId: "1:266675848338:web:2565d4151c9eda9bce924b"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};