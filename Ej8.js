// Transformar un bucle while en un bucle for. 
let i = 1;
let num = prompt("Diga de que numero quiere saber la tabla de multiplicar: ");
while (i <= 10) {
    console.log(num + " x " + i + ": " + (num * i));
    i++;
}

for (let j=1; j <= 10; j++) {
    console.log(num + " x " + j + ": " + (num * j));
}