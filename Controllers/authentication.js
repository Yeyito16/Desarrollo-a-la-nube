import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'

import { 
    getAuth,
    signInWithEmailAndPassword  
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

logBtn.addEventListener('click', (e) => {
    var email = document.getElementById('user').value;
    var password = document.getElementById('con').value;

    signInWithEmailAndPassword(auth, email, password).then(cred => {
        alert("Usuario logueado");
        console.log(cred.user);
    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/invalid-email')
            alert('el correo no es valido');
        else if(errorCode == 'auth/user-disabled')
            alert('el usuario ha sido desahabilitado');
        else if(errorCode == 'auth/user-not-found')
            alert('el usuario no existe');
        else if(errorCode == 'auth-wrong-password')
            alert('Contraseña incorrecta');
    });
});

atrasbtn.addEventListener('click', (e) => {
    auth.signOut().then(() => {
        alert('Sesión cerrada');
    }).catch((error) =>{+
        alert('Error al cerrar sesión');
    });
})

auth.onAuthStateChanged(user => {
    if(user){
        console.log("Usuario Activo");
        var email = user.emailVerified;
        if(email){
            window.open("/Templates/home.html")

        }else{
            auth.signOut();

        }
    }else{
        console.log("Usuario Inactivo");
    }

});
