
window.addEventListener('DOMContentLoaded', () => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    const email = queryParams.get('email');
    const nombre = queryParams.get('nombre');
    const direccion = queryParams.get('direccion');
    const telefono = queryParams.get('telefono');
    const fecha = queryParams.get('fecha');

    document.getElementById('cardTitle').textContent = id;
    document.getElementById('cardEmail').textContent = email;
    document.getElementById('cardNombre').textContent = nombre;
    document.getElementById('cardDireccion').textContent = direccion;
    document.getElementById('cardTelefono').textContent = telefono;
    document.getElementById('cardFecha').textContent = fecha;

    console.log("Document cc:", id);
    console.log("Document name:", nombre);
    console.log("Document email:", email);
    console.log("Document direccion:", direccion);
    console.log("Document telefono:", telefono);
    console.log("Document fecha:", fecha);

    document.getElementById('updateBtn').addEventListener('click', () => {
        alert('Actualizar funcionalidad no implementada.');
    });

    document.getElementById('deleteBtn').addEventListener('click', () => {
        alert('Borrar funcionalidad no implementada.');
    });
});