import { userstate,logout } from "../Controllers/global.js";

userstate()

const cerrar=document.getElementById('btnlogout')

async function sesion(){
    const validar = logout()
    const verificar = await validar

    .then((verificar) => {
        alert('Sesión cerrada')
        window.location.href="../index.html"
      }).catch((error) => {
        alert('Sesión no cerrada')
      });
}

window.addEventListener('DOMContentLoaded',async()=>{
    cerrar.addEventListener('click',sesion)
})

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';

const firebaseConfig = {
  // Tu configuración de Firebase aquí
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const googleLoginBtn = document.getElementById('googleLoginBtn');

googleLoginBtn.addEventListener('click', async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // El usuario ha iniciado sesión correctamente
    // Redirigir al usuario a home.html
    window.location.href = 'home.html';
  } catch (error) {
    console.error('Error durante el inicio de sesión con Google:', error);
    // Manejar errores aquí, si es necesario
  }
});