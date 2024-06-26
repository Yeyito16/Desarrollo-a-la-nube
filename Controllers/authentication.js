import {
    loginvalidation,
  } from "./global.js";

import { db, doc, getDoc } from './firebase.js';

const formularioLogin = document.querySelector('#loginbtn');

formularioLogin.addEventListener("click", async (evento) => {
    evento.preventDefault(); 

    const email = document.getElementById('edtuser').value;
    const contraseña = document.getElementById('edtpassword').value;

    try {
        const credenciales = await loginvalidation(email, contraseña);
        const user = credenciales.user;
        console.log("Credenciales del usuario:", credenciales);

        const userDoc = await getDoc(doc(db, "users", user.uid));
        
        if (!userDoc.exists()) {
            console.error("Documento del usuario no encontrado:", user.uid);
            throw new Error("No se encontró el documento del usuario.");
        }

        const userData = userDoc.data();
        console.log("Datos del usuario:", userData);

        const modal = new bootstrap.Modal(document.querySelector('#signinModal'));
        modal.hide();
        
        alert('Autenticación exitosa: ' + credenciales.user.email);

        if (userData.role === "admin") {
            window.location.href = '../Templates/adminhome.html'; 
        } else {
            window.location.href = '../Templates/home.html'; 
        }
        
    } catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        switch(errorCode) {
            case "auth/invalid-email":
                alert('El correo electrónico no es válido.');
                break;
            case "auth/user-disabled":
                alert('El usuario ha sido deshabilitado.');
                break;
            case "auth/user-not-found":
                alert('No se encontró ningún usuario con este correo electrónico.');
                break;
            case "auth/missing-password":
                alert('No hay ninguna contrseña');
                break;
            case "auth/invalid-credential":
                alert('Contraseña incorrecta.');
                break;
            default:
                alert(errorMessage);
        }
    }
});

atrasbtn.addEventListener('click', (e) => {
    auth.signOut().then(() => {
        alert('Sesión cerrada');
    }).catch((error) =>{+
        alert('Error al cerrar sesión');
    });
})
