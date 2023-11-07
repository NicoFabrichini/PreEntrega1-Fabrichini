
let nombre = prompt("Por favor, ingrese su nombre:");
alert("Hola, " + nombre + "!");
if (nombre ==="")
alert("No ingresaste nada")

// Solicitar al usuario que ingrese su edad
let edad = parseInt(prompt("Por favor, ingrese su edad:"));


// Comprobar si la edad es mayor o igual a 18

if (!isNaN(edad)) {
    if (edad >= 18) {
        alert("Podes Ingresar, sos mayor de edad.");

        let suma = 0;

        while (true) {
            const entrada = prompt("Por favor, ingrese un número positivo (o uno negativo para finalizar):");
            const numero = parseFloat(entrada);

            if (isNaN(numero)) {
                alert("La entrada no es un número válido. Intente de nuevo.");
            } else {
                if (numero < 0) {
                    break; // Salir del ciclo si se ingresa un número negativo
                }
                suma += numero;
            }
        }

        alert("La suma de los números ingresados es: " + suma);
    } else {
        alert("Sos menor de edad, no podes ingresar");
    }
} else {
    alert("La entrada no es un número válido.");
}

