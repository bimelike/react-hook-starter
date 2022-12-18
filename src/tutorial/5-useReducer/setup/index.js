import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { reducer } from './reducer'
import { data } from '../../../data'
// reducer function

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: 'Hello World',
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'OGE_EKLE', payload: newPerson })
      setName('')
    } else {
      dispatch({ type: 'DEGER_YOK' })
    }
  }

  const closeModal = () => {
    dispatch({ type: 'MODAL_KAPAT' })
  }

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Ekle</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'OGEYI_KALDIR', payload: person.id })
              }
            >
              Kaldır
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Index
