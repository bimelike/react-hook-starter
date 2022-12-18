import React, { useState, useContext } from 'react'
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext()
//İki bileşen - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const removedPerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    <PersonContext.Provider value={{ removedPerson, people }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  )
}

const List = () => {
  const contextData = useContext(PersonContext)
  return (
    <>
      {contextData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  const { removedPerson } = useContext(PersonContext)

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removedPerson(id)}>Kaldır</button>
    </div>
  )
}

export default ContextAPI
