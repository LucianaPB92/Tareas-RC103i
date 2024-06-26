/*
1 - Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.


2 - Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

- La fórmula del perímetro  es p = 2*(a +b)

3 - Números mágicos
Declara una función que genere un número aleatorio entre 1 y 10, luego solicite al usuario que ingrese un número en ese rango e indique si el número ingresado coincide con el aleatorio. Si es así gana el juego, sino pierde, se debe mostrar mensaje en consola.

*/

//ejercicio 1
/*
function mayusculaOMinuscula(frase) {
    if (frase === frase.toUpperCase()) {
        console.log(`La frase "${frase}" está formada sólo por mayúsculas`);
    }else if (frase ===frase.toLowerCase()){
        console.log(`La frase "${frase}" está formada sólo por minúsculas`);
    }else{
        console.log(`La frase "${frase}" está formada por mayúsculas y minúsculas`);
    }
}
mayusculaOMinuscula("el universo está conformado en su totalidad por materia oscura")
mayusculaOMinuscula("EL SOL CONFORMA EL CENTRO DE NUESTRA GALAXIA")
mayusculaOMinuscula("Jupiter es un planeta GASEOSO en cuanto a su composición")
*/

//ejercicio 2
/*
function calcularPerimetroRectangulo () {
     let largo = prompt ("Ingrese primer valór numerico del lado de un rectángulo")
     let ancho = prompt ("Ingrese segundo valór numerico del lado de un rectángulo")
    largo = Number(largo)
    ancho = Number(ancho)
    if (isNaN (largo) || isNaN(ancho)) {
        console.log("Por favor, ingrese valores numéricos válidos.");
    }else{
        let perimetroRectangulo =2*(largo + ancho);

        document.write(`El perímetro del rectángulo cuyo largo es de ${largo} y cuyo ancho es de ${ancho} es igual a = ${perimetroRectangulo}`)
    }
}

calcularPerimetroRectangulo()
*/
//mas completo
/*
function calcularPerimetroRectangulo() {
    let continuar = true
    while (continuar) {
        let largo = prompt ("Ingrese primer valór numerico del lado de un rectángulo")
        let ancho = prompt ("Ingrese segundo valór numerico del lado de un rectángulo")
        if (largo === null || largo === "" || ancho === null || ancho === "") {
            console.log("No se ingresaron valores válidos. Intenta de nuevo.");
            continuar = false
        }else{
            largo = Number(largo)
            ancho = Number(ancho)
            if (!isNaN(largo) && !isNaN(ancho)) {
                let perimetroRectangulo = 2 * (largo + ancho);
                document.write(`El perímetro del rectángulo cuyo largo es de ${largo} y cuyo ancho es de ${ancho} es igual a ${perimetroRectangulo}.`);
                continuar = false;
                
            } else {
                console.error("Por favor, ingrese valores numéricos válidos.");
            }
        }
    }
}
calcularPerimetroRectangulo()
*/

//ejercicio 3
/*
function adivinaElNumeroMagico() {
    let numeroRandom = Math.ceil(Math.random() * 10);
    let numUsuario = prompt("Ingrese un número cualquiera entre 1 y 10 inclusive")
    numUsuario = parseInt(numUsuario)
    if (!isNaN(numUsuario )) {
        if (numUsuario === numeroRandom) {
            console.warn("GANASTE EL JUEGO!");
        }else {
            console.log(`Lo siento, el número aleatorio era ${numeroRandom}. Has perdido.`);
        }
    }else {
        console.log("No ingresaste un valor numérico.Por favor, ingresa un número válido entre 1 y 10.");
    }
}

adivinaElNumeroMagico()
*/
//mas completito
/*
function adivinaElNumeroMagico() {
    let numeroRandom = Math.ceil(Math.random() * 10);
    let numUsuario = prompt("Ingrese un número cualquiera entre 1 y 10 inclusive")
    if(numUsuario !== null && numUsuario !== ""){
        numUsuario = parseInt(numUsuario)
        if (!isNaN(numUsuario )) {
            if (numUsuario === numeroRandom) {
                console.warn("GANASTE EL JUEGO!");
            }else {
            console.log(`Lo siento, el número aleatorio era ${numeroRandom}. Has perdido.`);
            }
        }else {
        console.log("No ingresaste un valor numérico.Por favor, ingresa un número válido entre 1 y 10.");
        }
    }
}
adivinaElNumeroMagico()
*/
