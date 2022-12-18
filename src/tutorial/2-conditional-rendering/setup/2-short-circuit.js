import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world'
  // const secondValue = text && 'hello world'
  // console.log(secondValue)

  return (
    <>
      <h1>{text || 'melike'}</h1>
      <button className="btn" onClick={() => setIsError((s) => !s)}>
        Toggle Error
      </button>
      {!isError && <h1>Error...</h1>}
      {isError ? (
        <p>Hata var...</p>
      ) : (
        <div>
          <h2>Hata Yok</h2>
        </div>
      )}
      {/* {text && <h1>hello world</h1>}
      {text && <h1>hello world</h1>} */}
      {/* {
      it's wrong
      if(true){
        console.log('hello world')
      }
    } */}
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
    </>
  )
}

export default ShortCircuit
