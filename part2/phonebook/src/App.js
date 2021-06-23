import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber ] = useState('')

  const personExists = (personName) =>  {
    const personNames = persons.map((person) => person.name)
    return personNames.includes(personName)
  }
  const clearInput = (inputId) => {
    document.getElementById(inputId).value = ''
  }

  const addPersonToPhonebook = (event) => {
    event.preventDefault()
    const personExists = personExists(newName)
    if (!personExists) {
      const currentPersons = [...persons, {name: newName, number: newNumber}]
      setPersons(currentPersons)
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    clearInput('newName')
    clearInput('newNumber')
    setNewName('')
  }
  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersonToPhonebook}>
        <div>
          name: <input id="newName" onChange={handleNewNameChange}/>
        </div>
        <div>
          number: <input id="newNumber" onChange={handleNewNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App