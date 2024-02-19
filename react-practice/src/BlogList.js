import React from 'react'

const BlogList = (props) => {
  const blogs = props.blogs
  const title = props.title

  console.log(props, blogs, title)
  return (
    
    <div className='blog-list'>
      <p>{title}</p>
      {blogs.map((i)=> (
      <div className="blog-preview" key={blogs.id}>
        <h2>{i.author} work on {i.title}.</h2>
        <p>{i.author} is proffesional {i.job}.</p>
      </div>
      ))}
    </div>
  )
}

export default BlogList