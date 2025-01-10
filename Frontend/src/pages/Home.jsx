import React, { useContext } from 'react'
import CardsBlog from '../components/CardsBlog';
import CardUser from '../components/CardUser';
import CreateNew from '../components/CreateNew';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const { loadingB, loadingU, blogs, users } = useContext(AppContext);

    return (
        <div className=' w-[96%] mx-auto mt-[2rem]'>

            



            <div className='flex  gap-x-4'>
            <h1 className=' text-gray-700 text-2xl md:text-4xl mb-10 font-extrabold'>Latest:</h1>
                <NavLink to={'/allPost'}><buttons class="relative inline-block px-4 py-2 font-medium group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-slate-500 group-hover:bg-slate-700"></span>
                <span class="relative text-black group-hover:text-white">viewAll</span>
            </buttons></NavLink>
            </div>
            
            {
                loadingB ? (
                    <Spinner />
                ) :
                    (
                        blogs.length === 0 ? (<div className='text-3xl'>No post Available</div>) :
                            <div className='flex gap-9 flex-wrap w-full justify-center'>
                                {

                                    (blogs.slice(0,6).map((blog) => (


                                        <CardsBlog key={blog._id} blog={blog} />
                                    )))
                                }

                            </div>
                    )

            }

            <h1 className=' text-gray-700 mt-14 text:xl md:text-3xl font-extrabold mb-10'>Blog by users:</h1>

            {
                loadingU ? (
                    <Spinner />
                ) :
                    (
                        users.length === 0 ? (<div>No user found</div>) :
                            <div className='flex flex-wrap justify-center gap-10 mb-8'>
                                {
                                    (users.map((user) => (
                                        <CardUser key={user._id} user={user} />
                                    )))

                                }
                            </div>
                    )

            }
            <div className=' fixed bottom-4 right-4 '>

                <CreateNew />
            </div>
        </div>
    )
}

export default Home
