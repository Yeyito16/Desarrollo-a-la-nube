import { 
    auth,
    createUserEmailPassword,
    sendEmailVerification,
    deleteCurrentUser,
    onAuthChanged,
    logOut,
  } from "./global.js";

import { getFirestore, collection, query, where, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const db = getFirestore();

const consultarUsuarios = () => {

};

  document.addEventListener("DOMContentLoaded", () => {
    const registrarBtn = document.getElementById("registrar");
    const eliminarBtn = document.getElementById("eliminar");
    const consultarBtn = document.getElementById("consultar");
    const cerrarBtn = document.getElementById("cerrar");

    onAuthChanged(user => {
  });

    registrarBtn.addEventListener("click", () => {
      window.location.href = "../Templates/registro_databaseadmin.html";
    });
  
    eliminarBtn.addEventListener("click", () => {
      window.location.href = '../Templates/eliminarhome.html';
    });
  
    consultarBtn.addEventListener("click", () => {
      consultarUsuarios();
      window.location.href = '../Templates/ViewCollection.html';
    });

    cerrarBtn.addEventListener("click", () => {
      logOut();
      window.location.href = "../index.html";
      alert("Sesion cerrada exitosamente");
    });
  });
  