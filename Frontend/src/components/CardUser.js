import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const CardUser = ({user}) => {
  const {userPostHandler} = useContext(AppContext) ; 
  return (
    <div onClick={userPostHandler}>
      <p>{user.username}</p>
      <p>{user.name}</p>
    </div>
  )
}

export default CardUser
