
window.addEventListener('DOMContentLoaded', () => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    const email = queryParams.get('email');
    const nombre = queryParams.get('nombre');
    const fecha = queryParams.get('fecha');

    document.getElementById('cardTitle').textContent = id;
    document.getElementById('cardEmail').textContent = email;
    document.getElementById('cardNombre').textContent = nombre;
    document.getElementById('cardFecha').textContent = fecha;

    document.getElementById('updateBtn').addEventListener('click', () => {
        
        alert('Actualizar funcionalidad no implementada.');
    });

    document.getElementById('deleteBtn').addEventListener('click', () => {
        
        alert('Borrar funcionalidad no implementada.');
    });
});