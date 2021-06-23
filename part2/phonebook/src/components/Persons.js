import React from 'react'
  
const listPhonebookEntry = (person) => (
  <li key={person.name}>{person.name} {person.number}</li>
)

const Persons = ({persons}) => (
  <ul>
    {persons.map( person => listPhonebookEntry(person))}
  </ul>
)

export default Persons