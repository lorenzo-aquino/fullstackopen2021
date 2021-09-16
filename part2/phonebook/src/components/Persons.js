import React from "react";

const listPhonebookEntry = (person, handleDelete) => (
  <li key={person.name}>
    {person.name} {person.number}
    <button id={person.id} name={person.name} onClick={handleDelete}>
      delete
    </button>
  </li>
);

const Persons = ({ persons, handleDelete }) => (
  <ul>{persons.map((person) => listPhonebookEntry(person, handleDelete))}</ul>
);

export default Persons;
