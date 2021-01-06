import React, { useState, useEffect } from 'react'

function HookMouse () {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePossition = e => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('Use effect called')
    window.addEventListener('mousemove', logMousePossition)

    return () => {
      console.log('Component unmounting code')
      window.removeEventListener('mousemove', logMousePossition)
    }
  }, [])

  return (
    <div>
      Hooks X =: {x} Y =: {y}
    </div>
  )
}

export default HookMouse
