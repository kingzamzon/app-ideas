// import { persons } from "./person.js";

lists = document.querySelector(".lists");
containerDiv = document.querySelector("#container");

persons.forEach(function ({ id, name }) {
  lists.innerHTML += `
        <li class="" id="${id}" onclick="showPerson(${id})">
        ${name}
        </li>
    `;
});

function showPerson(id) {
  let choosen = persons.find((person) => {
    if (person.id == id) {
      return person;
    }
  });
  containerDiv.innerHTML = `
    <p>Name: ${choosen.name}</p>
    <p>Address</p>
    <p>Street: ${choosen.address.street}</p>
  
  `;
}
