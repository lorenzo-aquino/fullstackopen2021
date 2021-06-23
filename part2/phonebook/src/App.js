import React, { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber ] = useState('')
  const [filter, setFilter ] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([...persons])

  const personExists = (personName) =>  {
    const personNames = persons.map((person) => person.name)
    return personNames.includes(personName)
  }
  const clearInput = (inputId) => {
    document.getElementById(inputId).value = ''
  }

  const addPersonToPhonebook = (event) => {
    event.preventDefault()
    if (!personExists(newName)) {
      const currentPersons = [...persons, {name: newName, number: newNumber}]
      setPersons(currentPersons)
      setFilteredPersons(currentPersons.filter(person => 
        filter ? person.name.toUpperCase().indexOf(filter) > -1 : true
      ))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    clearInput('newName')
    clearInput('newNumber')
    setNewName('')
    setNewNumber('')
  }
  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const filterPhonebook = (event) => {
    const currentFilter = event.target.value.toUpperCase()
    setFilteredPersons(persons.filter(person => 
      currentFilter ? person.name.toUpperCase().indexOf(currentFilter) > -1 : true
    ))
    setFilter(currentFilter)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={filterPhonebook}/>
      <h3>add a new</h3>
      <PersonForm
        onSubmit={addPersonToPhonebook}
        handleNameChange={handleNewNameChange}
        handleNumberChange={handleNewNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App