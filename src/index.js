const usuarios = [
    { identificacion: 109487, nombre: "Yarleno", pin: 4545, saldo: 300000, numeroDeCuenta: 1 },
    { identificacion: 109487, nombre: "Yarleno", pin: 4544, saldo: 150000, numeroDeCuenta: 2 },
    { identificacion: 100555, nombre: "Carlos", pin: 1233, saldo: 1000000, numeroDeCuenta: 1 },
    { identificacion: 100555, nombre: "Carlos", pin: 1234, saldo: 900000, numeroDeCuenta: 2 },
    { identificacion: 119234, nombre: "Camilo", pin: 877, saldo: 500000, numeroDeCuenta: 1},
    { identificacion: 119234, nombre: "Camilo", pin: 8778, saldo: 200000, numeroDeCuenta: 2}
];

// Función para solicitar y devolver la identificación del usuario
function idIngresado() {
    return Number(prompt("digite su número de identificación"));
}

// Función para solicitar y validar el PIN del usuario
function validarPin(usuario) {
    const maxIntentos = 3;
    let intentos = 0;
    let pinIngresado;

    while (intentos < maxIntentos) {
        pinIngresado = Number(prompt("Ingrese su PIN"));
        
        if (pinIngresado === usuario.pin) {
            // Si el PIN es correcto, mostrar el menú de opciones
            menuUsuario(usuario);
            return true; 
        } else {
            intentos++;
            if (intentos < maxIntentos) {
                alert(`PIN incorrecto. Inténtelo de nuevo. Intentos restantes: ${maxIntentos - intentos}`);
            }
        }
    }

    alert("Número máximo de intentos alcanzado. Acceso bloqueado, espere 15 segundos.");
    return false; // Validación fallida después de 3 intentos
}

// Función principal para validar al usuario
function validacionUsu() {
    const id = idIngresado(); // Solicita la identificación del usuario
    const usuario = usuarios.find(u => u.identificacion === id); 
    // Busca el usuario en el array
    
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


 

// Función para mostrar el menú de opciones al usuario
function menuUsuario(usuario) {
    let opcion;

    do {
        opcion = Number(prompt(`Bienvenido, ${usuario.nombre}! ¿Qué deseas realizar?
            1. Consultar saldo.
            2. Retiro.
            3. Transferencia a un tercero
            4. Salir.`));

        switch (opcion) {
            case 1:
                alert(`Su saldo es ${usuario.saldo}`);
                break;

            case 2:
                const retiro = Number(prompt("¿Qué valor deseas retirar? (el cajero únicamente cuenta con billetes de 50000)"));
                if (retiro % 50000 === 0 && retiro <= usuario.saldo) {
                    usuario.saldo -= retiro;
                    alert(`Has retirado ${retiro}. Su nuevo saldo es ${usuario.saldo}`);
                } else {
                    alert("Monto inválido o insuficiente.");
                }
                break;

            case 3:
                const transfer = number(prompt("que valor desea transferir?"))
                usuario.saldo -= transfer;
                if ( Transfer >= 0 ){
                    idDestinatario
                          
                    usuario.saldo(transfer2) += transfer
                alert("");
                break;
                }
            case 4:
                
                alert("");
                break;

            default:
                alert("Selección no válida. Por favor, elige una opción del 1 al 4.");
                break;
        }
    } while (opcion !== 4); // Repetir hasta que el usuario elija salir
}

// Llamada a la función principal para iniciar el proceso
validacionUsu();
