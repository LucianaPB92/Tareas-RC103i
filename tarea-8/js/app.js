/*
Tarea: Sistema de pacientes

1 - Crea una clase para crear objetos con datos de pacientes. 
Los datos serían:
- Nombre
- Fecha de nacimiento
- Género
- DNI
- Dirección
- Teléfono
- email
- número de historia clínica
- Enfermedad pre-existente
La clase debe tener las siguientes funciones:
- mostrarDatosPersonales: Lista en pantalla los datos nombre, DNI, dirección, telefono e email.
- mostrarDatosClinicos: Lista en pantalla los datos nombre, DNI, número de historia clínica y enfermedad pre-existente.

2 - Escribe una función que te permita agregar pacientes a un array y al finalizar muestre los datos clínicos de los mismos.

3 - Escribe una función que permita eliminar un paciente por su DNI

4 - Escribe una función que permita buscar pacientes por DNI y otra que permita hacer la búsqueda por nombre (puede devolver más de un paciente que coincida con la búsqueda)

5 - Escribe una función que ordene la lista de pacientes por nombre

*/


 class Paciente {
    constructor(nombre,fechaNacimiento,genero,dni,dir,tel,email,numHistoriaClinica,enfPreexistente){
        this.nombre = nombre
        this.fechaNacimiento = fechaNacimiento
        this.genero = genero
        this.dni = dni
        this.direccion = dir
        this.telefono = tel
        this.email = email
        this.numHistoriaClinica = numHistoriaClinica
        this.enfPreexistente = enfPreexistente
    }
    mostrarDatosPersonales(){
        document.write(`Datos del paciente:<br>
        *- Nombre: ${this.nombre}<br>
        *- DNI: ${this.dni}<br>
        *- Dirección: ${this.direccion}<br>
        *- Teléfono: ${this.telefono}<br>
        *- Email: ${this.email}<br>
        `)
    }
    mostrarDatosClinicos(){
        document.write(`Datos clínicos del paciente ${this.nombre}:<br>
        *- Historia clínica: ${this.numHistoriaClinica}<br>
        *- Enfermedad pre-existente: ${this.enfPreexistente}<br><br>
        `)
    }
}

const paciente1 = new Paciente(
'Juan Jose Perez',
'15-05-1990',
'Masculino',
'12345678',
'Cariola 123',
'555-1234',
'juan.perez@gmail.com',
'HC123456',
'Hipertensión'
);

const paciente2 = new Paciente(
'Maria Lopez',
'10-20-1985',
'Femenino',
'87654321',
'Avenida Alem 742',
'555-5678',
'maria.lopez@hotmail.com',
'HC654321',
'Diabetes'
);

const paciente3 = new Paciente(
'Roberto Suarez',
'25-08-1982',
'Masculino',
'36654445',
'Avenida Aconquija 250',
'555-5678',
'Roberto_Suarez@outlook.com',
'HC654453',
'Colon irritable'
);

//funcion para agregar pacientes
const arrayPacientes = []
function agregarPacientes(paciente) {
    const pacienteExistente = arrayPacientes.find(p => p.dni === paciente.dni);
    if (!pacienteExistente) {
        arrayPacientes.push(paciente)
    }else {
        console.log(`El paciente con DNI '${paciente.dni}' ya existe en el sistema.`);
      }
    
}
agregarPacientes(paciente2)
agregarPacientes(paciente1)
agregarPacientes(paciente3)

console.log(arrayPacientes);

//funcion para mostrar datos clinicos de pacientes

function mostrarDatosClinicosPacientes() {
    for (const paciente of arrayPacientes) {
        paciente.mostrarDatosClinicos()
    }
}

mostrarDatosClinicosPacientes()

//funcion para eliminar paciente por dni
/*
function eliminarPaciente(dni) {
    const index = arrayPacientes.findIndex(paciente => paciente.dni === dni);
    if (index >=0) {
        let validar = confirm(`Esta seguro de borrar ${arrayPacientes[index].nombre}`);
        if (validar) {
         arrayPacientes.splice(index,1)
         alert(`El paciente fue eliminad@`) 
        }
    }else{
        console.error("No existe un paciente con ese número de DNI"); 
    } 
}
 */
//otra forma de eliminar
/*
function eliminarPaciente(dni) {
    const pacienteExistente = arrayPacientes.find(p => p.dni === dni);
    if (pacienteExistente) {
        const index = arrayPacientes.indexOf(pacienteExistente);
        let validar = confirm(`Esta seguro de borrar ${arrayPacientes[index].nombre}?`);
        if (validar) {
            arrayPacientes.splice(index, 1);
            alert(`El paciente fue eliminad@`)
        }
    }else {
        console.error("No existe un paciente con ese número de DNI");
    }
}
eliminarPaciente('36654445')
*/
//funcion para buscar por DNI
/*
function buscarPorDni(dni) {
    const pacienteEcontrado = arrayPacientes.find((paciente)=>paciente.dni === dni)
    if (pacienteEcontrado) {
        return pacienteEcontrado
    }else{
        console.log("No hay datos del paciente a mostrar");
    }
}
*/
//funcion para buscar por nombre
/*
function buscarPorNombre(nombrePaciente) {
    const pacienteEncontrado = arrayPacientes.filter((paciente)=>paciente.nombre.toLowerCase().includes(nombrePaciente.toLowerCase()))
    if (pacienteEncontrado.length > 0) {
        return pacienteEncontrado
    }else{
        console.log("No hay datos del paciente a mostrar");
    }
}
*/
//funcion para ordenar lista
/*
function ordenarPorNombre() {
    arrayPacientes.sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1;
        }else if (a.nombre > b.nombre) {
            return 1;
        }else{
            return 0;
        }
    });
}
*/
