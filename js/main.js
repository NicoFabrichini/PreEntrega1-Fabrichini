console.log("conectado")

let nombre = prompt("Por favor, ingrese su nombre:");
if (nombre === "") {
    alert("No ingresaste nada")
}
else {
    alert("Hola, " + nombre + "!")
};

let edad = parseInt(prompt("Por favor, ingrese su edad:"));
if (!isNaN(edad))
    if (edad >= 18) {
        alert("Podes Ingresar, sos mayor de edad.");
    }
    else {
        alert("Sos menor de edad, no podes ingresar");
    }
else {
    alert("La entrada no es un número válido.");
}


// Inicializamos un array para representar el carrito de compras
const carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito() {
    const producto = prompt("Ingrese el nombre del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (!isNaN(precio) && precio > 0) {
        carrito.push({ nombre: producto, precio: precio });
        alert(`${producto} se ha agregado al carrito.`);
    } else {
        alert("El precio ingresado no es válido.");
    }
}

// Función para calcular el total del carrito
function calcularTotal() {
    let total = 0;
    for (const item of carrito) {
        total += item.precio;
    }
    alert(`El total del carrito es: $${total.toFixed(2)}`);
}

// Función principal para gestionar el carrito de compras
function main() {
    while (true) {
        const opcion = prompt("Seleccione una opción:\n1. Agregar producto al carrito\n2. Calcular total del carrito\n3. Salir");

        if (opcion === "1") {
            agregarAlCarrito();
        } else if (opcion === "2") {
            calcularTotal();
        } else if (opcion === "3") {
            break;
        } else {
            alert("Opción no válida. Por favor, seleccione una opción válida.");
        }
    }
}

// Llamamos a la función principal para iniciar la interacción con el usuario
main();


