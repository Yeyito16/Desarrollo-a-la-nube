import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
//import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics .js'
import { 
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
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
//const analytics = getAnalytics();
const auth = getAuth(app);

//metodo de inicio de sesión
export const loginvalidation=(email,password)=> signInWithEmailAndPassword(auth, email, password)

export const logout=()=>signOut(auth);


export function userstate() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
      window.location.href="../index.html"
    }
  });
}

export function forgotkey() {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert('consultar correo electronico')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
