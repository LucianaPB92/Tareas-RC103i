//Ejercicio 1
/*
Crea tres arrays de 5 números cada uno, luego escribe una función declarativa que reciba los tres arrays como parámetros y realice las siguientes tareas:
- Unir los tres arrays en un nuevo array llamado 'integrados' 
- Ordenar el array de menor a mayor
- Crear un nuevo array que contenga todos los números del array 'integrados' que sean menores de 60.
*/
/*
const arregloNumero1 = [89,78,52,45,88]
const arregloNumero2 = [47,24,65,21,32]
const arregloNumero3 = [33,25,23,14,8]

function arregloIntegrados (arr1, arr2, arr3) {
    const integrados = arr1.concat(arr2,arr3).sort((ant, sig) => ant - sig)
    let arrayIntegradosFiltrado = integrados.filter((num) => num < 60)
    return arrayIntegradosFiltrado;
}
console.log(arregloIntegrados(arregloNumero1,arregloNumero2,arregloNumero3));
*/



//Ejercicio 2
/*
Cotizadoción Dolar
Escribe una función de flecha que reciba como parámetro un valor en dolar y cacule su valor en pesos argentinos. Modifica dicha función para que se pueda enviar como parámetro también el valor del dolar oficial para realizar el cálculo.
*/
/*
const cotizacionDolar = (valorDolar,dolarOf)=>valorDolar*dolarOf
let valorDolarCotizacion = 9800
let valorDolarOficial = 960;
console.log(`Cotizacion en dolares:
*- Su valor ingresado en $${valorDolarCotizacion} USD, con el dólar oficial a $${valorDolarOficial} ARS equivalen a $${cotizacionDolar(valorDolarCotizacion,valorDolarOficial)} pesos argentinos. `);
*/



//Ejercicio 3
/*
Escribe una función anónima que reciba una palabra o frase cómo parámetro y retorne cuantas vocales contiene.
*/

/*
const contadorVocales = function (caracteres) {
    const vocales = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú"];
  
    let arrayCaracteres = caracteres.split("");
    return arrayCaracteres.filter((caracter) =>
      vocales.includes(caracter.toLowerCase())
    ).length;
  
    // return caracteres.split("").filter((caracter) => vocales.includes(caracter))
    //   .length;
  };
  
  let cantidadDeVocales = contadorVocales("Hola pepe");
  let cantidadDeVocales2 = contadorVocales("Cómo estás?");
*/

//otra forma
/*
const contarVocales = function (caracteres) {
    const vocales = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú"];
    let arrayDeCaracteres = caracteres.split("").reduce((contador,caracter)=>{return contador + vocales.includes(caracter.toLowerCase())},0)
    return arrayDeCaracteres
}
console.log(contarVocales("Amarte ya no basta para mí"));
*/

