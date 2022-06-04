import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDyN30iWs8F7oFBoqzyuwZ9gE5GyIPpUxU",
  authDomain: "idobatakaigi-19f2d.firebaseapp.com",
  databaseURL: "https://idobatakaigi-19f2d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "idobatakaigi-19f2d",
  storageBucket: "idobatakaigi-19f2d.appspot.com",
  messagingSenderId: "1021435413318",
  appId: "1:1021435413318:web:668601b69b09a96e64db47"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({name, text});
};
