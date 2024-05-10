import { collection, addDoc, db } from "./global.js";

const registro = document.getElementById('btnreg');

async function register() {
    const id = document.getElementById('user-cc').value;
    const nombre = document.getElementById('edtname').value;
    const direccion = document.getElementById('user-address').value;
    const telefono = document.getElementById('user-phone').value;
    const fecha = document.getElementById('edtdate').value;

    if (!id || !nombre || !direccion || !telefono || !fecha) {
        alert('Rellena todos los campos.');
        return; 
    }
    
    try {
        const refDoc = await addDoc(collection(db, "users"), {
            id: id,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            fecha: fecha
        });
        console.log("Documento escrito con ID: ", refDoc.id);
        alert('Registro exitoso de ' + nombre);
        window.location.href = 'registro_database.html';
    } catch (error) {
        console.error("Error al agregar documento: ", error);
        alert('Error al registrar, por favor intenta nuevamente');
        console.log('La sesión de ' + nombre + ' no pudo ser validada');
    }
}

window.addEventListener('DOMContentLoaded', () => {
  registro.addEventListener('click', register);
});