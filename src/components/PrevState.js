import React, { useState } from 'react'

function PrevState () {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const incrementByFive = () => {
    setCount(count + 5)
    // for (let i = 0; i < 5; i++) {
    //   setCount(prevState => prevState + 1)
    // }
  }

  return <div>
      <h3>Incrementing by 5: value is := { count }</h3>
      <button onClick={ incrementByFive }>Increme 5 </button>
  </div>
}

export default PrevState
