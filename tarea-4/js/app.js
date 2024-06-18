//Tarea 
//1.Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
//2.Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
//3.Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
//4.Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
//0-2: Muy deficiente
//3-4: Insuficiente
//5-6: Suficiente
//7: Bien
//8-9: Notable
//10: Sobresaliente
//Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
//5.Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
//6.El verdulero de la esquina necesita una aplicación donde según la fruta que ingrese le diga el precio por kilo
//ejercicio extra
//7.Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
//.El algoritmo para calcular la letra del dni es el siguiente :
//.El número debe ser entre 0 y 99999999
//.Debemos calcular el resto de la división entera entre el número y el número 23.
//.Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
//.Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
//.Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
//3Ejemplo:
// Input:  40773821
// Output: ‘L’
//8.Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
//.1
//.2
//.3
//. 4 (Múltiplo de 4)
//. 5-
//. ————————————————————-
//. 6
//. 7
//. 8 (Múltiplo de 4)
//. 9 (Múltiplo de 9)
//. 10

//ejercicio 1

/*
const PRIMER_NUMERO_INGRESADO = Number(prompt("Ingrese primer número a comparar. Ejemplo: 4"))
const SEGUNDO_NUMERO_INGRESADO = Number(prompt("Ingrese primer número a comparar."))

if (PRIMER_NUMERO_INGRESADO > SEGUNDO_NUMERO_INGRESADO) {
    document.write(`El primer número ingresado ${PRIMER_NUMERO_INGRESADO} es el mayor`);
}else{
    document.write(`El segundo número ingresado ${SEGUNDO_NUMERO_INGRESADO} es el mayor`);
}
*/
//segunda forma mas completa
/*
let num1 = prompt("Ingrese primer número a comparar (ej: 4)")
let num2 = prompt("Ingrese segundo número a comparar")
//verifica si entrada esta vacia o se apreto en boton cancelar sin escribir nada
if (num1 === null || num1 === "" || num2 === null || num2 ==="") {
    alert("No ingresaste ningun número o cancelaste el ingreso!")
}else{
    num1= Number(num1)
    num2= Number(num2)
    //valido si realmente son numeros o no
    if (isNaN(num1) || isNaN(num2)){
        alert("Alguno de los valores ingresados no es un número");
    }else if (num1 <= 0 || num2 <= 0) {
        alert("Alguno de los valores ingresados es negativo o igual a cero ");
    }else if(num1 === num2){
        alert("Los números ingresados son iguales por lo tanto no se pueden comparar.")
    }else{
        if(num1 > num2){
            document.write(`El primer número ingresado ${num1} es el mayor`);
        }else{
            document.write(`El segundo número ingresado ${num2} es el mayor`);
        }
    }
}
*/
//ejercicio 2

/*
const NUMERO_DIVISIBLE = Number(prompt("Ingrese un número para verificar si es divisible por 2,3,5 o 7 "))

if (NUMERO_DIVISIBLE % 2 === 0) {
    console.log("El número "+NUMERO_DIVISIBLE+" es divisible por 2");
}else if (NUMERO_DIVISIBLE % 3=== 0){
    console.log("El número "+NUMERO_DIVISIBLE+" es divisible por 3");
}else if (NUMERO_DIVISIBLE % 5=== 0){
    console.log("El número "+NUMERO_DIVISIBLE+" es divisible por 5");
}else if (NUMERO_DIVISIBLE % 7=== 0){
    console.log("El número "+NUMERO_DIVISIBLE+" es divisible por 7");
}else{
    console.log("El número "+NUMERO_DIVISIBLE+" no es divisible por 2,3,5 o 7");
}
*/
//forma mas completa
/*
let numIngresado = prompt("Ingrese un número para verificar si es divisible por 2,3,5 o 7")

if (numIngresado === null || numIngresado ==="") {
    alert("No ingresaste ningun número o cancelaste el ingreso!")
}else{
    numIngresado = Number(numIngresado)
    if(!isNaN(numIngresado) && numIngresado != 0){
        if(numIngresado % 2 === 0){
            alert("El número "+numIngresado+" es divisible por 2");
        }else if (numIngresado % 3 === 0) {
            alert("El número "+numIngresado+" es divisible por 3");
        } else if (numIngresado % 5 === 0) {
            alert("El número "+numIngresado+" es divisible por 5");
        } else if (numIngresado % 7 === 0) {
            alert("El número "+numIngresado+" es divisible por 7");
        } else {
            alert("El número "+numIngresado+" no es divisible por 2, 3, 5 o 7");
        }
    }else{
        alert("El valor ingresado no es un número válido.");
    }
}
*/

