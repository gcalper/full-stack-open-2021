import React, { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import PersonList from './components/PersonList'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState("")
  const [ newNumber, setNewNumber ] = useState("")
  const [ filter, setFilter ] = useState("")
  const [ screenMessage, setScreenMessage ] = useState(null)

  useEffect( () => {
    personService
    .getAll()
    .then(initialPersons => setPersons(initialPersons))
  }, [])

  const personsToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  } 

  const handleAdd = (event) => {
    event.preventDefault()

    if(persons.some( person => person.name === newName )) {
      
      if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {

        const personToChange = persons.find(p => p.name === newName)
        const changedPerson = { ...personToChange, number: newNumber }

        personService
          .updateNumber(personToChange.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== personToChange.id ? person : returnedPerson))
            displayMessage(`${changedPerson.name}'s number is changed.`)
            setNewName("")
            setNewNumber("")
          })
          .catch(error => {
            displayMessage(`${changedPerson.name} was deleted before. Cannot change a deleted item. If you want to add this person again, please resubmit the form.`)
            setPersons(persons.filter(p => p.id !== personToChange.id))
          })
        }
      
    } else if ( newName === "" || newNumber === "" ) {
      displayMessage("Cannot add a blank value.")
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

    personService
      .createPerson(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName("")
        setNewNumber("")
        displayMessage(`${returnedPerson.name} is added to the list.`)
      })
    }
  }

  const deleteRecordOf = id => {
    const personToDelete = persons.find(p => p.id === id)
    if(window.confirm(`Are you sure you want to delete ${personToDelete.name}?`)) {
      personService
      .deletePerson(id)
      .then(response => {
        setPersons(persons.filter(p => p.id !== id))
        displayMessage(`${personToDelete.name} is deleted from the list.`)
        console.log(`${personToDelete.name} is deleted from the list.`)
      })
      .catch(error => {
        displayMessage(`${personToDelete.name} was already deleted before.`)
        setPersons(persons.filter(p => p.id !== id))
        console.log(`${personToDelete.name} was already deleted before.`)
      })
      
    }
  }

  const displayMessage = message => {
    setScreenMessage(message)
        setTimeout(() => {
          setScreenMessage(null)
        }, 4000)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={screenMessage} />
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handleAdd={handleAdd}
      />
      <h3>Numbers</h3>
      <PersonList
        personsToShow={personsToShow}
        deleteRecordOf={deleteRecordOf}
      />
    </div>
  )
}

export default App