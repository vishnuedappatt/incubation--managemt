import React,{useContext} from 'react'
import AuthContext from '../context/AuthContext'
import {Navigate,Outlet}  from 'react-router-dom'


function AdminRouter() {
    let {authTokens}=useContext(AuthContext)  
    const user=authTokens.isAdmin
    console.log(user,'isuser')
  return user ? <Outlet/> : <Navigate to='/login'/>
   
}

export default AdminRouter