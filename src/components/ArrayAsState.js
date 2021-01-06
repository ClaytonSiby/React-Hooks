import React, { useState } from 'react'

function ArrayAsState() {
    const stateArray = [];
    const [ items, setItems ] = useState(stateArray);

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
          <button onClick={ addItem }>Add a number</button>
          <ul>
            { items.map((item, index) => (
                <li key={ index }>{ item.value }</li>
            ))}    
          </ul>
        </div>
    )
}

export default ArrayAsState
