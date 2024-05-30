import { deleteUser } from "./global.js"
import { db,doc, updateDoc, deleteDoc, getDoc, auth} from "./firebase.js"


window.addEventListener('DOMContentLoaded', async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    const email = queryParams.get('email');

    try {
        const userDoc = await getDoc(doc(db, "users", id));
        if (userDoc.exists()) {
            const userData = userDoc.data();

            document.getElementById('cardTitle').textContent = id;
            document.getElementById('cardEmail').textContent = email;
            document.getElementById('cardNombre').textContent = userData.nombre;
            document.getElementById('cardDireccion').textContent = userData.direccion;
            document.getElementById('cardTelefono').textContent = userData.telefono;
            document.getElementById('cardFecha').textContent = userData.fecha;
        } else {
            console.error("El documento del usuario no existe.");
            // Puedes mostrar un mensaje de error o redirigir a una página de error
        }
    } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
        // Puedes mostrar un mensaje de error o redirigir a una página de error
    }

    document.getElementById('updateBtn').addEventListener('click', () => {
        document.getElementById('updateForm').style.display = 'block';
    });

    document.getElementById('saveUpdateBtn').addEventListener('click', async () => {
        const newNombre = document.getElementById('updateNombre').value;
        const newDireccion = document.getElementById('updateDireccion').value;
        const newTelefono = document.getElementById('updateTelefono').value;
        const newFecha = document.getElementById('updateFecha').value;

        try {
            await updateDoc(doc(db, "users", id), {
                nombre: newNombre,
                direccion: newDireccion,
                telefono: newTelefono,
                fecha: newFecha
            });

            document.getElementById('cardNombre').textContent = newNombre;
            document.getElementById('cardDireccion').textContent = newDireccion;
            document.getElementById('cardTelefono').textContent = newTelefono;
            document.getElementById('cardFecha').textContent = newFecha;

            alert('Datos actualizados exitosamente.');
        } catch (error) {
            console.error("Error al actualizar el documento: ", error);
            alert('Error al actualizar los datos');
        }
    });

    document.getElementById('deleteBtn').addEventListener('click', async () => {
        if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
            try {
                await deleteDoc(doc(db, "users", id));
                alert('Usuario eliminado exitosamente.');
                await deleteUserWithEmailAndPassword(auth, email);
                window.location.href = '../Templates/registro_database.html';
            } catch (error) {
                console.error("Error al eliminar el documento: ", error);
                alert('Error al eliminar el usuario, por favor intenta nuevamente.');
            }
        }
    });
});