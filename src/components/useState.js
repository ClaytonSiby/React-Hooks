import React, { useState } from 'react';

function UseState() {
    const [ count, setCount] = useState(0);

    return (
        <div>
            <p> You clicked { count } times.</p>
            <button onClick={ () => setCount(count + 1) }>Increment</button>
            <button onClick={ () => setCount(count - 1) }>Decrement</button>
            <button onClick={ () => setCount(0) }>Reset</button>
        </div>
    )
}

export default UseState