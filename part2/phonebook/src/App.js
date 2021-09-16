import React, { useState, useEffect } from "react";
import personService from "./services/person";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";

const App = () => {
  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
      setFilteredPersons(initialPersons);
    });
  }, []);
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([...persons]);

  const personExists = (personName) => {
    const personNames = persons.map((person) => person.name);
    return personNames.includes(personName);
  };
  const clearInput = (inputId) => {
    document.getElementById(inputId).value = "";
  };

  const addPersonToPhonebook = (event) => {
    event.preventDefault();
    if (!personExists(newName)) {
      const newPerson = { name: newName, number: newNumber };

      personService.create(newPerson).then((createdPerson) => {
        const currentPersons = [...persons, createdPerson];
        setPersons(currentPersons);
        setFilteredPersons(
          currentPersons.filter((person) =>
            filter ? person.name.toUpperCase().indexOf(filter) > -1 : true
          )
        );
      });
    } else {
      alert(`${newName} is already added to phonebook`);
    }
    clearInput("newName");
    clearInput("newNumber");
    setNewName("");
    setNewNumber("");
  };
  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const filterPhonebook = (event) => {
    const currentFilter = event.target.value.toUpperCase();
    setFilteredPersons(
      persons.filter((person) =>
        currentFilter
          ? person.name.toUpperCase().indexOf(currentFilter) > -1
          : true
      )
    );
    setFilter(currentFilter);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={filterPhonebook} />
      <h3>add a new</h3>
      <PersonForm
        onSubmit={addPersonToPhonebook}
        handleNameChange={handleNewNameChange}
        handleNumberChange={handleNewNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
