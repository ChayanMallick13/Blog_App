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
      <button className="w-full py-2 px-4 bg-blue-500 text-white font-medium text-sm rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1">
        View all post
      </button>
    </div>

    </NavLink>
  )
}

export default CardUser
