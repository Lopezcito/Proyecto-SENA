// Función para manejar el envío del formulario
function enviarFormulario(event) {
    event.preventDefault(); // prevenir el envío por defecto del formulario

    // Obtener los valores de los campos del formulario (Botón Guardar)
    const edad = document.getElementById("edad").value;
    const estatura = document.getElementById("estatura").value;
    const peso = document.getElementById("peso").value;
    const hombros = document.getElementById("hombros").value;
    const torax = document.getElementById("torax").value;
    const bicepsRelajado = document.getElementById("biceps-relajado").value;
    const bicepsContraido = document.getElementById("biceps-contraido").value;
    const antebrazo = document.getElementById("antebrazo").value;
    const cintura = document.getElementById("cintura").value;
    const cadera = document.getElementById("cadera").value;
    const musloSuperior = document.getElementById("muslo-superior").value;
    const musloMedio = document.getElementById("muslo-medio").value;
    const pantorrilla = document.getElementById("pantorrilla").value;

    // Simular el envío de datos (Botón Guardar) (se debería reemplazar con llamada real a un servidor)
    console.log("Edad: ", edad);
    console.log("Estatura: ", estatura);
    console.log("Peso: ", peso);
    console.log("Hombros: ", hombros);
    console.log("Torax: ", torax);
    console.log("Biceps relajado: ", bicepsRelajado);
    console.log("Biceps contraído: ", bicepsContraido);
    console.log("Antebrazo: ", antebrazo);
    console.log("Cintura: ", cintura);
    console.log("Cadera: ", cadera);
    console.log("Muslo superior: ", musloSuperior);
    console.log("Muslo medio: ", musloMedio);
    console.log("Pantorrilla: ", pantorrilla);

    // Aquí se puede añadir el código para enviar los datos al servidor, si es necesario
}

// Función para inicializar el manejo del formulario (Botón Guardar)
function inicializarFormulario() {
    // Obtener el formulario y añadir el manejador de eventos para el envío
    const medidasForm = document.getElementById("medidas-form");
    medidasForm.addEventListener('submit', enviarFormulario);
}

// Inicializar el formulario cuando el contenido del documento esté cargado (Botón Guardar)
document.addEventListener('DOMContentLoaded', inicializarFormulario);


// Obtener elementos de la ventana emergente
let emergente = document.getElementById("emergente"); //div de la ventana emergente
let btnEmergente = document.getElementById("btn-emergente"); // Botón "ver registros", q abre la ventana emergente
let btnCerrar = document.getElementById("btn-cerrar"); //Botón para cerrar la ventana emergente

// Abrir la ventana emergente cuando el usuario haga click en "ver registros"
btnEmergente.onclick = function () {
    emergente.style.display = "block"; // Muestra la emergente
}

// Cerrar la ventana emergente cuando el usuario hace clic en "cerrar"
btnCerrar.onclick = function() {
    emergente.style.display = "none"; // Oculta la ventana emergente
}

// Cerrar la ventana emergente   cuando el usuario hace clic fuera de la modal
window.onclick = function(event) {
    if (event.target == emergente) {
        emergente.style.display = "none"; // Oculta la ventana emergente si se hace clic fuera de ella
    }
}


