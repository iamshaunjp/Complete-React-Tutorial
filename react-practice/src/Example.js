import React, { useState } from 'react'



const Example = () => {
const [state, setState] = useState({ count: 4, theme: 'blue'})
const count = state.count
const theme = state.theme



function decrementCount() {
  setState(prevState => {
    return {...prevState, count: prevState.count - 1}
  })
}
function incrementCount() {
  setState(prevState => {
    return {...prevState, count: prevState.count + 1}
  })
}


  return (
    <div>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default Example