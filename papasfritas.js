//Guardamos los elementos del formulario en variables.

var input_nombre = document.getElementById("Nombre");
var input_apellido = document.getElementById("Apellido");
var input_email = document.getElementById("email");
var input_teléfono = document.getElementById("teléfono");
var input_submit = document.getElementById("boton-enviar");

console.log(input_nombre);
console.log(input_apellido);
console.log(input_submit);

//Ahora creo la función que se ejecuta cuando se envía el formulario.

input_submit.addEventListener("click", enviarForm);

function enviarForm(event) {
  event.preventDefault();

  console.log("Se envió la información");
  //Ahora a obtener los valores de los inputs.
  var valor_nombre = input_nombre.value;
  var valor_apellido = input_apellido.value;
  var valor_email = input_email.value;
  var valor_teléfono = input_teléfono.value;

  console.log(valor_nombre);
  console.log(valor_apellido);
  console.log(valor_email);
  console.log(valor_teléfono);

  //Obtener los placeholders.

  var placeholder_nombre = document.getElementById("Nombre-placeholder");
  var placeholder_apellido = document.getElementById("Apellido-placeholder");
  var placeholder_email = document.getElementById("email-placeholder");

  //Cambiar el contenido de los placeholers.

  placeholder_nombre.innerHTML = valor_nombre;
  placeholder_apellido.innerHTML = valor_apellido;

  placeholder_email.innerHTML = valor_email;

  //Mostrar mensajito.

  elemento_mensajito = document.getElementById("mensajito");
  elemento_mensajito.classList.remove("escondidito");

  //Y esconder el formulario.

  elemento_form = document.getElementById("form");
  elemento_form.classList.add("escondidito");
}

//Definimos el formulario y los botones, van a tener el querySelectorAll porque los malditos son más de uno, y necesitaban una clase por eso.

var form = document.getElementById("form");
var botoncitos = document.querySelectorAll(".boton");

//Recorre los botoncitos (UwU) para el addEventListener.

botoncitos.forEach(function (boton) {
  boton.addEventListener("click", function () {
    form.classList.remove("escondidito");

    //Ahí el formulario se muestra, removiendo el escondidito.
    //Y lo del scroll es para que lo lleve al formulario. Esto es tan humilde.

    form.scrollIntoView({ behavior: "smooth" });
  });
});

var modal = document.getElementById("modal");
var botoncitos = document.querySelectorAll(".boton");

//
var span = document.getElementsByClassName("cerrao")[0];

// When the user clicks on the button, open the modal
botoncitos.forEach(function (boton) {
  boton.addEventListener("click", function () {
    modal.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
