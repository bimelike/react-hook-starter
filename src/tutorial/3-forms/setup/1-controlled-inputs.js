import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email) {
      console.log('formu gonder')
      const person = { id: new Date().getTime().toString(), name, email }
      console.log(person)
      setPeople((people) => {
        return [...people, person]
      })
      setName('')
      setEmail('')
    } else {
      console.log('bos degerler')
    }
    console.log(name, email)
  }
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Kişi Ekle</button>
        </form>
        {people.map((person) => {
          const { id, name, email } = person
          return (
            <div className="item">
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
