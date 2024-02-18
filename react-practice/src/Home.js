
import { useState } from "react"

const Home = () => {
// let name = 'Mario'

const [name, setName] = useState('Mario')
const [age, setAge] = useState(28)
  const handleClick = () => {
   setName('Filip')
   setAge(29)
  }

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <p>{name} have now {age}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Home
