let filas = parseInt(prompt('Di un numero entre 1 y 12 para definir las filas: '));
let columnas = parseInt(prompt('Di un numero entre 1 y 12 para definir las columnas: '));
/*
    Hacemos una comprobacion de:
    !isNaN = Por si no es un numero lo que recibimos
    >=1 && <=12 = Para comprobar que este en el rango
*/
if (!isNaN(filas) && filas >= 1 && filas <= 12) {
    // Le añadimos el tamaño total de filas
    if (!isNaN(columnas) && columnas >= 0 && columnas <= 12) {
            inicializarTabla();
    } else {
        alert('Te has pasado del rango vuelve a intentarlo');
        location.reload();
    }
} else {
    alert('Te has pasado del rango vuelvelo a intentarlo');
    location.reload();
}

function inicializarTabla() {
    let tabla = new Array(filas);
    let cadena = '<table>';
    for (let  fila = 0;  fila < tabla.length;  fila++) {
        if (columnas >= 0 && columnas <= 12) {
            tabla[fila] =new Array(columnas)
            cadena += '<tr>'; 
            for (let columna = 0; columna < tabla[fila].length; columna++) {
                cadena += '<td> ? </td>';
            }
            cadena += '</tr>';
        } else {
            alert('Te has pasado del rango vuelve a intentarlo');
            location.reload();
        }
    }
    cadena += '</table>';
    document.getElementById('tabla').innerHTML=cadena   ;
}

function introducirPalabra() {
      
}
