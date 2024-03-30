import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'

const firebaseConfig = {
  apiKey: "AIzaSyBOscswkecJASf1VRibhLSKNWrvnWg-RMM",
  authDomain: "desarrollo-a-la-nube.firebaseapp.com",
  projectId: "desarrollo-a-la-nube",
  storageBucket: "desarrollo-a-la-nube.appspot.com",
  messagingSenderId: "326403613720",
  appId: "1:326403613720:web:19f119e0e1624178b00f6d",
  measurementId: "G-QN84ZMX30C"
};

import { 
  getAuth,
  signInWithPopup, 
  GoogleAuthProvider
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'
const googleButton = document.querySelector('#googleLogin')

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

googleButton.addEventListener('click', async () => {
  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);

    const modal = new bootstrap.Modal(document.querySelector('#signinModal'));
    modal.hide();

    alert('Autenticación exitosa: ' + credentials.user.displayName);
    window.location.href = '../Templates/home.html';
  } catch (error) {
    console.error(error);
  }
});
