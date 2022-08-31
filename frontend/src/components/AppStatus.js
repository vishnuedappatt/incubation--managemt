import React,{useContext,useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar';
import AuthContext from '../context/AuthContext'


function AppStatus() {

  let {authTokens} =useContext(AuthContext)
  let [check,SetCheck]=useState([])
  let[slots,SetSlots]=useState([])
  useEffect(() => {
    ShowAppStatus()
    SlotView()
  },[])
  
  let ShowAppStatus= async()=>{
  let email=authTokens.email        
  
    console.log('111111111111')
    let response= await fetch(`http://127.0.0.1:8000/api/users/appstatus/${email}/`,{          
        method:'GET',            
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer  '+String(authTokens.access),
        },
      
    })
    console.log('12121212')
    let data= await response.json()  
    console.log(data)
    if (response.status === 200){       
        SetCheck(data)      
       console.log(data) 
      
    }else{
        alert('something went wrong')
    }
}
let SlotView= async()=>{
  let email=authTokens.email        
  
    console.log('111111111111')
    let response= await fetch(`http://127.0.0.1:8000/api/users/userslot/${email}/`,{          
        method:'GET',            
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer  '+String(authTokens.access),
        },
      
    })
    console.log('12121212')
    let data= await response.json()  
    console.log(data)
    if (response.status === 200){       
      SetSlots(data)      
       console.log(data) 
      
    }else{
        alert('something went wrong')
    }
}

    const myStyle={
        backgroundImage: 
 "url('https://thumbs.dreamstime.com/b/abstract-gradient-blue-purple-colored-blurred-background-95666719.jpg')",
        height:'100vh',
        marginTop:'0px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',      
  
    };

    let a
  return (
    <div>
           <Card className='justify-content-center' style={{ width: '100%',marginLeft:'8px' ,alignItems:'center'}}>
            <Card.Img style={myStyle} variant="top" src="" />
            <Card.Body style={{marginTop:'-600px',textAlign:'center',alignItems:'center'}}>
            <h4   >Status of Application</h4>
            {check.status ?  <h5>{check.status}</h5> :<h4>No applications</h4> }
                <ProgressBar>
                  
                  { check.status==='rejected' ?a=1:((check.status)==='accept'?a=3:a=2)}
                  {a>=1 && <ProgressBar striped variant="danger" now={10} key={1} /> }                
                                                         
                { a>=2 ? <ProgressBar striped variant="warning" now={65} key={1} /> :'' }  
                
                    {a===3 && <ProgressBar striped variant="success" now={100} key={1} />}   
            </ProgressBar>
           {check.slot ? <div style={{'backgroundColor':'lightskyblue	','marginTop':'10px','paddingTop':'10px','border':'2px solid blue'}} >
           <h5 style={{'color':'blue','fontSize':'26px'}}>{slots.number}</h5>
              <br></br>
              <h5>slot date :</h5>
              <h5 style={{'color':'blue'}}>{slots.Date}</h5>
              <br></br>
              <h5>slot time :</h5>
              <h5 style={{'color':'blue'}}>{slots.time}</h5>
              <br></br>
            
            </div>
              :''}
                  {/* <>
      {[ 'bottom', ].map((placement) => (
        <OverlayTrigger 
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover  style={{'width':'500px'}} id={`popover-positioned-${placement}`}>
              <Popover.Header  style={{'width':'300px'}} as="h3">jfnbjhkgnbfjk</Popover.Header>
              <Popover.Body  style={{'width':'1000px'}}>
               <h5>slot number :</h5>
              <h5 style={{'color':'blue','fontSize':'26px'}}>{slots.number}</h5>
              <br></br>
              <h5>slot date :</h5>
              <h5 style={{'color':'blue'}}>{slots.Date}</h5>
              <br></br>
              <h5>slot time :</h5>
              <h5 style={{'color':'blue'}}>{slots.time}</h5>
              <br></br>
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary" style={{'width':'500px'}}> Click Here</Button>
        </OverlayTrigger>
      ))}
    </> */}

                
                <Link to='/userhome'><Button className='mt-5 '  style={{ width:'12rem',height:'3rem',}} variant="primary"> Back</Button></Link>
            </Card.Body>
         </Card>

    </div>
  )
}

export default AppStatus