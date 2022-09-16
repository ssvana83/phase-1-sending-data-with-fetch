



// const submitData = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application.json",
//     Accept: "application.json",
//   },
//   body: JSON.stringify({
//     name: " ",
//     email: " ",
//   })

//  return fetch("http://localhost:3000/users", submitData)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     const newDiv = document.createElement("div");
//     newDiv.innerText = object.id;
//     document.body.appendChild(newDiv);
//   });

// };



// function submitData(name, email) {
//   fetch('http://localhost:3000/users', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//       name: `${name}`,
//       email: `${email}`,
//     }),
//   })

//   .then(response => response.json())
//   .then(object => document.body.innerHTML = object.id)
//   .catch(response => 'Unauthorized Access')
// }

// function addNewContact(newID) {
//   document.getElementsByTagName("body")[0].innerHTML = newID;
//   document.body.append(message)
// }

// function errorFunction(error) {
//   document.body.innerHTML = error.message
// }

// submitData("Name", "name@name.com");

function submitData(name, email) {
  
  return fetch("http://localhost:3000/users", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  })
  .then(response => response.json())
  .then(response => {
    document.body.innerHTML = `<p>${response.id}</p>`
  })
  .catch(error => {
    document.body.innerHTML = `<p>${error.message}</p>`
  })
}
//   .catch(response => 'Unauthorized Access')
// }

// function addNewContact(newID) {
//   document.getElementsByTagName("body")[0].innerHTML = newID;
//   document.body.append(message)
// }

// function errorFunction(error) {
//   document.body.innerHTML = error.message
// }

// submitData("Name", "name@name.com");


