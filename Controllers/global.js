import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'

import { 
  getAuth,
  signInWithEmailAndPassword  
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'

const firebaseConfig = {
  apiKey: "AIzaSyBOscswkecJASf1VRibhLSKNWrvnWg-RMM",
  authDomain: "desarrollo-a-la-nube.firebaseapp.com",
  projectId: "desarrollo-a-la-nube",
  storageBucket: "desarrollo-a-la-nube.appspot.com",
  messagingSenderId: "326403613720",
  appId: "1:326403613720:web:19f119e0e1624178b00f6d",
  measurementId: "G-QN84ZMX30C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//metodo de inicio de sesión
export const loginvalidation=(email,password)=>
  signInWithEmailAndPassword(auth, email, password)


