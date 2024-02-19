import React, { useState } from 'react'

function countInitial() {
  console.log('run function')
  return 4
}


const Example = () => {
const [count, setCount] = useState(countInitial)


const incrementCount = () => {
  setCount(prevCount => prevCount + 1)
}
const decrementCount = () => {
  setCount(prevCount => prevCount -1)
}


  return (
    <div>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default Example