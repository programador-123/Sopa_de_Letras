// Generar un numero aleatorio entre 0 y 100 y pedirle al usuario que escriba un numero 
// del 0 al 100 para que lo adivine y diga el numero de intentos y si falla que 
// le vaya guiando si es menor o mayor irse a las herramientas de ejecución y 
// vayamos comprobando el código aunque este bien a la primera
let numRamdon = Math.random() * (100 + 1);
for (let i=0; i<100;i++) {
    console.log(numRamdon);
}