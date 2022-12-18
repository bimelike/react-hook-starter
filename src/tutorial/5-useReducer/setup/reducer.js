export const reducer = (state, action) => {
  console.log(state)
  if (action.type === 'OGE_EKLE') {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Öğe eklendi',
    }
  } else if (action.type === 'DEGER_YOK') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Lütfen değer giriniz!',
    }
  } else if (action.type === 'MODAL_KAPAT') {
    return { ...state, isModalOpen: false }
  } else if (action.type === 'OGEYI_KALDIR') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload,
    )
    return {
      ...state,
      people: newPeople,
    }
  }
  throw new Error('Eşleşen eylem türü yok')
}
