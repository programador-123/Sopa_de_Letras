// Determinar si un año es o no bisiesto. 
// Para ello tenga el cuenta las siguientes instrucciones: 
// 1. Si el año es uniformemente divisible por 4, vaya al paso 2. De lo contrario, vaya al paso 5.
// 2. Si el año es uniformemente divisible por 100, vaya al paso 3. De lo contrario, vaya al paso 4.
// 3. Si el año es uniformemente divisible por 400, vaya al paso 4. De lo contrario, vaya al paso 5.
// 4. El año es un año bisiesto (tiene 366 días).
// 5. El año no es un año bisiesto (tiene 365 días).
let ano = parseInt(prompt("Diga el año en el que se encuentra: "));
let dias = 365;
if (ano%4 == 0 || ano%100 == 0 || ano%400 == 0) {
    dias = 366;
    console.log("El año " + ano + " es un año bisiesto y por tanto tiene " + dias + " dias");
} else {
    console.log("No es un año bisiesto");
}
