import { userstate, logout } from "../Controllers/global.js";

userstate()
const sesion=document.getElementById('btnatras')

async function cerrarsesion(){

    const verificacion = logout()
    const validacion = await verificacion

    .then((validacion) =>
    {
        alert('Sesión cerrada')
        window.location.href="../index.html"
    })
    .catch((error) => {
        alert=('Sesión no cerrada')
    });

}

window.addEventListener("DOMContentLoaded",async()=>
{
    sesion.addEventListener('click',cerrarsesion)
})