import React,{createContext,useContext,useState} from "react";
import AuthContext from "./AuthContext";
import {useNavigate} from 'react-router-dom'
import AppilationContext from "./AppContext";


const SlotContext=createContext()
export default SlotContext;

export const SlotProvider=({children})=>{
    const {listedApps}  = useContext(AppilationContext)
    let {authTokens}=useContext(AuthContext)
    const [value ,SetValue]=useState([])

    

    //slot nte
    const [show, setShow] = useState(false); 
    const [number,SetNumber]=useState([])

    const handleClose = () => { 
        setShow(false);
      }
  
      const handleShow = (id) => {  setShow(true)
        SetNumber(id)
      }
      
      




   

    const [slot,SetSlot]=useState([])
    let SlotList = async()=>{
        console.log('ldfjkfldjfkljdjlk')
        // e.preventDefault()        
        console.log('111111111111')
        let response= await fetch('http://127.0.0.1:8000/api/admin/slots/',{          
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
            SetSlot(data)
           listedApps()
          console.log(data)  
          // navigate('/slot')
          
        }else{
            alert('something went wrong')
        }
    }

    const [changer,SetChanger]=useState([])
    let AppStatusChanger= async(id)=>{
        console.log('')
        // e.preventDefault()        
         
        console.log('111111111111')
        let response= await fetch(`http://127.0.0.1:8000/api/admin/slot/${id}/`,{          
            method:'POST',            
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  '+String(authTokens.access),
            },
            body:JSON.stringify({'slot':'true'})
        })
        console.log('euueue')
        let data= await response.json()
      
        console.log(data)
        if (response.status === 200){            
            SetChanger(data)   
             
          console.log(data)   
         
          
        }else{
            alert('something went wrong')
        }
    }



    let ListChanger= async(id,key)=>{
        console.log(id)
        console.log('qw')
        // e.preventDefault()        
         
        console.log('222222222220000000000002222222')
        let response= await fetch(`http://127.0.0.1:8000/api/admin/slots/${id}/`,{          
            method:'POST',            
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  '+String(authTokens.access),
            },
            body:JSON.stringify({'active':'true','application':key})
        })
        console.log('lplplpllplplpl')
        let data= await response.json()
      
        console.log(data)
        if (response.status === 200){    
            console.log('hooks')        
            SlotList()
            listedApps()  
            handleClose()

          console.log(data)   
         
          
        }else{
            alert('something went wrong')
        }
    }


    let contentData={       
        // SelectStatus:SelectStatus,
        value:value,
        AppStatusChanger:AppStatusChanger,
        changer:changer,
        ListChanger:ListChanger,
        SlotList:SlotList,
        slot:slot,
        handleClose:handleClose,
        handleShow:handleShow,
        number:number,
        show:show,

     
        
     }
 
     
     return (
        <SlotContext.Provider value={contentData}>
             {children}
        </SlotContext.Provider>
         
     )
 }
