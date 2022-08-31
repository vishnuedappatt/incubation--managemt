import React, { useState ,useContext,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AuthContext from '../context/AuthContext'

function UserList() {
    const[state,SetState]=useState([])
    let {authTokens} =useContext(AuthContext)    
    
    let UnBlockUser=(id,key)=>{
        console.log(id)     
        console.log(key)
       { key ?UserStatusChanger(id,false):UserStatusChanger(id,true)}
    }


    useEffect(() => {
    ListOfUser()
    
    }, [])
    
    let ListOfUser= async()=>{
        console.log('ldfjkfldjfkljdj')
        // e.preventDefault()        
      
        console.log('111111111111')
        let response= await fetch('http://127.0.0.1:8000/api/admin/users/',{          
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
            SetState(data)   
        }else{
            alert('something went wrong')
        }
    }


    let UserStatusChanger= async(id,command)=>{                
      
        console.log('111111111111')
        let response= await fetch(`http://127.0.0.1:8000/api/admin/users/${id}/`,{          
            method:'POST',            
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  '+String(authTokens.access),
            },          
            body:JSON.stringify({'is_active':command})
        })
        console.log('euueue')
        let data= await response.json()      
        console.log(data)
        if (response.status === 200){  
            ListOfUser()
            

        }else{
            alert('something went wrong')
        }
    }
    


  return (
    <div>

<Row className='justify-content-center '>
            {/* <Col lg={10}> */}
            <h3 style={{'textAlign':'center','marginTop':'50px','marginBottom':'50px'}}>user list</h3>
                <Table striped bordered hover >
                  
                    <thead>
                        <tr>
                        <th>sl.no</th>
                        <th> name</th>
                        <th>username </th>
                        <th>email</th>
                        <th>status</th>
                       
                        </tr>
                    </thead>
                    <tbody>
                       
                      {  state.map((obj,index)=>
                            <tr>
                            <td>{index+1}</td>
                            <td>{obj.first_name}</td>
                            <td>{obj.username}</td>
                            <td>{obj.email}</td>   
                            { obj.is_active ?<td><Button  variant="success" onClick={()=>UnBlockUser(obj.id,obj.is_active)} >Active</Button>{' '}</td> :
                            <td><Button  variant="danger" onClick={()=>UnBlockUser(obj.id,obj.is_active)}>Block</Button>{' '}</td> }
                            
                            </tr>
                    )
                       }
                     
                    </tbody>
                </Table>
            {/* </Col> */} 
        </Row>
    </div>
  )
}

export default UserList