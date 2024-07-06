import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyChnIVSG-MBtBp3zFXqp9lZIJAsuUi4qGQ",
  authDomain: "react-netflix-clone-216e1.firebaseapp.com",
  projectId: "react-netflix-clone-216e1",
  storageBucket: "react-netflix-clone-216e1.appspot.com",
  messagingSenderId: "859833862528",
  appId: "1:859833862528:web:cfc0535c56f92f39d15965",
  measurementId: "G-L6XZVNVWQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);