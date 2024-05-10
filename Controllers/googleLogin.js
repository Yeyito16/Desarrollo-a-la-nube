import { 
  signInPopup, 
  googleProvider
} from "./global.js";

const googleButton = document.querySelector('#googleLogin')


googleButton.addEventListener('click', async () => {
  try {
    const credentials = await signInPopup( googleProvider);
    console.log(credentials);

    const modal = new bootstrap.Modal(document.querySelector('#signinModal'));
    modal.hide();

    alert('Autenticación exitosa: ' + credentials.user.displayName);
    window.location.href = '../Templates/home.html';
  } catch (error) {
    console.error(error);
  }
});
