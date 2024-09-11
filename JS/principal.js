// Obtener elementos de la ventana emergente
let emergente = document.getElementById("emergente"); //div de la ventana emergente
let btnEmergente = document.getElementById("btn-usuario"); // Botón "ver registros", q abre la ventana emergente

// Abrir la ventana emergente cuando el usuario haga click en "Imágen Usuario"
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

