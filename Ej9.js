// Realice una calculadora con las operaciones básicas: suma, resta, multiplicación y división. 
// Se le debe pedir al usuario dos números, la operación a realizar y mostrar el resultado. 
let eleccion = prompt("Cual operacion quiere realizar Sumar/Restar/Multiplicar/Dividir puede escribir la primera letra: ");
let num1 = parseInt(prompt("Diga el el primer numero 1: "));
let num2 = parseInt(prompt("Diga el el primer numero 2: "));
switch (eleccion) {
    case "S":
        document.write("La suma da como resultado: " + (num1 + num2));
    break;

    case "R":
        document.write("La resta da como resultado: " + (num1 - num2));
    break;

    case "M":
        document.write("La multiplicacion da como resultado: " + (num1 * num2));
    break;

    case "D":
        document.write("La division da como resultado: " + (num1 / num2));
    break;

    default:
        document.write("Seleccione una operacion.");
    break;
}