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

            
            <h1 className=' text-gray-700 text-2xl md:text-4xl mb-10 font-extrabold'>Latest:</h1>



            <div className='flex gap-x-4'>
                <h1 className=' text-red-800 text-4xl mb-10 font-extrabold'>Latest:</h1>
                <NavLink to={'/allPost'}><button className="bg-green-500 text-sm text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:bg-green-600 hover:translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-300 active:bg-green-700">
                    View All
                </button></NavLink>
            </div>

            {
                loadingB ? (
                    <Spinner />
                ) :
                    (
                        blogs.length === 0 ? (<div className='text-3xl'>No post Available</div>) :
                            <div className='flex gap-6 flex-wrap w-full justify-center'>
                                {

                                    (blogs.slice(-6).reverse().map((blog) => (


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
                            <div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-10'>
                                {
                                    (users.map((user) => (
                                        <CardUser key={user._id} user={user} />
                                    )))

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

export default Home
