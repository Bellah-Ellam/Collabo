import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function Profile() {

  const {currentUser} = useContext(AuthContext)  
  return (
    <div>
      {
        currentUser && currentUser?
        <>
        <>
        <a href='current user profile pic'/>
        </>
          <h4>Email: {currentUser && currentUser.email}</h4>
          <h4>Created-at: {currentUser && currentUser.created_at}</h4>
          <h4>Updated-at: {currentUser && currentUser.updated_at}</h4>
        </>
        :
        <div className='text-info'>
            Login to view your profile details
        </div>
      }
    </div>
  )
}

