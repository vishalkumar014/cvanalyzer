import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMNOHUGOh5LkFgfDDB2CZe5kGgsP1rfFA",
  authDomain: "cvanalyzer-426312.firebaseapp.com",
  projectId: "cvanalyzer-426312",
  storageBucket: "cvanalyzer-426312.appspot.com",
  messagingSenderId: "170473185277",
  appId: "1:170473185277:web:58d6fe1f6e274579818394",
  measurementId: "G-HPE560PSH1"
};
const app = initializeApp(firebaseConfig);
const imageDb = getStorage(app)
const dataDb = getFirestore(app)
const auth = getAuth(app)
const provider = new  GoogleAuthProvider()

export {imageDb,dataDb,provider,auth}