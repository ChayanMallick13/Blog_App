import React from 'react'
import CardsBlog from '../components/CardsBlog';
import CardUser from '../components/CardUser';
import CreateNew from '../components/CreateNew';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className=' w-full flex flex-col'>
            
            <p className='text-3xl'>Latest</p>
            <CardsBlog/>
            <p>Blog by users</p>
            <CardUser/>
            <CreateNew/>
        </div>
    )
}

export default Home
