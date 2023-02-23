
//editar employee
const formulario = document.getElementById("formulario");
const botonEditar = document.getElementById("boton-editar");

botonEditar.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var id = document.getElementById("id").value;
    var endpoint = "http://localhost/employee/?actualizar="+id;
    
    var config = {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        name: name,
        email: email,
        id: id
        })
    };
    
    fetch(endpoint, config)
        .then(function (response) {
        if (response.ok) {
            alert("Valores editados exitosamente.");
        } else {
            alert("Hubo un error al editar los valores.");
        }
        })
        .catch(function (error) {
        console.error("Hubo un error al realizar la solicitud:", error);
        });
    }
);  