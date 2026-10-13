let filas = parseInt(prompt('Di un numero entre 1 y 12 para definir las filas: '));
let columnas = parseInt(prompt('Di un numero entre 1 y 12 para definir las columnas: '));
let tabla = null;
let palabra = null;
/*
    Hacemos una comprobacion de:
    !isNaN = Por si no es un numero lo que recibimos
    >=1 && <=12 = Para comprobar que este en el rango
*/
if (!isNaN(filas) && filas >= 1 && filas <= 12) {
    // Le añadimos el tamaño total de filas
    if (!isNaN(columnas) && columnas >= 1 && columnas <= 12) {
            inicializarTabla();
    } else {
        alert('Te has pasado del rango vuelve a intentarlo');
        location.reload();
    }
} else {
    alert('Te has pasado del rango vuelvelo a intentarlo');
    location.reload();
}

/* 
    Inicializamos solo la tabla y llamamos a la funcion dibujarTabla(). 
    Que es lo que hace pues basicamente lo he dividido en dos una para que
    guarde el valor de la tabla y no tener que volver a inicializarla y 
    la de dibujar es precisamente eso no volver a solicitar la tabla por 
    pantalla cuando queramos ejecutar cualquier accion.
*/
function inicializarTabla() {
    tabla = new Array(filas);
    for (let  fila = 0;  fila < tabla.length;  fila++) {
        if (columnas >= 0 && columnas <= 12) {
            tabla[fila] =new Array(columnas).fill(null);
        } else {
            alert('Te has pasado del rango vuelve a intentarlo');
            location.reload();
        }
    }
    dibujarTabla();
}

/*function introducirPalabra() {
    alert('Introducir palabra');
    for (let i = 0; i < tabla.length; i++) {
        for (let j = 0; j < tabla[i].length; j++) {
            let columna;
            do {
                columna = parseInt(prompt('Introduce una columna entre 1 y ' + tabla[i].length + ' para la fila ' + (i + 1) + ':'));
                if (isNaN(columna) || columna < 1 || columna > tabla[i].length) {
                    alert('Numero de columna no valido');
                }
            } while (isNaN(columna) || columna < 1 || columna > tabla[i].length);

            let fila;
            do {
                fila = parseInt(prompt('Introduce una fila entre 1 y ' + tabla.length + ' para la columna ' + columna + ':'));
                if (isNaN(fila) || fila < 1 || fila > tabla.length) {
                    alert('Numero de columna no valido');
                }
            } while (isNaN(fila) || fila < 1 || fila > tabla.length);

            let palabra;
            do {
                palabra = prompt(`Introduce una palabra de 1 a ${columnas} caracteres:`);
                if (palabra === null || palabra.trim() === '' || palabra.length > columnas ) {
                    alert(`La palabra tiene que tener entre 1 y ${columnas} caracteres:`);
                }
            } while (palabra === null || palabra.trim() === '' || palabra.length > columnas);

            tabla[fila - 1][columna - 1] = palabra;
            document.getElementById('tabla').innerHTML = palabra;
        }
    }
}*/

function intoducir() {
    alert('Introducir palabra');
    for (let i = 0; i < tabla.length; i++) {
        for (let j = 0; j < tabla[i].length; j++) {
/*
            Hacemos las comprobaciones necesarias para 
            poder introducir la palabra en la tabla
*/
            let columna;
            let fila;
            let palabra = prompt(`Introduce una palabra de 1 a ${columnas} caracteres:`);
            if (palabra === null || palabra.trim() === '' || palabra.length > columnas) {
                // Hacemos la comprobacion de la columna
                do {
                    columna = parseInt(prompt('Introduce una columna entre 1 y ' + tabla[i].length + ' para la fila ' + (i + 1) + ':'));
                    if (isNaN(columna) || columna < 1 || columna > tabla[i].length) {
                        alert('Numero de columna no valido');
                    }
                } while (isNaN(columna) || columna < 1 || columna > tabla[i].length);
                // Hacemos la comprobacion de la fila
                do {
                    fila = parseInt(prompt('Introduce una fila entre 1 y ' + tabla.length + ' para la columna ' + columna + ':'));
                    if (isNaN(fila) || fila < 1 || fila > tabla.length) {
                        alert('Numero de columna no valido');
                    }
                } while (isNaN(fila) || fila < 1 || fila > tabla.length);
            } else {
                tabla[fila - 1][columna - 1] = palabra;
                document.getElementById('tabla').innerHTML = palabra;
            }
        }
    }
}

/* 
    Hay que aleatorizar los carecteres sobrantes
    En pocas palabras sustituir los ? por una letra aleatoria
*/ 
function aleatorizar() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < tabla.length; i++) {
        for (let j = 0; j < tabla[i].length; j++) {
            if (tabla[i][j] === null) {
                const letraAleatoria = letras.charAt(Math.floor(Math.random() * letras.length));
                tabla[i][j] = letraAleatoria;
            }
        }
    }
    dibujarTabla();
}

/*
    Hay que hacer que cuando esten selecionas la palabra a comprobar
    junte todos los caracteres y compruebes si es una de las
    palabras que tienes
*/
function comprobar() {}

/*
    dibujarTabla() lo que va a hacer va a ser con la variable cadena coger
    valores a introducir en cada parte de la tabla por ejemplo los que aun no
    han sido definidos seguiran con ? y las partes que si que es una vez 
    se haya intoducido las palabras se le cambiara el valor 
*/
function dibujarTabla() {
    let cadena = '<table>';
    for (let  fila = 0;  fila < tabla.length;  fila++) {
        cadena += '<tr>';
        for (let columna = 0; columna < tabla[fila].length; columna++) {
            if (tabla[fila][columna] !== null) {
                cadena += '<td>' + tabla[fila][columna] + '</td>';
            } else {
                cadena += '<td>?</td>';
            }
        }
        cadena += '</tr>';
    }
    cadena += '</table>';
    document.getElementById('tabla').innerHTML = cadena;
}