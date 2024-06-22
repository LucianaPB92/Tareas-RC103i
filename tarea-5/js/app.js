/*
Ejercicio 1
Tenemos un array llamado "planetas" que contiene el nombre de los planetas de nuestro sistema solar ordenados por su distancia con el sol, debes mostrar en consola el nombre del último planeta aplicando un método de array.

planetas=["Mercurio","Venus","Tierra","Marte","Júpiter","Saturno","Urano","Neptuno"]
*/

/* Ejercicio 2
Dada una playlist de canciones definida con un array verificar si contiene la canción 'Ella Baila Sola' e imprimir en consola .

const lista = ['Flowers','Kill Bill','As It Was','Seven (feat. Latto)','Ella Baila Sola','Cruel Summer','Creepin’ (with The Weeknd & 21 Savage)','Calm Down (with Selena Gomez)','Shakira: Bzrp Music Sessions, Vol. 53','Anti-Hero']
*/

/* Ejercicio 3
Tenemos un array que contiene la lista de 5 pilotos de Fórmula 1, pero se nos informó que el tercero y cuarto quedaron descalificados por lo que hay que eliminarlos de la lista.

const f1Drivers = ['Lewis Hamilton', 'Max Verstappen', 'Charles Leclerc', 'Fernando Alonso', 'Lando Norris']
*/

/* Ejercicio 4
Dado el array de pilotos de Fórmula 1, agrega los nombres de 'Sergio Pérez' y 'George Russell' después de 'Max Verstappen'.
*/

/* Ejercicio 5
Dado el array de pilotos de Fórmula 1, reemplazar 'Fernando Alonso' con 'Carlos Sainz'.
*/

/* Ejercicio 6
En un colegio hay tres comisiones distintas con 5 alumnos cada una, debido a cambios en los horarios se deben unir las comisiones en una sola llamada 'comisionNueva'. Luego imprimir los nombres de los alumnos de la nueva comisión.
*/

/* Ejercicio 7
Crea un script que te permita agregar el nombre de varias ciudades en un array hasta que presiones cancelar, luego deberas mostrar en consola los nombres de dichas ciudades ordenadas alfabéticamente
*/

/*  Ejercicio 8
En un array se encuentra la lista de jugadores de un equipo de futbol, pero algunos de la lista estarán de suplentes en el próximo partido. Crea un nuevo array llamado 'suplentes' basado en dicha lista que contenga los nombres de los tres primeros jugadores.

let jugadores = ['Alex Collado', 'Emerson Royal', 'Iñaki Peña','Lionel Messi', 'Gerard Piqué', 'Sergio Busquets', 'Jordi Alba', 'Frenkie de Jong', 'Ansu Fati', 'Pedri', 'Ousmane Dembélé', 'Marc-André ter Stegen', 'Sergi Roberto', 'Ronald Araújo', 'Miralem Pjanic', 'Philippe Coutinho', 'Samuel Umtiti', 'Riqui Puig', 'Sergiño Dest', 'Martin Braithwaite', 'Clément Lenglet', 'Sergiño Dest', 'Éric García', 'Memphis Depay', 'Neto', 'Pedri', 'Oscar Mingueza']
*/

//ejercicio 1
/*
const planetas =["Mercurio","Venus","Tierra","Marte","Júpiter","Saturno","Urano","Neptuno"];

console.log(planetas.at(-1));
*/
//ejercicio 2
/*
const lista = ['Flowers','Kill Bill','As It Was','Seven (feat. Latto)','Ella Baila Sola','Cruel Summer','Creepin’ (with The Weeknd & 21 Savage)','Calm Down (with Selena Gomez)','Shakira: Bzrp Music Sessions, Vol. 53','Anti-Hero']

console.log(lista.includes('Ella Baila Sola'));
*/
//ejercicio 3
/*
const f1Drivers = ['Lewis Hamilton', 'Max Verstappen', 'Charles Leclerc', 'Fernando Alonso', 'Lando Norris']

f1Drivers.splice(2,2);

console.log(f1Drivers);
*/
//ejercicio 4
/*
const f1Drivers = ['Lewis Hamilton', 'Max Verstappen', 'Charles Leclerc', 'Fernando Alonso', 'Lando Norris']

f1Drivers.splice(2,0,'Sergio Pérez','George Russell');

console.log(f1Drivers);
*/

//ejercicio 5
/*
const f1Drivers = ['Lewis Hamilton', 'Max Verstappen', 'Charles Leclerc', 'Fernando Alonso', 'Lando Norris']

f1Drivers.splice(3,1,'Carlos Sainz')
console.log(f1Drivers);
*/

