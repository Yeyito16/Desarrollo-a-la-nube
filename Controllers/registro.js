import {createUserEmailPassword, sendEmail, auth } from "./global.js";

function validarContraseña(contraseña) {
    const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return regexContraseña.test(contraseña);
}

registro.addEventListener("click", (e) => {
    var email = document.getElementById('emailreg').value;
    var contraseña = document.getElementById('passwordreg').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (email.trim() === "") {
        alert('Ingrese correo electrónico.');
        return;
    }

    if (contraseña !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    if (!validarContraseña(contraseña)) {
        alert('La contraseña debe tener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula y un carácter especial.');
        return; 
    }

    createUserEmailPassword(email, contraseña).then(cred => {
        alert("Usuario creado");
        sendEmail(auth, auth.currentUser).then(() => {
            alert('Se ha enviado un correo de verificación');
            window.location.href = '../Templates/registro_database.html';
        });


    }).catch(error => {
        const errorCode = error.code;

        if (errorCode == 'auth/email-already-in-use')
            alert('El correo ya está en uso');
        else if (errorCode == 'auth/invalid-email')
            alert('El correo no es válido');
        else if (errorCode == 'auth/weak-password')
            alert('La contraseña debe tener al menos 6 caracteres');
    });
});