import React from 'react'

const BlogList = ({blogs, title, handleDelete}) => {
  // const blogs = props.blogs
  // const title = props.title



  return (
    
    <div className='blog-list'>
      <p>{title}</p>
      {blogs.map((i)=> (
      <div className="blog-preview" key={blogs.id}>
        <h2>{i.author} work on {i.title}.</h2>
        <p>{i.author} is proffesional {i.job}.</p>
        <button onClick={() => handleDelete(i.id)}>Delete</button>
      </div>
      ))}
    </div>
  )
}

export default BlogList