import React, { useContext } from 'react'
import CardsBlog from '../components/CardsBlog';
import CreateNew from '../components/CreateNew';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';
import { useLocation } from 'react-router-dom';

const Category = () => {
    const {loadingB  , blogs } = useContext(AppContext) ; 
    const location = useLocation() ; 
    const categ = location.pathname.split("/").at(-1);

    return (
        <div className=' w-[96%] mx-auto mt-[2rem]'>
            
            <h1 className=' text-gray-700 text-2xl md:text-4xl mb-10 font-extrabold'>{categ}</h1>
            {
                loadingB ? (
                    <Spinner/>
                ) : 
                (
                    blogs.length === 0 ? (<div className='text-3xl'>No post Available</div>) : 
                    <div className='flex gap-6 flex-wrap w-full justify-center'>
                    {

                        blogs.filter(blog => blog.category === categ ).map(blog => 
                            (<CardsBlog key= {blog._id} blog = {blog} /> ) 
                        )
                    }

                    </div>
                ) 
                
            }


            
            <div className=' fixed bottom-4 right-4'>

                <CreateNew/>
            </div>
        </div>
    )
}

export default Category