//ejercicio 6
/*
const com1 = ['Pérez Luciana','Gonzalez Eduardo','Lopez Ezequiel','Monteros Nicolás','Saez Josefina'];

const com2 = ['Sotelo Rodrigo','Palavecino Luciano','Romero Anahí','Micale Camila','Dip Natalia']

const com3 = ['Morales Santiago','Zurita Priscila','Rivadeneira Maximiliano','Abdala Micaela','Chaín Agustina']

const comisionNueva = com1.concat(com2, com3)

console.log(comisionNueva);
//mostraria los nombres directamente 
console.log(`Alumnos de comisión nueva:\n${comisionNueva.join('\n')}`);
*/

//ejercicio 7
/*
const ciudadesAlmacenadas = [];
let continuar = true;
while (continuar) {
    let ciudadesIngresadas = prompt("Ingrese ciudad favorita (o presione cancelar para terminar)")
    if (ciudadesIngresadas === null) {
        continuar = false;
    }else if (!isNaN(ciudadesIngresadas) || ciudadesIngresadas === ""){
        alert("No ingresaste nada o ingresaste un numero")
    }else{
        let letraCapitalizada = ciudadesIngresadas.at(0).toUpperCase();
        let restoDePalabra = ciudadesIngresadas.substring(1);
        let ciudadCapitalizada = letraCapitalizada + restoDePalabra;

        ciudadesAlmacenadas.push(ciudadCapitalizada);
    }
}

if (ciudadesAlmacenadas.length > 0) {
    ciudadesAlmacenadas.sort();

    let ciudadesFavoritas = "Tus ciudades favoritas:\n";
    for (let i = 0; i < ciudadesAlmacenadas.length; i++) {
        ciudadesFavoritas += " *-" + ciudadesAlmacenadas[i] + "\n";
    }

    console.log(ciudadesFavoritas);
}
*/
//otra forma de plantear el if para mostrar el console log 
/*
if (ciudadesAlmacenadas.length > 0) {
    ciudadesAlmacenadas.sort();
    console.log(`Tus ciudades favoritas:\n${ciudadesAlmacenadas.join('\n')}`);
}
*/
//refactorizacion
/*
const ciudadesAlmacenadas = [];
let continuar = true;

while (continuar) {
    let ciudadesIngresadas = prompt("Ingrese ciudad favorita (o presione cancelar para terminar)")
    if (ciudadesIngresadas === null) {
        continuar = false;
    }else if (!isNaN(ciudadesIngresadas) || ciudadesIngresadas === ""){
        alert("No ingresaste nada o ingresaste un numero")
    }else{
        ciudadesAlmacenadas.push(ciudadesIngresadas)
    }
    for (let i = 0; i < ciudadesAlmacenadas.length; i++) {
        let ciudadesIngresadas = ciudadesAlmacenadas[i]
        let letraCapitalizada = ciudadesIngresadas.at(0).toUpperCase();
        let restoDePalabra = ciudadesIngresadas.substring(1);
        ciudadesAlmacenadas[i] = letraCapitalizada + restoDePalabra;
    }
}
if (ciudadesAlmacenadas.length > 0) {
    ciudadesAlmacenadas.sort();
    console.log(ciudadesAlmacenadas);
}
*/

//ejercicio 8
/*
let jugadores = ['Alex Collado', 'Emerson Royal', 'Iñaki Peña','Lionel Messi', 'Gerard Piqué', 'Sergio Busquets', 'Jordi Alba', 'Frenkie de Jong', 'Ansu Fati', 'Pedri', 'Ousmane Dembélé', 'Marc-André ter Stegen', 'Sergi Roberto', 'Ronald Araújo', 'Miralem Pjanic', 'Philippe Coutinho', 'Samuel Umtiti', 'Riqui Puig', 'Sergiño Dest', 'Martin Braithwaite', 'Clément Lenglet', 'Sergiño Dest', 'Éric García', 'Memphis Depay', 'Neto', 'Pedri', 'Oscar Mingueza']
let suplentes =[];
for (let i = 0; i < 3; i++) {
    suplentes.push(jugadores[i])
}
console.log(jugadores,suplentes);

//otra forma de plantear el log

console.log(`Jugadores para el partido actual:\n${jugadores.join('\n')}`);
console.log(`Suplentes para el próximo partido:\n${suplentes.join('\n')}`);
*/