//ejercicio 3
/*
const EDAD = Number(prompt("Ingrese su edad (en números) para verificar si ya puede conducir"))

if (isNaN(EDAD)) {
    console.log("El valor ingresado no es un número válido");
}else{
    if (EDAD >= 18) {
        console.log("Ya puedes conducir");
    }else{
        console.log("No tienes la edad necesaria para poder conducir");
    }
}
*/

//ejercicio mas completo

/*
let edad = prompt("Ingrese su edad (en números) para verificar si ya puede conducir")

if(edad !== null && edad !== ""){
    edad = Number(edad)
    if(!isNaN(edad)){
        if(edad >=18){
            console.log("Ya puedes conducir");
        }else{
            console.log("No tienes la edad necesaria para poder conducir");
        }
    }else{
        console.log("El valor ingresado no es un número válido");
    }
}else{
    alert("No ingresaste ningun número o cancelaste el ingreso!")
}
*/

//ejercicio 4

/*
const NOTA_CALIFICACION = Number(prompt("Ingrese una nota (númerica) de 0 a 10 para mostrarle su calificación"))

if(!isNaN(NOTA_CALIFICACION)){
    if (NOTA_CALIFICACION >= 0 && NOTA_CALIFICACION <= 2) {
        alert("Muy deficiente");
    } else if (NOTA_CALIFICACION >= 3 && NOTA_CALIFICACION <= 4) {
        alert("Insuficiente");
    } else if (NOTA_CALIFICACION >= 5 && NOTA_CALIFICACION <= 6) {
        alert("Suficiente");
    } else if (NOTA_CALIFICACION === 7) {
        alert("Bien");
    } else if (NOTA_CALIFICACION >= 8 && NOTA_CALIFICACION <= 9) {
        alert("Notable");
    } else if (NOTA_CALIFICACION === 10) {
        alert("Sobresaliente");
    }else{
        alert("Número erróneo");
    }
}else{
    alert("Introduce un número válido");
}
*/
//con una verificacion extra
/*
let notaCalificatoria = prompt("Ingrese una nota (númerica) de 0 a 10 para mostrarle su calificación")

if (notaCalificatoria !== null && notaCalificatoria !== "") {
    notaCalificatoria = Number(notaCalificatoria)
    if(!isNaN(notaCalificatoria)){
        if (notaCalificatoria >=0 && notaCalificatoria <=10) {
            if (notaCalificatoria <=2) {
                alert("Muy deficiente");
            }else if(notaCalificatoria <=4){
                alert("Insuficiente");
            }else if(notaCalificatoria <=6){
                alert("Suficiente");
            }else if(notaCalificatoria ===7){
                alert("Bien");
            }else if (notaCalificatoria <=9){
                alert("Notable");
            }else if(notaCalificatoria ===10){
                alert("Sobresaliente");
            }
        }else{
            alert("Número erróneo");
        }
    }else{
        alert("Introduce un número válido");
    }
}else{
    alert("No ingresaste ningún número o cancelaste el ingreso!")
}
*/

//ejercicio 5
/*
let suma = 0;
let numero = prompt("Ingrese un número:");
let numerosIngresados = false;

while (numero !== null) {
    let numeroConvertido = Number(numero);
    if (!isNaN(numeroConvertido)) {
        suma += numeroConvertido;
        numerosIngresados=true;
    } else {
        alert("¡Error! Ingrese un número válido.");
    }
    numero = prompt("Ingrese otro número:");
}
if (numerosIngresados) {
    console.log(`La suma total de los números ingresados es: ${suma}`);
}
*/
//ejercicio 6
/*
let frutaPorKilo = prompt("Ingrese fruta que desea comprar para mostrar su precio por kilo")

if (frutaPorKilo !== null) {
    frutaPorKilo = frutaPorKilo.trim().toLowerCase()
    switch (frutaPorKilo) {
        case 'manzana':
            console.log(`El precio por kilo de manzana es de $500`);
            break;
        case 'banana':
            console.log(`El precio por kilo de banana es de $800`);
            break;
        case 'frutilla':
        console.log(`El precio por kilo de frutilla es de $1000`);
            break;
        case 'melon':
        console.log(`El precio por kilo de melón es de $1400`);
            break;
        case 'pera':
        console.log(`El precio por kilo de pera es de $1300`);
            break;
        case 'mandarina':
        console.log(`El precio por kilo de mandarina es de $700`);
            break;
        default:
            alert("Lo siento, no tenemos el precio de esa fruta.");
            break;
    }
}else{
    console.log("No ingresaste ningun tipo de fruta");
}
*/

//ejercicio 7

