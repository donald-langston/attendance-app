import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMWY6Uf7rCOXc88-PabXSWQK_MmXPIYvU",
  authDomain: "attendance-app-77f33.firebaseapp.com",
  databaseURL: "https://attendance-app-77f33.firebaseio.com",
  projectId: "attendance-app-77f33",
  storageBucket: "attendance-app-77f33.appspot.com",
  messagingSenderId: "91955630492",
  appId: "1:91955630492:web:88fae9fc91107107b87859",
  measurementId: "G-9Y8YQ3GWRG"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();