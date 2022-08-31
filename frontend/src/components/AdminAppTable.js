import React,{useEffect,useContext} from 'react'
import Table from 'react-bootstrap/Table';
import {Col,Row} from 'react-bootstrap';
import AppilationContext from '../context/AppContext';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'


function AdminAppTable() {
    let {listedApps,accept,deleteApps,RejectedStatus}=useContext(AppilationContext)
    console.log(accept)
    const navigate = useNavigate();
   
    useEffect(() => {
      console.log('noufida');
      listedApps()
       
    },[])
  return (
    <div>
         <div>
       

       <Row className='justify-content-center'>
         {/* <Col lg={10}> */}
         <h3>Accepted Applications</h3>
             <Table striped bordered hover >
               
                 <thead>
                     <tr>
                     <th>sl.no</th>
                     <th>company name</th>
                     <th>team list</th>
                     <th>city</th>
                     <th>status</th>
                     <th></th>
                     <th>Reject</th>
                     <th>delete</th>
                     </tr>
                 </thead>
                 <tbody>
                    
                   {  accept.map((obj,index)=>
                         <tr>
                         <td>{index+1}</td>
                         <td>{obj.company_name}</td>
                         <td>{obj.team_description}</td>
                         <td>{obj.city}</td>                         
                        <td><Button  variant="success">Accepted</Button>{' '}</td> 
                        <td><Button onClick={()=>navigate (`/apps/${(obj.id)}`)}  variant="primary">open</Button>{' '}</td>
                        <td><Button onClick={()=>RejectedStatus(obj.id)} variant="danger">Reject</Button>{' '}</td>
                        <td><Button onClick={()=>deleteApps(obj.id)} variant="danger">delete</Button>{' '}</td>
                        
                         </tr>
                 )
                    }
                  
                 </tbody>
             </Table>
         {/* </Col> */}
     </Row>
 </div>

    </div>
  )
}

export default AdminAppTable