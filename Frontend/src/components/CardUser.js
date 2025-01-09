import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { NavLink } from 'react-router-dom';


const CardUser = ({user}) => {

  return (
    <NavLink to={`/userPost/${user.username}`}>
    <div className=" max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-600">{user.username}</p>
      </div>


      <button class="relative inline-flex items-center px-2 md:px-10 py-2 overflow-hidden text-sm md:text-lg font-medium text-slate-800 border-2 border-slate-600 rounded-full hover:text-white group hover:bg-gray-50">
        <span class="absolute left-0 block w-full h-0 transition-all  bg-slate-800 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span class="relative">View all post</span>
    </button>
    </div>

    </NavLink>
  )
}

export default CardUser