/*
let continuar = true;

while (continuar) {
    let numDni = prompt("Ingresa tu DNI sin puntos ni comas");

    if (numDni === null || numDni === "") {
        continuar = false;
    } else {
        numDni = Number(numDni);
        if (!isNaN(numDni) && numDni >= 0 && numDni <= 99999999) {
            let resto = numDni % 23;
            let letraSegunDNI = 'TRWAGMYFPDXBNJZSQVHLCKE';
            let letraDNI = letraSegunDNI.charAt(resto);
            console.log(`Letra correspondiente a DNI ${numDni}: ${letraDNI}`);
            continuar = confirm("¿Desea ingresar otro número de DNI?");
        } else {
            alert("Por favor, ingrese un número de DNI válido.");
        }
    }
    if (!continuar) {
        console.log("Operación cancelada por el usuario.");
    }
}
*/

//otra forma con switch
/*
let continuar = true;
do {
    let numeroDNI = prompt("Ingrese su DNI sin comas (,) ni puntos(.)")
    if (numeroDNI === null || numeroDNI === "") {
        continuar = false
    }else{
        numeroDNI = Number(numeroDNI)
        if (!isNaN(numeroDNI) && numeroDNI >= 0 && numeroDNI <= 99999999) {
            let resto = numeroDNI % 23;
            let letraDNI="";
            switch (resto) {
                case 0:
                    letraDNI = 'T';
                    break;
                case 1:
                    letraDNI = 'R';
                    break;
                case 2:
                    letraDNI = 'W';
                    break;
                case 3:
                    letraDNI = 'A';
                    break;
                case 4:
                    letraDNI = 'G';
                    break;
                case 5:
                    letraDNI = 'M';
                    break;
                case 6:
                    letraDNI = 'Y';
                    break;
                case 7:
                    letraDNI = 'F';
                    break;
                case 8:
                    letraDNI = 'P';
                    break;
                case 9:
                    letraDNI = 'D';
                    break;
                case 10:
                    letraDNI = 'X';
                    break;
                case 11:
                    letraDNI = 'B';
                    break;
                case 12:
                    letraDNI = 'N';
                    break;
                case 13:
                    letraDNI = 'J';
                    break;
                case 14:
                    letraDNI = 'Z';
                    break;
                case 15:
                    letraDNI = 'S';
                    break;
                case 16:
                    letraDNI = 'Q';
                    break;
                case 17:
                    letraDNI = 'V';
                    break;
                case 18:
                    letraDNI = 'H';
                    break;
                case 19:
                    letraDNI = 'L';
                    break;
                case 20:
                    letraDNI = 'C';
                    break;
                case 21:
                    letraDNI = 'K';
                    break;
                case 22:
                    letraDNI = 'E';
                    break;
                default:
                    console.log("Número fuera de rango.");
                    break;
            }
            console.log(`Letra correspondiente a DNI ${numeroDNI}: ${letraDNI}`);
            continuar = confirm("¿Desea ingresar otro número de DNI?");
        }else{
            alert("Por favor, ingrese un número de DNI válido.");
        }
    }
    if (!continuar) {
        console.log("Operación cancelada y finalizada por el usuario.");
    }
} while (continuar);
*/

//ejercicio 8
/*
let numero = 1;

while (numero <= 500) {
    let esMultiploDe4 = numero % 4 === 0;
    let esMultiploDe9 = numero % 9 === 0;

    let mensaje = `${numero}`;
    if (esMultiploDe4) {
        mensaje += ' - Múltiplo de 4';
    } else if (esMultiploDe9) {
        mensaje += ' - Múltiplo de 9';
    }
    document.write(`${mensaje}<br>`);
    //como la linea va cada 5 numeros verifico si cada 5 numeros es divisible en 5 y si es distinto a 500 para mostrar la linea horizontal
    if (numero % 5 === 0 && numero !== 500) {
        document.write('--------------------------------------------<br>');
    }
    numero++;
}
*/

//mas completo verificando si es multiplo de 4 y 9
/*
let numero = 1;

while (numero <= 500) {
    let esMultiploDe4 = numero % 4 === 0;
    let esMultiploDe9 = numero % 9 === 0;

    let mensaje = `${numero}`;
    if (esMultiploDe4 && esMultiploDe9 ){
        mensaje += ' - Múltiplo de 4 y 9';
    }else if (esMultiploDe4){
        mensaje += ' - Múltiplo de 4';
    } else if (esMultiploDe9) {
        mensaje += ' - Múltiplo de 9';
    }
    document.write(`${mensaje}<br>`);
    
    if (numero % 5 === 0 && numero !== 500) {
        document.write('---------------------------<br>');
    }
    numero++;
}
*/
