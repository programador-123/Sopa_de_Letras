let cont = 0;
let verdadero = 0;
let falso = 0;
let v1 = document.getElementsByClassName('andalucia');
let v2 = document.getElementsByClassName('barca');
let v3 = document.getElementsByClassName('java');

if (document.getElementsByClassName('verdadero').onclick) {
    document.getElementsById('andalucia').style.color = 'green';
    document.getElementsById('andalucia').innerHTML = 'Elegiste verdadero';
    document.getElementsById('barca').style.color = 'green';
    document.getElementsById('barca').innerHTML = 'Elegiste verdadero';
    document.getElementsById('java').style.color = 'green';
    document.getElementsById('java').innerHTML = 'Elegiste verdadero';
} else if (document.getElementsByClassName('falso').onclick) {
    document.getElementsById('andalucia').style.color = 'red';
    document.getElementsById('andalucia').innerHTML = 'Elegiste falso';
    document.getElementsById('barca').style.color = 'red';
    document.getElementsById('barca').innerHTML = 'Elegiste falso';
    document.getElementsById('java').style.color = 'red';
    document.getElementsById('java').innerHTML = 'Elegiste falso';
}   

if (res == false) {
    window.location.href = 'VoF_resultado.html';
} else {
    window.location.href = 'VoF_solucion.html';
}