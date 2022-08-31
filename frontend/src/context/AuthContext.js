import {createContext,useState} from 'react'
import jwt_decode from "jwt-decode"
import {useNavigate} from 'react-router-dom';

const AuthContext=createContext()

export default AuthContext ;

export const AuthProvider=({children})=>{
    const navigate = useNavigate();
    
    const [authTokens,setAuthTokens]= useState(()=>localStorage.getItem('authTokens')?JSON.parse(localStorage.getItem('authTokens')):null)
    const [user,setUser]=useState(()=>localStorage.getItem('authTokens')?jwt_decode(localStorage.getItem('authTokens')):null) 
    let signupUser= async(e)=>{
        e.preventDefault()        
        let response= await fetch('http://127.0.0.1:8000/api/users/register/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value,'name':e.target.name.value,'email':e.target.email.value ,'password':e.target.password.value})
        })
        let data= await response.json()
        console.log(data)
        if (response.status === 200){  
            alert('created successfully')
            navigate('/login');
        }else{
            alert('something went wrong')
        }
    }

    let logingUser= async(e)=>{
        e.preventDefault()        
        let response= await fetch('http://127.0.0.1:8000/api/users/login/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value,'password':e.target.password.value})
        })
        let data= await response.json()
        console.log(data)
        if (response.status === 200){           
            setAuthTokens(data)           
            setUser(jwt_decode(data.access))   
            
            localStorage.setItem('authTokens',JSON.stringify(data))
            data.isAdmin ?navigate('/admin') : navigate('/userhome');

        }else{
            alert('something went wrong')
        }
    }
    console.log('hfkjahdkjk')
    console.log('wow token:',authTokens)
    console.log('usererr:',user)
   
    let logoutUser=()=>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/');
    }

    let contentData={
        user:user, 
        signupUser:signupUser,
        logingUser:logingUser,
        logoutUser:logoutUser,      
        authTokens:authTokens,
       
    }

    
    return (
        <AuthContext.Provider value={contentData}>
            {children}
        </AuthContext.Provider>
    )
}