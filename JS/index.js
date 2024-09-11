//Funcionalidad de el mostrar contraseña
const pass = document.getElementById("contrasena"),
icon = document.querySelector(".bx");

icon.addEventListener("click", e => {
if (pass.type === "password") {
    pass.type = "text";
    icon.classList.remove(`bx-show-alt`)
    icon.classList.add(`bx-hide`)


} else {
    pass.type = "password";
    icon.classList.add(`bx-show-alt`)
    icon.classList.remove(`bx-hide`)
}
})

// Función para manejar el envío del formulario
function enviarFormulario(event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    
    // Obtener los valores de los campos del formulario
    const usuarioId = document.getElementById('usuario-id').value;
    const contrasena = document.getElementById('contrasena').value;
    const recordarId = document.getElementById('recordar-id').checked;

    // Simular el envío de datos (se debería reemplazar con llamada real a un servidor)
    console.log('ID de Usuario:', usuarioId);
    console.log('Contraseña:', contrasena);
    console.log('Recordar ID:', recordarId);

    // Aquí se puede añadir el código para enviar los datos al servidor, si es necesario
}

// Función para inicializar el manejo del formulario
function inicializarFormulario() {
    // Obtener el formulario y añadir el manejador de eventos para el envío
    const form = document.getElementById("login");
    form.addEventListener('submit', enviarFormulario);
}

// Inicializar el formulario cuando el contenido del documento esté cargado
document.addEventListener('DOMContentLoaded', inicializarFormulario);