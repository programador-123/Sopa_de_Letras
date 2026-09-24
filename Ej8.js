// Transformar un bucle while en un bucle for. 
let nota = parseInt(prompt("Escriba su nota: "));
console.log("Dale a -1 para terminar.");
while (nota >= 0 && nota <= 10) {
    if (nota >= 5) {
        console.log("Estas aprobado");
    } else {
        console.log("Estas suspenso");
    }
}