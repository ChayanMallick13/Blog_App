import React, { useContext } from 'react'
import CardsBlog from '../components/CardsBlog';
import CardUser from '../components/CardUser';
import CreateNew from '../components/CreateNew';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';

const Home = () => {

    const {loadingB , loadingU , blogs , users} = useContext(AppContext) ; 

    return (
        <div className=' w-[96%] flex flex-col mx-auto mt-[2rem]'>
            
            <h1 className=' text-red-800 text-4xl mb-10 font-extrabold'>Latest:</h1>
            {
                loadingB ? (
                    <Spinner/>
                ) : 
                (
                    blogs.length === 0 ? (<div>No post Available</div>) : 
                    <div className='flex gap-10'>
                    {

                    (blogs.map((blog) => (


                            <CardsBlog key= {blog._id} blog = {blog} /> 
                    )))
                    }

                    </div>
                ) 
                
            }

            <h1 className=' text-red-800'>Blog by users</h1>

            {
                loadingU ? (
                    <Spinner/>
                ) : 
                (
                    users.length === 0 ? (<div>No user found</div>) : 
                    <div className='flex gap-x-10'>
                        {
                            (users.map((user) => (
                                <CardUser key= {user._id} user = {user} /> 
                            )))

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

export default Home
