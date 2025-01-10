import React, { useContext } from 'react'
import CardsBlog from '../components/CardsBlog';
import CreateNew from '../components/CreateNew';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';
import { useLocation, useNavigate } from 'react-router-dom';

const Category = () => {
    const { loadingB, blogs } = useContext(AppContext);
    const location = useLocation();
    const categ = location.pathname.split("/").at(-1);
    const navigate = useNavigate();

    return (
        <div className=' w-[96%] mx-auto relative'>
            <button class="group mt-4 relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full 
bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50 ml-3
"
                onClick={() => {
                    navigate(-1);
                }}
            >
                <span class="z-10 pr-2">Back</span>
                <div class="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
                    <div class="mr-3.5 flex items-center justify-center">
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-neutral-50 transform rotate-180"
                        >
                            <path
                                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                </div>
            </button>

            <h1 className=' text-gray-700 text-2xl md:text-4xl mb-10 font-extrabold'>{categ}</h1>
            {
                loadingB ? (
                    <Spinner />
                ) :
                    (
                        blogs.length === 0 ? (<div className='text-3xl'>No post Available</div>) :
                            <div className='flex gap-6 flex-wrap w-full justify-center'>
                                {

                                    blogs.filter(blog => blog.category === categ).map(blog =>
                                        (<CardsBlog key={blog._id} blog={blog} />)
                                    )
                                }

                            </div>
                    )

            }



            <div className=' fixed bottom-4 right-4'>

                <CreateNew />
            </div>
        </div>
    )
}

export default Category