//Ejercicio 4
/*
Dado el siguiente texto:
"Érase una vez en el año 1976, en un pequeño garaje en Los Altos, California, donde dos jóvenes visionarios, Steve Jobs y Steve Wozniak, se unieron para cambiar el mundo de la tecnología para siempre. Estos dos amigos compartían una pasión por la electrónica y la informática, y estaban decididos a crear algo revolucionario.
Steve Wozniak, conocido cariñosamente como "Woz", era un genio autodidacta de la electrónica. Trabajaba en Hewlett-Packard, pero en su tiempo libre soñaba con construir una computadora personal. En ese entonces, las computadoras eran enormes, costosas y sólo accesibles para las grandes empresas y universidades. Pero Woz tenía una visión diferente: quería crear una computadora que cualquiera pudiera tener en su hogar.
Steve Jobs, en cambio, era el visionario y el hombre de negocios. Reconoció el potencial del proyecto de Woz y se propuso hacerlo realidad. Pero había un problema: no tenían dinero para fabricar la computadora. Jobs vendió su furgoneta Volkswagen y Wozniak vendió su calculadora científica HP-65 para reunir fondos. Con este dinero, compraron los componentes necesarios para construir el primer prototipo de su computadora."

Crear una función anónima que reciba el texto como parámetro y retorne la cantidad de veces que aparece la palabra 'computadora' en el mismo.
Luego usar dicha función para devolver en el navegador un mensaje que diga 'La palabra... aparece ... veces en el texto original'
*/
const textoSobreInformatica = `Érase una vez en el año 1976, en un pequeño garaje en Los Altos, California, donde dos jóvenes visionarios, Steve Jobs y Steve Wozniak, se unieron para cambiar el mundo de la tecnología para siempre. Estos dos amigos compartían una pasión por la electrónica y la informática, y estaban decididos a crear algo revolucionario.
Steve Wozniak, conocido cariñosamente como "Woz", era un genio autodidacta de la electrónica. Trabajaba en Hewlett-Packard, pero en su tiempo libre soñaba con construir una computadora personal. En ese entonces, las computadoras eran enormes, costosas y sólo accesibles para las grandes empresas y universidades. Pero Woz tenía una visión diferente: quería crear una computadora que cualquiera pudiera tener en su hogar.
Steve Jobs, en cambio, era el visionario y el hombre de negocios. Reconoció el potencial del proyecto de Woz y se propuso hacerlo realidad. Pero había un problema: no tenían dinero para fabricar la computadora. Jobs vendió su furgoneta Volkswagen y Wozniak vendió su calculadora científica HP-65 para reunir fondos. Con este dinero, compraron los componentes necesarios para construir el primer prototipo de su computadora.`
/*
const analizarTexto = (texto)=>{
    const cantidadComputadoras = texto.split(" ").filter(palabra => palabra.includes('computadora')).length;
    return cantidadComputadoras;
}
document.write(`La palabra 'computadora' aparece ${analizarTexto(textoSobreInformatica)} veces en el texto original.`)
*/
//otra forma
/*
let historia =
  "Érase una vez en el año 1976, en un pequeño garaje en Los Altos, California, donde dos jóvenes visionarios, Steve Jobs y Steve Wozniak, se unieron para cambiar el mundo de la tecnología para siempre. Estos dos amigos compartían una pasión por la electrónica y la informática, y estaban decididos a crear algo revolucionario.Steve Wozniak, conocido cariñosamente como 'Woz', era un genio autodidacta de la electrónica. Trabajaba en Hewlett-Packard, pero en su tiempo libre soñaba con construir una computadora personal. En ese entonces, las computadoras eran enormes, costosas y sólo accesibles para las grandes empresas y universidades. Pero Woz tenía una visión diferente: quería crear una computadora que cualquiera pudiera tener en su hogar.Steve Jobs, en cambio, era el visionario y el hombre de negocios. Reconoció el potencial del proyecto de Woz y se propuso hacerlo realidad. Pero había un problema: no tenían dinero para fabricar la computadora. Jobs vendió su furgoneta Volkswagen y Wozniak vendió su calculadora científica HP-65 para reunir fondos. Con este dinero, compraron los componentes necesarios para construir el primer prototipo de su computadora.";

const buscarComputadora = function (textos) {
  return textos
    .split(" ")
    .filter((texto) => texto.toLowerCase().includes("computadora")).length;
};

document.write(
  `La palabra 'computadora' o 'computadoras aparece ${buscarComputadora(
    historia
  )} veces`
);
*/
//Ejercicio 5
/*
Biblioteca
Diseña una función declarativa que reciba como parámetro un array y muestre la lista de sus elementos alfabéticamente y como si fuera una lista ordenada de html.
Declara un array de 10 elementos que contenga libros de cualquier categoría y úsalo como argumento de la función anterior.
Ejemplo de como debería verse en el navegador:
1 - Biografía de Stev Jobs
2 - Casa blanca
3 - ....
*/
/*
const libros = ["Cien años de soledad", "Don Quijote de la Mancha", "Orgullo y prejuicio", "Los mamíferos de la Argentina", "El señor de los anillos","Mientras te olvido", "El código Da Vinci","Picaflores", "El retrato de Dorian Gray","Martín Fierro"]

function listaLibros(arrlibros) {
  document.write(`<h2>Lista ordenada de libros</h2>`)
  document.write(`<ol>`)
  arrlibros.sort().forEach((libro)=> document.write(`<li>${libro}</li>`));
  document.write(`</ol>`)
}

listaLibros(libros)
*/