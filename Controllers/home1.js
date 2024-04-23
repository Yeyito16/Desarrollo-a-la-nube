import { userstate,logout } from "../Controllers/global.js";
import { deleteUser } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

userstate()

const cerrar=document.getElementById('btnlogout');
const eliminar = document.getElementById('btnborrar');

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
function eliminarUsuario() {
  const auth = getAuth();
  const user = auth.currentUser;

  deleteUser(user)
      .then(() => {
          alert('Usuario eliminado correctamente');
          window.location.href = "../index.html"; // Redirige a la página de inicio u otra página
      })
      .catch((error) => {
          alert('Error al eliminar usuario: ' + error.message);
      });
}

window.addEventListener('DOMContentLoaded',async () => {
    cerrar.addEventListener('click',sesion)
    eliminar.addEventListener('click', eliminarUsuario);
})

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
//import { getAuth, signInWithPopup, FacebookAuthProvider } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';


const firebaseConfig = {
  // Tu configuración de Firebase aquí
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

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

const facebookLoginBtn = document.getElementById('facebookLoginBtn');

facebookLoginBtn.addEventListener('click', async () => {
  try {
    const result2 = await signInWithPopup(auth, facebookProvider);
    // El usuario ha iniciado sesión correctamente
    // Redirigir al usuario a home.html
    window.location.href = 'home.html';
  } catch (error) {
    console.error('Error durante el inicio de sesión con Facebook:', error);
    // Manejar errores aquí, si es necesario
  }
});