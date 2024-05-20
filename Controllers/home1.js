//import { getData } from "./database.js";

import {
  logOut,
  sendEmailToResetPassword,
} from "./global.js";

const cerrar = document.getElementById('btnlogout');
const recuperar = document.getElementById('btnrecuperar');

document.addEventListener("DOMContentLoaded", () => {

  async function sesion() {
    try {
      await logOut();
      alert('Sesión cerrada');
      window.location.href = "../index.html";
    } catch (error) {
      alert('Sesión no cerrada');
    }
  }

  async function enviarCorreoRecuperacion() {
    const email = prompt("Introduce tu dirección de correo electrónico:");
    if (email) {
      try {
        await sendEmailToResetPassword(email);
        alert('Se envio un correo para el restablecimiento de la contraseña.');
      } catch (error) {
        console.error('Error al enviar el correo para el restablecimiento de la contraseña:', error.message);
        alert('Error al enviar el correo para el restablecimiento de la contraseña.');
      }
    }
  }

  cerrar.addEventListener("click", sesion);
  recuperar.addEventListener("click", enviarCorreoRecuperacion);
});