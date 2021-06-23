import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName ] = useState('')

  const checkExistingPerson = (personName) =>  {
    const personNames = persons.map((person) => person.name)
    return personNames.includes(personName)
  }
  const clearNewName = () => {
    document.getElementById('newName').value = ''
  }
  const addPersonToPhonebook = (event) => {
    event.preventDefault()
    const personExists = checkExistingPerson(newName)
    if (!personExists) {
      const currentPersons = [...persons, {name: newName}]
      setPersons(currentPersons)
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    clearNewName()
    setNewName('')
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersonToPhonebook}>
        <div>
          name: <input id="newName" onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App