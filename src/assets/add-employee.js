console.log("Hola mundo");
const formulario = document.getElementById("formulario");
const botonAgregar = document.getElementById("boton-agregar");

botonAgregar.addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var endpoint = "http://localhost/employee/?insertar=1";

  var config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  };

  fetch(endpoint, config)
    .then(function (response) {
      if (response.ok) {
        alert("Valores agregados exitosamente.");
      } else {
        alert("Hubo un error al agregar los valores.");
      }
    })
    .catch(function (error) {
      console.error("Hubo un error al realizar la solicitud:", error);
    });
});