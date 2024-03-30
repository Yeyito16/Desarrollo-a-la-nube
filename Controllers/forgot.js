import { forgotkey } from "../Controllers/global.js";

const recuperar = document.getElementById('btnforgot')

async function forgotclave(){
    const validar = forgotkey
    const verificar = await validar

}

window.addEventListener('DOMContentLoaded',async()=>{
    recuperar.addEventListener('click',forgotclave)
})