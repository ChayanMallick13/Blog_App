import React, { useContext } from 'react';
import border from '../border1.png';
import { FaTrashCan } from "react-icons/fa6";
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { FaCopy } from "react-icons/fa";
import toast from 'react-hot-toast';

const CardsBlog = ({ blog }) => {
    const { currentUser, deletePost } = useContext(AppContext);
    const displayCan = ((currentUser === blog.username));
    const naviagte = useNavigate();


    function clickHandler() {
        deletePost(blog._id);
    }

    function copyHandler(){
        navigator.clipboard.writeText(blog.body).then(
            () => {
                toast.success('Blog Copied');
            }
        ).catch(
            (err) => {
                toast.error('Error In Copying');
            }
        )
    }

    return (


        <div className='relative hover:scale-110 transition-all duration-500 group mx-auto'>

            <div onClick={() => naviagte(`/showPost/${blog._id}`)} className='flex flex-col mx-auto  gap-y-12 bg-white px-4 py-4 md:w-[380px] w-[90%] max-w-[373px] text-center rounded-md shadow-black
            shadow-lg drop-shadow-lg card-back relative group border-slate-700
            border-2 flex-wrap cursor-pointer h-fit  min-h-[470px] justify-around 
            '>

                <img alt='border' loading='lazy' src={border} className='absolute h-[90%] opacity-0 left-0 top-0
                group-hover:opacity-10 transition-all duration-500 pointer-events-none
                '/>
                <div>
                <p className='font-bold text-2xl w-full'>{blog.title}</p>
                <p className='font-medium cursor-pointer'>Category- {blog.category}</p>
                <p className='w-full text-left mt-9'>{blog.body.substring(0, 320)}....</p>
                </div>
                <div className='w-full flex flex-col justify-between px-1 italic text-left'>
                    <p> By- {blog.user}</p>
                    <p>username- {blog.username}</p>
                    <p> Created At- {blog.createdAt}
                </p>
                </div>
                

            </div>

            <div className={`absolute right-9 top-1 text-2xl text-red-700 ${(displayCan) ? ('group-hover:opacity-100 transition-all duration-300') : ('')} 
                cursor-pointer opacity-0
                `}
                onClick={clickHandler}
            >
                <FaTrashCan />
            </div>

            <div className={`absolute right-2 top-1 text-2xl text-green-900
                cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300
                `}
                onClick={copyHandler}
                >
                <FaCopy />
            </div>

        </div>

    )
}

/*

*/

export default CardsBlog
