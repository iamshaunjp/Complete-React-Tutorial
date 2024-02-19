
import { useState } from "react"
import BlogList from "./BlogList"


const Home = () => {

const [blogs, setBlogs] = useState([
  {title: 'machine', job: 'Engineer', author:'Filip', id: 1},
  {title: 'recept', job: 'Doctor', author:'Gabriela', id: 2},
  {title: 'site', job: 'Developer', author:'Dimitar', id: 3}
])

  return (
    <div className='home'>
      <BlogList blogs = {blogs} title = 'Filip is Developer' />
    </div>
  )
}

export default Home
