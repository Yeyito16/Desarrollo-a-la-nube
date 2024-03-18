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

registro.addEventListener("click", (e)=> {
    var email = document.getElementById('emailreg').value;
    var password = document.getElementById('passwordreg').value;

    createUserWithEmailAndPassword(auth, email, password).then(cred => {
        alert("Usuario creado");
        sendEmailVerification(auth.currentUser).then(() => {
            alert('Se ha enviado un correo de verificación');
        });

    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/email-already-in-use')
            alert('el correo ya esta en uso');
        else if(errorCode == 'auth/invalid-email')
            alert('el correo no es válido');
        else if(errorCode == 'auth/weak-password')
            alert('la contraseña debe tener al menos 6 caracteres');
    });
});