//Ejercicios de String y Números
/*
1 - Crea una variable con tu nombre, otra con tu apellido y concaténalas con el mensaje de bienvenida: 'Bienvenido al evento' usando template string.
2 - Usando métodos de String quita los espacios de adelante y de atrás del siguiente texto: '              Había una vez un pequeño programador junior       '
3 - Convierte a mayúsculas tu nombre y apellido usando las variables definidas en el punto 1
4 - Crea un programita que le pida al usuario que ingrese un texto, convierte dicho texto en mayúsculas y muestra en consola cuantos caracteres tiene el texto recibido usando propiedades de los String.
5 - Crea un programa que solicite al usuario ingresar un número con 5 decimales, almacenar dicho número en una variable asegurándose que sea de tipo number. Mostrar en consola lo siguiente:
 - El número redondeado a su mayor valor
 - El número redondeado a su menor valor
 - El número original multiplicado por 3
 - El resto del número dividido por 2
*/

//ejercicio 1
/*
let nombre = "María Luciana";
let apellido = "Pérez Barrionuevo";

console.log(`Bienvenida al evento ${nombre} ${apellido}`);
*/
//ejercicio 2

// let frase = "              Había una vez un pequeño programador junior       ";
// let fraseSinEspacios = frase.trim();

// console.log(fraseSinEspacios);
//2da forma
// console.log(frase.trim());

//ejercicio 3

// console.log(nombre.toUpperCase(), apellido.toUpperCase());

//ejercicio 4
/*
let ingresarTexto = prompt("Ingrese una frase")
let fraseEnMayuscula = ingresarTexto.toUpperCase()
console.log(fraseEnMayuscula);
console.log(`La frase tiene ${fraseEnMayuscula.length} carácteres.`);
*/
//ejercicio 5

let ingresarNumeroDecimal = Number (prompt("Ingrese un numero con 5 decimales"))

console.log(`Su número decimal redondeado a su menor valor : ${Math.ceil(ingresarNumeroDecimal)}`);
console.log(`Su número decimal redondeado a su mayor valor : ${Math.floor(ingresarNumeroDecimal)}`);
console.log(`Su numero decimal multiplicado por 3 : ${ingresarNumeroDecimal*3}`);
console.log(`El resto de su numero decimal dividido por 2 : ${ingresarNumeroDecimal%2}`);



