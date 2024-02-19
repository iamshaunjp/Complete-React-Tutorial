
import { useState } from "react"

const Home = () => {

const [blogs, setBlogs] = useState([
  {title: 'machine', job: 'Engineer', author:'Filip', id: 1},
  {title: 'recept', job: 'Doctor', author:'Gabriela', id: 2},
  {title: 'site', job: 'Developer', author:'Dimitar', id: 3}
])

  return (
    <div className='home'>
    {blogs.map((i)=> (
      <div className="blog-preview" key={blogs.id}>
        <h2>{i.author} work on {i.title}.</h2>
        <p>{i.author} is proffesional {i.job}.</p>
      </div>
    ))}
    </div>
  )
}

export default Home
