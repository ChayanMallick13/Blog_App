import React from 'react'

const CardUser = ({user}) => {
  return (
    <div>
      <p>{user.username}</p>
      <p>{user.name}</p>
    </div>
  )
}

export default CardUser
