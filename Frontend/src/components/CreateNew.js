import React, { useState } from 'react';
import Form from './Form';
import { NavLink } from 'react-router-dom';

const CreateNew = () => {

    const [create , setCreate] = useState(false) ; 
  return (

    <div>

      <NavLink to="/createBlog">
      <button onClick={() => {create ? setCreate(false) : setCreate(true) }} className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          <span className="text-xl font-bold">+</span>
        </button>
      </NavLink>
      
    </div>
  )
}

export default CreateNew
