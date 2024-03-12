//alert("Hola este es mi Javascript");

//let nombre = "VICTOR";

// let contenidoTitulo = "Victor";
// let titulo = document.querySelector(".logo")
// titulo.innerHTML = contenidoTitulo;

// let textoTitulo = titulo.innerText;
// console.log(textoTitulo)

// if(textoTitulo=="Nombre"){
//     titulo.innerHTML="Otro";
// }else{
//     console.log("No se cumple")
// }

// let nombre1 = "VICTOR";
// let ciudad1 = "HUACHO";
// let gusto1 =  "FULBITO";

// let parrafo = document.querySelector(".parrafo2");

// function CambiarTexto(nombre1,ciudad1,gusto1){
//     let contenido=`Esta pagina se ${nombre1} con el fin de informar a muchos jovenes y adultos sobre tecnologia. 
//     Me encantaría que leas y te ${ciudad1} de la actualidad tecnologica en el mundo.
//    No te olvides que si queires ${gusto1} mas noticias dale en suscribir mas abajo y recibiar las ultimas noticias por correo.`;
//     return contenido;
// }
// parrafo.innerText =CambiarTexto(nombre1,ciudad1,gusto1);

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
    alert("Los datos de " + nombre.value +" han sido enviados.");
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});