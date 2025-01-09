import React from 'react'

const CardsBlog = ({ blog }) => {
    console.log(blog);
    return (
        <div className='flex flex-col gap-y-14 bg-white px-4 py-4'>
            <p >{blog.title}</p>
            <p>{blog.body}</p>
            <p>Category- {blog.category}</p>
            <div>
                <p> By- {blog.user}</p>
                <p>username- {blog.username}</p>
            </div>
            <p> createdAt- {blog.createdAt}</p>

        </div>
    )
}

export default CardsBlog
