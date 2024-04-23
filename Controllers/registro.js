import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'

import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function validarContraseña(contraseña) {
    // Mínimo 8 caracteres, al menos una mayúscula, una minúscula y un carácter especial
    const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return regexContraseña.test(contraseña);
}

registro.addEventListener("click", (e) => {
    var email = document.getElementById('emailreg').value;
    var contraseña = document.getElementById('passwordreg').value;

    // Validar contraseña
    if (!validarContraseña(contraseña)) {
        alert('La contraseña debe tener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula y un carácter especial.');
        return; // Salir del proceso de registro
    }

    // Proceder con el registro de usuario
    createUserWithEmailAndPassword(auth, email, contraseña).then(cred => {
        alert("Usuario creado");
        sendEmailVerification(auth.currentUser).then(() => {
            alert('Se ha enviado un correo de verificación');
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