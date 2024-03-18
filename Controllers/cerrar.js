
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyBOscswkecJASf1VRibhLSKNWrvnWg-RMM",
    authDomain: "desarrollo-a-la-nube.firebaseapp.com",
    projectId: "desarrollo-a-la-nube",
    storageBucket: "desarrollo-a-la-nube.appspot.com",
    messagingSenderId: "326403613720",
    appId: "1:326403613720:web:19f119e0e1624178b00f6d",
    measurementId: "G-QN84ZMX30C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        alert('Sesión cerrada');
    }).catch((error) => {
        alert('Error al cerrar sesión');
    });
});
