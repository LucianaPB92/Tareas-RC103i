

class Usuario{
    constructor(email,nombre,apellido,avatar){
        this.id = usuarios.at(-1).id + 1
        this.email = email
        this.first_name = nombre
        this.last_name = apellido
        this.avatar = avatar
    }
}


let usuarios = [
    {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
    {
        id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://reqres.in/img/faces/5-image.jpg",
    },
    {
        id: 6,
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://reqres.in/img/faces/6-image.jpg",
    },
    ];

/*Tareas a realizar
Guarda en localStorage el arreglo con la clave 'users'
Crea una tabla que muestre los datos de todos los usuarios incluida una imagen de su avatar.
Crea una función que te permita agregar un usuario nuevo. La carga de los datos se debe hacer a través de un formulario sencillo y la función se debe llamar en el evento submit del formulario.
Agrega un botón en la tabla, por cada usuario, que permita borrar el registro. Debes crear la función que realice esa acción y agregar el evento al botón.
Usa bootstrap para los estilos de la web.
*/

 let formularioValido= true;
//crear tabla 
const crearTabla = ()=> {
    let cuerpoTabla = document.querySelector("#cuerpo-tabla")
    cuerpoTabla.innerHTML = "";
    usuarios.map((usuario)=>{
        let fila = document.createElement("tr")
        let celdas = `<td class="fw-bold" >${usuario.id}</td>
        <td>${usuario.first_name}</td>
        <td>${usuario.last_name}</td>
        <td>${usuario.email}</td>
        <td><img class="img-table rounded-circle" src=${usuario.avatar} alt ="${usuario.last_name}" /></td>
        <td> <button class="btn btn-danger" onclick="borrarRegistro(${usuario.id})">
        <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button></td>`
        fila.innerHTML=celdas
        cuerpoTabla.append(fila)
    })
}
//agregar usuarios
const agregarUsuario = (event) => {
    event.preventDefault()
    let nombre = document.querySelector("#nombre")
    let apellido = document.querySelector("#apellido")
    let email = document.querySelector("#correo")
    let avatar = document.querySelector("#imagen")

    let usuario = new Usuario( email.value, nombre.value, apellido.value, avatar.value)

    if ( email.value.length > 0 && nombre.value.length > 0 && apellido.value.length > 0 && avatar.value.length > 0) {
        formularioValido = true;
    }else{
        formularioValido = false;
    }
    if (formularioValido) {
        usuarios.push(usuario)
        alert("usuario agregado con exito")
        localStorage.setItem("users",JSON.stringify(usuarios))
        document.querySelector("#registro").reset();
    }else{
        alert("Por favor complete los campos que faltan")
    }
    crearTabla()
}

document.querySelector("#registro").addEventListener("submit", agregarUsuario);
//si quiero que la tabla se vea al iniciar pagina la invoco fuera de la funcion
crearTabla()

const borrarRegistro = (id) => {
    let index = usuarios.findIndex((item) => item.id === id);
  
    if (index >= 0) {
      let validar = confirm(
        `Está seguro que quiere eliminar a ${usuarios[index].first_name}`
      );
  
      if (validar) {
        usuarios.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(usuarios));
        crearTabla();
      }
    }
  };