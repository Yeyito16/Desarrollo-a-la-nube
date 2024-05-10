import {
    loginvalidation,
  } from "./global.js";


const formularioLogin = document.querySelector('#loginbtn');

formularioLogin.addEventListener("click", async (evento) => {
    evento.preventDefault(); // Evitar el envío predeterminado del formulario

    const email = document.getElementById('edtuser').value;
    const contraseña = document.getElementById('edtpassword').value;

    try {
        const credenciales = await loginvalidation(email, contraseña);
        console.log(credenciales);

        const modal = new bootstrap.Modal(document.querySelector('#signinModal'));
        modal.hide();
        
        alert('Autenticación exitosa: ' + credenciales.user.email);
        window.location.href = '../Templates/home.html';
        
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
