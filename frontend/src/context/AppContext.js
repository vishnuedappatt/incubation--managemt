import React, {createContext,useContext,useState} from 'react'
import AuthContext from './AuthContext'
const AppilationContext=createContext()

export default AppilationContext ;

export const AppProvider=({children})=>{
 
    let {authTokens} =useContext(AuthContext)
    
    let [state,setState]=useState([])
    let[accept,setAccept]=useState([])
    let[posts,setPost]=useState([])
   
    let appList= async()=>{
        console.log('ldfjkfldjfkljdjlk')
        // e.preventDefault()        
      
        console.log('111111111111')
        let response= await fetch('http://127.0.0.1:8000/api/admin/app/',{          
            method:'GET',            
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  '+String(authTokens.access),
            },
          
        })
        console.log('euueue')
        let data= await response.json()
      
        console.log(data)
        if (response.status === 200){  
            // alert('welcome')
            setState(data)
          
          console.log(data)  
          
          
        }else{
            alert('something went wrong')
        }
    }


    let listedApps = async()=>{
        console.log('ldfjkfldjfkljdjlk')
        // e.preventDefault()        
        console.log('111111111111')
        let response= await fetch('http://127.0.0.1:8000/api/admin/apps/',{          
            method:'GET',            
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  '+String(authTokens.access),
            },
          
        })
        console.log('euueue')
        let data= await response.json()
      
        console.log(data)
        if (response.status === 200){  
            // alert('welcome')
            setAccept(data)
          
          console.log(data)  
          
          
        }else{
            alert('something went wrong')
        }
    }


    // all datas
    const [data,SetData]=useState([])
    let application = async()=>{
        console.log('ldfjkfldjfkljdjlk')
        // e.preventDefault()        
        console.log('999999999999')
        let response= await fetch('http://127.0.0.1:8000/api/admin/allapps/',{          
            method:'GET',            
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  '+String(authTokens.access),
            },
          
        })
        console.log('euueue')
        let data= await response.json()
      
        console.log(data)
        if (response.status === 200){  
            // alert('welcome')
            SetData(data)
          
          console.log(data)  
          
          
        }else{
            alert('something went wrong')
        }
    }


    
// post view

    let viewPost = async(id)=>{
        console.log('ldfjkfldjfkljdjlk')
        // e.preventDefault()        
       
        console.log('kiliiii')
        console.log('111111111111')
        let response= await fetch(`http://127.0.0.1:8000/api/admin/apps/${id}/`,{          
            method:'GET',            
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  '+String(authTokens.access),
            },
          
        })
        console.log('euueue')
        let data= await response.json()
      
        console.log(data)
        if (response.status === 200){  
          
            
          setPost(data)
         
          console.log(data)  
          
        
          
        }else{
            alert('something went wrong')
        }
    }

// reject status


const RejectedStatus=async(id)=>{
    console.log(id)
  
  let response= await fetch(`http://127.0.0.1:8000/api/admin/app/${id}/`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer  '+String(authTokens.access),
    },
    body:JSON.stringify({'status':'rejected'})
})
let data= await response.json()
  console.log(data)
  appList() 
  listedApps()

}



    // delete



  const deleteApps=async(id)=>{
    console.log(id)
  console.log('1212121')
  let response= await fetch(`http://127.0.0.1:8000/api/admin/app/del/${id}/`,{
    method:'DELETE',
    headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer  '+String(authTokens.access),

    },
   
})

let data= await response.json()
  console.log(data)
  appList() 
  listedApps()
}


console.log('popopopo')
console.log(posts)

    console.log('wwwwwwwwwwwwwwwww') 
    console.log(state)  
    let contentData={
       appList:appList,
       listedApps:listedApps,
       state:state,
       accept:accept,
       deleteApps:deleteApps,
       viewPost:viewPost,
       posts:posts,
        application:application,
       data:data,
       RejectedStatus:RejectedStatus,
     
    
       
    }

    
    return (
       <AppilationContext.Provider value={contentData}>
            {children}
       </AppilationContext.Provider>
        
    )
}
