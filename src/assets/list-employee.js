var endpoint = "http://localhost/employee/";

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    // Data es un array de objetos JSON que representan los usuarios
    const tableBody = document.querySelector('#myTable tbody');
    // data.forEach(user => {
    //   // Creamos un elemento <li> para cada usuario
    //   const userItem = document.createElement('li');
    //   userItem.textContent = `${user.name} - ${user.email}`;
    //   userList.appendChild(userItem);
    // });
    for (let dato of data) {
      const { id, name, email } = dato; // desestructuración de los valores del objeto
      const row = document.createElement('tr');
      const idCell = document.createElement('td');
      const nombreCell = document.createElement('td');
      const emailCell = document.createElement('td');
      idCell.textContent = id;
      nombreCell.textContent = name;
      emailCell.textContent = email;
      row.appendChild(idCell);
      row.appendChild(nombreCell);
      row.appendChild(emailCell);

      tableBody.appendChild(row);
    }

  });

