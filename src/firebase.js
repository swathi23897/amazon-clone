import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDJCUH8k5tjh1PWZtEB84GDbhcDbrtWmVQ",
    authDomain: "clone-full-e27ed.firebaseapp.com",
    databaseURL: "https://clone-full-e27ed.firebaseio.com",
    projectId: "clone-full-e27ed",
    storageBucket: "clone-full-e27ed.appspot.com",
    messagingSenderId: "503537875315",
    appId: "1:503537875315:web:a19f2abf7281580fbd6d06"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  export {db,auth}