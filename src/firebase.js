import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCejuLROX8jg5SgRHK17GMdl7wpQU8R5Yk",
    authDomain: "facebook-clone-96944.firebaseapp.com",
    databaseURL: "https://facebook-clone-96944.firebaseio.com",
    projectId: "facebook-clone-96944",
    storageBucket: "facebook-clone-96944.appspot.com",
    messagingSenderId: "625878452089",
    appId: "1:625878452089:web:c3d8c1a452897e5fd7d1a8",
    measurementId: "G-ZNHWNQJZCV"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;