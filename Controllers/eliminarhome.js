import { auth, db, query, where, getDocs, deleteDoc, collection } from "./firebase.js";

const deleteForm = document.getElementById("deleteForm");
const btnDelete = document.getElementById("btndelete");


async function deleteUser() {
    try {

        const email = deleteForm.email.value;

        const userQuery = query(collection(db, "users"), where("email", "==", email));
        const querySnapshot = await getDocs(userQuery);

        if (querySnapshot.empty) {
            throw new Error("Usuario no encontrado.");
        }

        querySnapshot.forEach(async (doc) => {
            await deleteDoc(doc.ref);
            console.log("Documento de usuario eliminado de Firestore");
        });

        const userRecord = await auth.getUserByEmail(email);
        await auth.deleteUser(userRecord.uid);
        
        alert("Usuario eliminado correctamente.");
    } catch (error) {
        console.error("Error al eliminar usuario:", error.message);
        alert("Error al eliminar usuario: " + error.message);
    }
}
btnDelete.addEventListener("click", deleteUser);