import { registerUser, sendEmailVerification, auth, loginvalidation } from "./global.js";
import { db } from "./firebase.js";

const registro = document.getElementById('btnreg');

async function register() {
    const email = document.getElementById('emailreg').value;
    const password = document.getElementById('passwordreg').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const id = document.getElementById('user-cc').value;
    const nombre = document.getElementById('edtname').value;
    const direccion = document.getElementById('user-address').value;
    const telefono = document.getElementById('user-phone').value;
    const fecha = document.getElementById('edtdate').value;

    function validarContraseña(password) {
        const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        return regexContraseña.test(password);
    }

    if (!email || !password || !id || !nombre || !direccion || !telefono || !fecha) {
        alert('Rellena todos los campos.');
        return;
    }

    if (email.trim() === "") {
        alert('Ingrese correo electrónico.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    if (!validarContraseña(password)) {
        alert('La contraseña debe tener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula y un carácter especial.');
        return; 
    }  
    
    try {
        await registerUser(email, password, id, nombre, direccion, telefono, fecha);
        const confirmacion = confirm('Registro exitoso de ' + nombre );
        sendEmailVerification(auth, auth.currentUser).then(() => {
            alert('Se ha enviado un correo de verificación');
        });
            if (confirmacion) {
                const email = prompt('Ingrese el correo electrónico del admin:');
                const password = prompt('Ingrese la contraseña del admin:');
                if (email && password ) {
                    await loginvalidation(email, password);
                    window.location.href = '../Templates/adminhome.html'; 
                } else {
                    alert('Por favor ingresa tanto el correo electrónico como la contraseña del administrador.');
                }
            } else {
                alert('No se pudo verificar el correo electrónico.');
            }
    } catch (error) {
        console.error("Error al registrar el usuario: ", error);
        alert('Error al registrar, por favor intenta nuevamente');
    }
}
window.addEventListener('DOMContentLoaded', () => {
    registro.addEventListener('click', register);
});