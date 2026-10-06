let cont = 0;
let verdaderoA = 0;
let falsoB = 0;
let verdaderoC = 0; 

function reinicio() {
    location.reload();
}
document.getElementById('reinicio').addEventListener('click', reinicio);

function enviar() {
    if (cont < 3) {
            alert('El numero de respuestas marcadas son: ' + cont + '. Debe responder todas para poder enviar');
            cont=0;
        } else if (cont > 3) { 
            alert('Te has pasado de la raya repitelo anda');
            cont=0;
        } else {
            alert('El numero de aciertos de: ' + (verdaderoA + falsoB + verdaderoC));
            const res = window.confirm('Haga clic en Aceptar para ver los resultados de sus test o pulse Cancelar para ver las soluciones'); 
            cont = 0;
        }
}
document.getElementById('boton').addEventListener('click', enviar)

function verdaderosA() {
    verdaderoA++;
    cont++;
    // Desabilitar los botones
    document.getElementById('verdadero-andalucia').disabled = true;
    document.getElementById('falso-andalucia').disabled = true;
}
document.getElementById('verdadero-andalucia').addEventListener('click', verdaderosA);

function falsosB() {
    falsoB++;
    cont++;
    // Desabilitar los botones
    document.getElementById('falso-barca').disabled = true;
    document.getElementById('verdadero-barca').disabled = true;
}
document.getElementById('falso-barca').addEventListener('click', falsosB);

function verdaderosC() {
    verdaderoC++;
    cont++;
    document.getElementById('verdadero-java').disabled = true;
    document.getElementById('falso-java').disabled = true;
}
document.getElementById('verdadero-java').addEventListener('click', verdaderosC);

function falsosA() {
    cont++;
    // Desabilitar los botones
    document.getElementById('verdadero-andalucia').disabled = true;
    document.getElementById('falso-andalucia').disabled = true;
}
document.getElementById('falso-andalucia').addEventListener('click', falsosA);

function verdaderosB() {
    cont++;
    // Desabilitar los botones
    document.getElementById('verdadero-barca').disabled = true;
    document.getElementById('falso-barca').disabled = true;
}
document.getElementById('verdadero-barca').addEventListener('click', verdaderosB);

function falsosC() {
    cont++;
    // Desabilitar los botones
    document.getElementById('verdadero-java').disabled = true;
    document.getElementById('falso-java').disabled = true;
}
document.getElementById('falso-java').addEventListener('click', falsosC);