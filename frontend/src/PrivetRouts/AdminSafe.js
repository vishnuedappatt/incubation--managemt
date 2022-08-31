import React,{useContext} from 'react'
import AuthContext from '../context/AuthContext'
import {Navigate,Outlet}  from 'react-router-dom'


function AdminSafe() {
  let {authTokens}=useContext(AuthContext)  
  const user=authTokens.isAdmin
  console.log(user,'isuser')
  return user ? <Navigate to='/admin'/> : <Outlet/>
 
}

export default AdminSafe