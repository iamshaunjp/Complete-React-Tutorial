import React from 'react'

const Home = () => {

  const handleClick = (e) => {
    console.log('Hello world', e);

  }
  const handleClickAgain = (name, e) => {
    console.log('Hello Again ' + name, e.target)

  }
  return (
    <div className='home'>
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e)=> handleClickAgain('Filip', e)}>Click me again</button>
    </div>
  )
}

export default Home
