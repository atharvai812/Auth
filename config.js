import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAmlDQeX8-Aeo8S7PCBmcpbwk5m3OKyQ5k",
  authDomain: "attendance-system-2ba42.firebaseapp.com",
  projectId: "attendance-system-2ba42",
  storageBucket: "attendance-system-2ba42.appspot.com",
  messagingSenderId: "777169665081",
  appId: "1:777169665081:web:cb1e6b72ddb12e500c21e8",
  measurementId: "G-PSJ3YCY4R6"
};
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }

    export { firebase}