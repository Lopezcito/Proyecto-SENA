


<!-- CÓDIGO PHP -->
<!-- LOGIN CON PHP -->
<?php
// Iniciar la sesión
session_start();

// Verificar si el formulario ha sido enviado (método POST)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conectar a la base de datos MySQL
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "iron_gym";

    // Crear la conexión con la base de datos
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Escapar los datos ingresados por el usuario
    $usuario_id = mysqli_real_escape_string($conn, $_POST['usuario-id']);
    $contrasena = mysqli_real_escape_string($conn, $_POST['contrasena']);

    // Crear la consulta SQL para obtener el hash de la contraseña almacenada
    $sql = "SELECT contrasena FROM usuarios WHERE id_usuario = '$usuario_id'";

    // Ejecutar la consulta
    $result = $conn->query($sql);

    // Verificar si se encontró el usuario
    if ($result->num_rows > 0) {
        // Obtener la fila con los datos del usuario
        $row = $result->fetch_assoc();

        // Verificar si la contraseña ingresada coincide con el hash almacenado
        if (password_verify($contrasena, $row['contrasena'])) {
            // Si las credenciales son correctas, almacenar el ID del usuario en la sesión
            $_SESSION['usuario_id'] = $usuario_id;

            // Redirigir al usuario a una página de bienvenida (dashboard o home)
            header("Location: principal.php");
            exit();
        } else {
            // Si la contraseña no coincide, mostrar un mensaje de error
            echo "La contraseña es incorrecta.";
        }
    } else {
        // Si no se encuentra ningún usuario con el ID ingresado, mostrar un mensaje de error
        echo "El ID de usuario no existe.";
    }

    // Cerrar la conexión
    $conn->close();
}
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio de sesion</title>
    <!-- Conexion Con CSS -->
    <link rel="stylesheet" href="inisesion.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

</head>

<body> 


    <img  src="/img/Logo_IronGym.png" alt="Logo" class="Logo">
    <div class="container-info">
        <form action="#" method="POST" id="login" class="form">
        <!-- Título principal del formulario de inicio de sesión -->
            <H1>Inicio de Sesion</H1>
            <div class="info-hijos">
        
                <!-- Inicio del formulario de inicio de sesión -->
                <div class="form-group">    
                    <!-- Campo de entrada para el ID del usuario -->
                    <label for="usuario-id"Identificacion>
                        <!-- Icono Usuario -->
                        <img src="/img/IconoUser.png" alt="usuario">
                        <!-- Input para el ID de usuario-->
                        <input type="text" id="usuario-id" name="usuario-id" required>
                    </label> 
                    <span class="titulo-label">ID Usuario</span>
                </div>
                
        
                <!-- Campo de entrada para la contraseña del usuario -->
                <div class="form-group">
                    <label for="contrasena">
                        <!-- Icono Contraseña -->
                        <img src="/img/CandadoContra.png" alt="Contraseña">
                        <!-- Input para la contraseña-->
                        <input type="password" id="contrasena" name="contrasena" required>
                        <i class='bx bx-show-alt'></i>
                    </label>
                    <span class="titulo-label">Contraseña</span>
                </div>  
                
            
                <!-- Checkbox para recordar el ID del usuario -->
                <div class="check">
                    <input type="checkbox" id="recordar-id" name="recordar-id" class="" >
                    <span>Recordarme</span>
                </div>
                
        
                <!-- Botón para enviar el formulario -->
                <button type="submit">Iniciar Sesión</button>

                <hr> <!-- Crea Una linea horizontal en la pag. -->

                <!-- Enlace para restablecer la contraseña a través de Gmail -->
                
                    <!-- Este enlace redirige a una página donde se puede restablecer la contraseña -->
                    <a href="https://gmail.com" class="olvido" target="_self">¿Olvidaste tu contraseña?</a>
            </div>
        </form>        
    </div>

    <!-- Enlace con JS -->
    <script src="/JS/index.js"></script>
</body>
</html>