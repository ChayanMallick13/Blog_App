import React from 'react'

const CardsBlog = ({blog}) => {
    return (
    <div className=''>
        <p >{blog.title}</p>
        <p>{blog.body}</p>
        <p> By- {blog.user}</p>
        <p> createdAt- {blog.createdAt}</p>

    </div>
    )
}

export default CardsBlog
