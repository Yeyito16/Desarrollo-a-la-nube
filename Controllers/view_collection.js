import { realusers } from "./global.js";


const ver = document.getElementById("viewdatas")
async function cargar(){

    ver .innerHTML=""
    
    const datas = realusers()
    const querySnapshot = await datas
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        ver.innerHTML+=`
        <tr>
        <th scope="row">${doc.data().email}</th> <!-- Mostrar el correo electrónico -->
        <td>${doc.data().id}</td>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().direccion}</td>
        <td>${doc.data().telefono}</td>
        <td>${doc.data().fecha}</td>
        </tr>
        `
});
}
window.addEventListener("DOMContentLoaded",async()=>
{
    cargar()
})