import React, { useState } from 'react'



const Example = () => {
const [count, setCount] = useState(4)
const [theme, setTheme] = useState('blue')




function decrementCount() {
  setCount(prevCount => prevCount - 1)
}
function incrementCount() {
  setCount(prevCount => prevCount + 1)
  setTheme('red')
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