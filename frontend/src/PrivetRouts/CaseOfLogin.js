import React,{useContext} from 'react'
import AuthContext from '../context/AuthContext'
import {Navigate,Outlet}  from 'react-router-dom'

function CaseOfLogin() {
    let {user}=useContext(AuthContext)

return user ? <Navigate to='/userhome'/>:<Outlet/>
}

export default CaseOfLogin