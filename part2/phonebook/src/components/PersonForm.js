import React from 'react'
import Entry from './Entry'

const PersonForm = ({onSubmit, handleNameChange, handleNumberChange}) => (
      <form onSubmit={onSubmit}>
        <Entry id="newName" name="name" handleChange={handleNameChange}/>
        <Entry id="newNumber" name="number" handleChange={handleNumberChange}/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
)

export default PersonForm