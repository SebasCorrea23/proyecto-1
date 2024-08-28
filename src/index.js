const usuarios = [
    { identificacion: 109487, nombre: "Yarleno", pin: 4545 },
    { identificacion: 100555, nombre: "Carlos", pin: 1234 },
    { identificacion: 119234, nombre: "Camilo", pin: 8778 }
];

// Función para solicitar y devolver la identificación del usuario
function idIngresado() {
    return Number(prompt("Ponga su número de identificación"));
}

// Función para solicitar y validar el PIN del usuario
function validarPin(usuario) {
    const maxIntentos = 3;
    let intentos = 0;
    let pinIngresado;

    while (intentos < maxIntentos) {
        pinIngresado = Number(prompt("Ingrese su PIN"));
        
        if (pinIngresado === usuario.pin) {
            prompt(`Bienvenido, ${usuario.nombre}!`); // Reemplaza el alert con prompt
            return true; // Validación exitosa
        } else {
            intentos++;
            if (intentos < maxIntentos) {
                alert(`PIN incorrecto. Inténtelo de nuevo. Intentos restantes: ${maxIntentos - intentos}`);
            }
        }
    }

    alert("Número máximo de intentos alcanzado. Acceso bloqueado.");
    return false; // Validación fallida después de 3 intentos
}

// Función principal para validar al usuario
function validacionUsu() {
    const id = idIngresado(); // Solicita la identificación del usuario
    const usuario = usuarios.find(u => u.identificacion === id); // Busca el usuario en el array
    
    if (usuario) {
        // Si el usuario existe, valida el PIN
        const validacionExitosa = validarPin(usuario);
        if (!validacionExitosa) {
            alert("No se pudo validar al usuario. Inténtelo de nuevo más tarde.");
        }
    } else {
        alert("Usuario no encontrado.");
    }
}

// Llamada a la función principal para iniciar el proceso
validacionUsu();
