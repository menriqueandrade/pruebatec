var endpoint = "http://localhost/employee/";

fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      // Data es un array de objetos JSON que representan los usuarios
      const userList = document.getElementById('user-list');
      data.forEach(user => {
        // Creamos un elemento <li> para cada usuario
        const userItem = document.createElement('li');
        userItem.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(userItem);
      });
    });

