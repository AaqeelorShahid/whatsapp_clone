import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDvZNdWkjtQ4FzsQQF_NMYIHidql4Vlgao",
  authDomain: "whatsapp-clone-87938.firebaseapp.com",
  projectId: "whatsapp-clone-87938",
  storageBucket: "whatsapp-clone-87938.appspot.com",
  messagingSenderId: "1070585429459",
  appId: "1:1070585429459:web:d772f176d36049b0a18326",
  measurementId: "G-GCG1YE9MFV",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;

