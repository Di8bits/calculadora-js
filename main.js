
let resta = document.getElementById("resta").textContent;
let suma = document.getElementById("suma").textContent;
let ac = document.getElementById("ac").textContent;
let multiplicacion = document.getElementById("multiplicacion").textContent;
let division = document.getElementById("division").textContent;
let pantalla = document.getElementById("pantalla")
let primerNumero = '';
let segundoNumero = '';
let operacion = '';


function getNumbers(num) {
    if (operacion === '') {


        pantalla.innerHTML = pantalla.innerHTML + num
        primerNumero = pantalla.innerHTML
        console.log(primerNumero)

        return primerNumero;


    } else {

        pantalla.innerHTML = pantalla.innerHTML + num
        segundoNumero = pantalla.innerHTML
        console.log(segundoNumero)

        return segundoNumero;

    }

}

function limpiarPantalla() {
    pantalla.innerHTML = '';
    primerNumero = '';
    segundoNumero = '';
    operacion = '';

}

function operador(op) {
    operacion = op;
    pantalla.innerHTML = '';
    return operacion;
}

function resultado() {

    if (operacion === '+') {
        resultado = parseFloat(primerNumero) + parseFloat(segundoNumero)
        pantalla.innerHTML = resultado

    }
    else if (operacion === '-') {
        resultado = parseFloat(primerNumero) - parseFloat(segundoNumero)
        pantalla.innerHTML = resultado
    }
    else if (operacion === "*") {
        resultado = parseFloat(primerNumero) * parseFloat(segundoNumero)
        pantalla.innerHTML = resultado
    }
    else if (operacion === "÷") {
        resultado = parseFloat(primerNumero) / parseFloat(segundoNumero)
        pantalla.innerHTML = resultado
    }
}


/*Esto sirve para refrescar la pagina en lo que arreglo los bugs*/ 
const acC = document.getElementById("ac");

acC.addEventListener("click", (_) => {
  // el _ es para indicar la ausencia de parametros
  location.reload();
});



