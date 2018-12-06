import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDlx488lW_EXe_eKo3vU4MqWAvIeHGNC88",
    authDomain: "albumens-facilito-react.firebaseapp.com",
    databaseURL: "https://albumens-facilito-react.firebaseio.com",
    projectId: "albumens-facilito-react",
    storageBucket: "albumens-facilito-react.appspot.com",
    messagingSenderId: "979280991122"
  };

  firebase.initializeApp(config);

  export default firebase;