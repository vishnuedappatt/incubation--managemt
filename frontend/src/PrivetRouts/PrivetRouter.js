import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import {Navigate,Outlet}  from 'react-router-dom'

function PrivetRouter() {
    let {authTokens}=useContext(AuthContext) 
   
    return authTokens ? <Outlet /> : <Navigate to="/login"/> 
    }
  

export default PrivetRouter