import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState,useContext,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import AppilationContext  from '../context/AppContext';
import SlotContext from '../context/SlotContext';
 

function Slot() {
    const {listedApps,accept}  = useContext(AppilationContext)
    const {SlotList,AppStatusChanger,ListChanger,slot,number,show,handleShow,handleClose}=useContext(SlotContext)   
 
    const [key ,SetKey]=useState([])
   
    const expression=(id)=>{
      console.log('999000900909009')
      console.log(id)     
      AppStatusChanger(id)
      SetKey(id)
      console.log('its b function')   
    }
    
    const lastClick=()=>{
      console.log('its a a function')
     
      ListChanger(number,key)
      console.log(number)
    }

    useEffect(() => {      
      listedApps()
      SlotList()

    }, [])


  return (
    
    <div>
      
         { slot.map((obj)=>
      
      obj.active ? <Button className='m-5' style={{'width':'150px','height':'150px'}} 
      variant="danger" onClick={handleShow} disabled ><h1>{obj.number} </h1><br></br> {obj.Date}<br></br>
      { obj.application ? obj.application:'' }<br></br></Button>: <Button
       className='m-5' style={{'width':'150px','height':'150px'}} 
       variant="primary" onClick={()=>handleShow(obj.id)}>
      <h1>{obj.number} </h1><br></br> {obj.Date}<br></br>{obj.time}
      </Button> )}
   
      <Modal show={show} onHide={handleClose}>       
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body > 
        Select the applicant to get slot
        <Dropdown className='mt-5'>
      <Dropdown.Toggle style={{'width':'400px'}} variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        { accept.map((obj)=>
             obj.slot ? '':<Dropdown.Item style={{'width':'400px',}}  onClick={()=>expression(obj.id)}>{obj.name}</Dropdown.Item>           
        )}       
       
      </Dropdown.Menu>
    </Dropdown></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={lastClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Slot