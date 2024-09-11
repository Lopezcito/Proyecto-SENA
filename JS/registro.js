// Función para manejar el envío del formulario
function enviarFormulario(event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    // Obtener los valores de los campos del formulario
    const usuarioId = document.getElementById('usuario-id').value;
    const email = document.getElementById('email').value;
    const confirmarEmail = document.getElementById('confirmar-email').value;
    const contrasena = document.getElementById('contrasena').value;
    const confirmarContrasena = document.getElementById('confirmar-contrasena').value;
    const telefono = document.getElementById('telefono').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const genero = document.getElementById('genero').value;
    const direccion = document.getElementById('direccion').value;

    // Simular el envío de datos (se debería reemplazar con llamada real a un servidor)
    console.log('ID de Usuario:', usuarioId);
    console.log('Email: ', email);
    console.log('Confirmación de Email: ', confirmarEmail);
    console.log('Contraseña: ', contrasena);
    console.log('Confirmación de Contraseña: ', confirmarContrasena);
    console.log('Teléfono: ', telefono);
    console.log('Fecha de Nacimiento: ', fechaNacimiento);
    console.log('Género: ', genero);
    console.log('Dirección: ', direccion);

    // Aquí se puede añadir el código para enviar los datos al servidor, si es necesario
}

// Función para  inicializar formulario
function inicializarFormulario() { 
    // Obtener el formulario y añadir el manejador de eventos para el envío
    const form = document.getElementById('registro-form');
    form.addEventListener('submit', enviarFormulario);
}

//Inicializar el formulario cuando el contenido del documento esté cargado
document.addEventListener('DOMContentLoaded', inicializarFormulario);