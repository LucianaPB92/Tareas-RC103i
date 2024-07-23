//Tareas DOM
/*
EJERCICIO 1
Diseña un reloj que se vea en pantalla usando javascript y bootstrap para los estilos.

EJERCICIO 2
Diseña un programa para adivinar un número que se genera aleatoriamente. La pantalla debe mostrar un mensaje de bienvenida, un input para colocar números y un botón con el texto "Play". El usuario debe ingresar un número entre 1 y 10 y al dar clic al botón, el programa generará un número aleatorio entre 1 y 10 (sin que el usuario lo sepa) y comparará dicho número con el ingresado en el input. Si son iguales devolvera un mensaje con el texto "GANASTE!!" sino devolverá un mensaje con el texto "PERDISTE". Estos mensajes pueden aparecer en pantalla o en un alert.

EJERCICIO 3
Diseña un programa que devuelva la cantidad de veces que aparece una palabra ingresada por el usuario en un texto. 
El programa debe tener un textarea donde estará el texto, un input donde el usuario pondrá la palabra que quiera buscar y un botón con el texto "Buscar". El programa debe tomar el texto ingresado, la palabra del usuario y al hacer clic en el botón devolver la cantidad de veces que aparece la palabra del usuario en un mensaje en pantalla.

EJERCICIO 4
Tomando como base la tarea anterior del Sistema de pacientes, diseña una web con un formulario que permita agregar pacientes con los siguientes datos:
- Nombre
- Fecha de nacimiento
- Género
- DNI
- Dirección
- Teléfono
- email
- número de historia clínica
- Enfermedad pre-existente

Debajo de este formulario debe haber una tabla que muestre la lista de pacientes con Nombre, DNI, email y número de historia clínica. También debe actualizarse cada vez que se agregue un paciente nuevo.
*/

//ejercicio1
let contenedor = document.querySelector("#contenedor")
/*
const formatearTiempo = (unidad) => {
    if (unidad < 10) {
        return '0' + unidad;
    } else {
        return unidad.toString();
    }
}
const relojDigital = ()=>{ 
    let reloj = null;  
    contenedor.innerHTML = '' 
    let titulo = document.createElement("h1")
    titulo.innerText = "Reloj digital"
    titulo.classList = "m-5"
    contenedor.append(titulo)
    let relojDiv = document.createElement("div")
    relojDiv.id = "reloj"
    relojDiv.classList = "bg-info border border-black border border-2 rounded-pill "
    contenedor.append(relojDiv)
    reloj = setInterval(() => {
        let hora = formatearTiempo(new Date().getHours()) 
        let min = formatearTiempo(new Date().getMinutes())
        let seg = formatearTiempo(new Date().getSeconds())
        relojDiv.innerHTML=`<p class="text-center fs-1 mt-3">${hora}:${min}:${seg}</p>`
    }, 1000);
}
*/
//ejercicio 2
/*
function iniciarJuego() {
    const divJuego = document.querySelector("#juego")
    divJuego.style.display= "block"
    document.getElementById('playButton').addEventListener('click', function() {
    let numeroInput =document.getElementById('numeroInput');
    const numIngresado = parseInt(numeroInput.value)
    const resultado = document.getElementById('resultado');
    resultado.classList.add('fw-bold', 'fs-3');
    if (numIngresado < 1|| numIngresado > 10 || isNaN(numIngresado)) {
        alert("Ingresa un número válido entre 1 y 10")
    }else{
        const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        if (numIngresado === numeroAleatorio) {
            resultado.innerText = '¡GANASTE!';
            resultado.classList.remove('text-danger');
            resultado.classList.add('text-success');
        } else {
            resultado.innerText = 'PERDISTE. El número era ' + numeroAleatorio;
            resultado.classList.remove('text-success');
            resultado.classList.add('text-danger');
        }
    }
    setTimeout(function() {
        location.reload();
    }, 3000); 
});
}
iniciarJuego()
*/
//ejercicio 4
/*
class Paciente {
    constructor(nombre, fechaNacimiento, dni, genero, direccion, telefono, email, numHistClin, enfPreexist) {
        this.nombre = nombre;
        this.fecha_de_nacimiento = fechaNacimiento;
        this.dni = dni;
        this.genero = genero;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.numero_de_historiaClinica = numHistClin;
        this.enfermedad_preexistente = enfPreexist;
    }
}

let pacientes = [];

const agregarPaciente = (event)=>{
    event.preventDefault()
    let nombre = document.getElementById('nombre').value;
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let dni = document.getElementById('dni').value;
    let genero = document.getElementById('genero').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let historiaClinica = document.getElementById('historiaClinica').value;
    let enfermedadPreexistente = document.getElementById('enfermedadPreexistente').value;

    const paciente = new Paciente(nombre, fechaNacimiento, dni, genero, direccion, telefono, email, historiaClinica, enfermedadPreexistente);
    const pacienteExistente = pacientes.find(p => p.dni === paciente.dni);
    if (!pacienteExistente) {
        pacientes.push(paciente)
    }else {
        console.log(`El paciente con DNI '${paciente.dni}' ya existe en el sistema.`);
    }
    alert("Paciente agregado con éxito"); 
    document.getElementById('registro').reset();

    crearTabla();

}

function crearTabla() {
    const seccionTab = document.querySelector("#seccion-tabla");
    seccionTab.style.display = "block";
    let cuerpoTabla = document.querySelector("#cuerpo-tabla");
    cuerpoTabla.innerHTML = "";
    pacientes.map((paciente,index)=>{
        let fila = document.createElement("tr")
        let celdas = `<td class="fw-bold">${index + 1}</td>
                      <td>${paciente.nombre}</td>
                      <td>${paciente.email}</td>
                      <td>${paciente.dni}</td>
                      <td>${paciente.numero_de_historiaClinica}</td>`

        fila.innerHTML = celdas
        cuerpoTabla.append(fila)
    })
}
document.getElementById("registro").addEventListener("submit", agregarPaciente);

function mostrarFormulario() {
    const seccionForm = document.querySelector("#seccion-formulario");
    seccionForm.style.display ="block";
}

mostrarFormulario()
*/

//ejercicio 3
/*
const buscarPalabra = ()=>{
    const seccionTextArea = document.querySelector("#seccion-text-area")
    seccionTextArea.style.display = "block"
    const textArea = document.querySelector("#text-area").value.toLowerCase()
    const palabraABuscar = document.querySelector("#input-buscador").value.toLowerCase()

    console.log("Texto del área:", textArea);
    console.log("Palabra a buscar:", palabraABuscar);

    const arrayPalabras= textArea.split(" ")
    console.log(arrayPalabras);
    const contarPalabras = arrayPalabras.filter(palabra =>palabra.includes(palabraABuscar)).length
    console.log(contarPalabras);
    console.log(`La palabra "${palabraABuscar}" aparece ${contarPalabras} veces.`);

    let parrafo = document.querySelector("#resultadoFinal")
    parrafo.innerText = `La palabra "${palabraABuscar}" aparece ${contarPalabras} veces.`
    
}
*/