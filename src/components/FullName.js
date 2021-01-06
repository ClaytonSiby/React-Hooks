import React, { useState, useEffect } from 'react'

function FullName () {
  const stateObject = {
    firstName: '',
    lastName: ''
  }

  const [name, setFullName] = useState(stateObject)

  return (
    <div>
      <form>
        <input
          type='text'
          value={name.firstName}
          onChange={e => setFullName({ ...name, firstName: e.target.value })}
        />
        <input
          type='text'
          value={name.lastName}
          onChange={e => setFullName({ ...name, lastName: e.target.value })}
        />
        <p>
          So your are: {name.firstName} {name.lastName}?
        </p>
        <div>{JSON.stringify(name)}</div>
      </form>
    </div>
  )
}

export default FullName
