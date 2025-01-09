import React, { useContext } from 'react'
import CardsBlog from '../components/CardsBlog';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';

const AllPost = () => {
     const {loadingB  , blogs } = useContext(AppContext) ; 
  return (
        <div>
            <h1 className=' text-red-800 text-4xl mb-10 font-extrabold'>AllPost:</h1>
            {
                loadingB ? (
                    <Spinner/>
                ) : 
                (
                    blogs.length === 0 ? (<div className='text-3xl'>No post Available</div>) : 
                    <div className='flex gap-6 flex-wrap w-full justify-center'>
                    {

                    (blogs.reverse().map((blog) => (


                            <CardsBlog key= {blog._id} blog = {blog} /> 
                    )))
                    }

                    </div>
                ) 
                
            }
        </div>
  )
}

export default AllPost
