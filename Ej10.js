// Modificar el ejercicio anterior para añadir una operación de salir, de modo que mientras 
// el usuario no elija la operación salir estará realizando continuamente operaciones. 
let eleccion = prompt("Cual operacion quiere realizar Sumar/Restar/Multiplicar/Dividir puede escribir la primera letra o puede salir escribiendo salir: ");
while (eleccion !== "salir") {
    let num1 = parseInt(prompt("Diga el el primer numero 1: "));
    let num2 = parseInt(prompt("Diga el el primer numero 2: "));
    switch (eleccion) {
        case "S":
            alert("La suma da como resultado: " + (num1 + num2));
        break;

        case "R":
            alert("La resta da como resultado: " + (num1 - num2));
        break;

        case "M":
            alert("La multiplicacion da como resultado: " + (num1 * num2));
        break;

        case "D":
            alert("La division da como resultado: " + (num1 / num2));
        break;

        default:
            alert("Seleccione una operacion.");
        break;
    }
    eleccion = prompt("Pulse operacion para continuar S/R/M/D o diga salir");
}