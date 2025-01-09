import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { NavLink } from 'react-router-dom';


const CardUser = ({user}) => {

  return (
    <NavLink to={`/userPost/${user.username}`}>
      <p>{user.username}</p>
      <p>{user.name}</p>
    </NavLink>
  )
}

export default CardUser
