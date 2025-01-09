import React from 'react';
import border from '../border1.png';

const CardsBlog = ({ blog }) => {
    console.log(blog);
    return (
        <div className='flex flex-col gap-y-12 bg-white px-4 py-4 md:w-[380px] w-[350px] text-center rounded-md shadow-black
        shadow-lg hover:scale-110 drop-shadow-lg card-back relative transition-all duration-500 group border-slate-700
        border-2 flex-wrap 
        '>
            <img alt='border' loading='lazy' src={border} className='absolute h-[90%] opacity-0 left-0 top-0
            group-hover:opacity-10 transition-all duration-500 pointer-events-none
            '/>
            <p className='font-bold text-2xl'>{blog.title}</p>
            <p>{blog.body}</p>
            <p className='font-medium cursor-pointer'>Category- {blog.category}</p>
            <div className='w-full flex justify-between px-1 italic'>
                <p> By- {blog.user}</p>
                <p>username- {blog.username}</p>
            </div>
            <p> Created At- {blog.createdAt}</p>

        </div>
    )
}

export default CardsBlog
