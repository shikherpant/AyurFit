import { useState } from 'react'
import UserContext from './UserContext'

// eslint-disable-next-line react/prop-types
const UserProvider = ({children}) => {
    const [user,setUser]=useState("beautiful_Soul")
    const [modal,showModal]=useState(false)
  return (
    <UserContext.Provider value={{user,setUser,modal,showModal}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider