import { realusers } from "./database";

import ( realusers)

const ver = document.getElementById("viewdatas")
async function cargar(){

    ver .innerHTML=""
    
    const datas = realusers()
    const querySnapshot = await datas
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        ver.innerHTML+=`
        <tr>
        <th scope="row">${doc.data().first}</th>
        <td>${doc.data().last}</td>
        <td>${doc.data().born}</td>
        </tr>
        `
});
}
window.addEventListener("DOMContentLoaded",async()=>
{
    cargar()
})