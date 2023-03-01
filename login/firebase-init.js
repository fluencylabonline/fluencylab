const firebaseConfig = {
  apiKey: "AIzaSyAwaOF7DmqWykMvgAqZdKdzToY6jWpLGiQ",
  authDomain: "fluencylab-online.firebaseapp.com",
  databaseURL: "https://fluencylab-online-default-rtdb.firebaseio.com",
  projectId: "fluencylab-online",
  storageBucket: "fluencylab-online.appspot.com",
  messagingSenderId: "1048611238645",
  appId: "1:1048611238645:web:94ed80782ec076c7230bbc"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  console.log("Firestore connected successfully");
