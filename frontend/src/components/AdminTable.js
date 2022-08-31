import React,{useEffect,useContext} from 'react'
import Table from 'react-bootstrap/Table';
import {Row} from 'react-bootstrap';
import AuthContext from '../context/AuthContext';
import AppilationContext from '../context/AppContext';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'

function AdminTable() {
    
    let {appList,state,listedApps,deleteApps,RejectedStatus}=useContext(AppilationContext)
    let {authTokens} =useContext(AuthContext)
    const navigate = useNavigate();
    console.log(state)
     
    useEffect(() => {
      console.log('noufida');
      appList()
       
    },[])

    const statusChange=async(id)=>{
      console.log(id)
    
    let response= await fetch(`http://127.0.0.1:8000/api/admin/app/${id}/`,{
      method:'POST',
      headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer  '+String(authTokens.access),
      },
      body:JSON.stringify({'status':'accept'})
  })
  let data= await response.json()
    console.log(data)
    appList() 
    listedApps()
 
  }


//   const RejectedStatus=async(id)=>{
//     console.log(id)
  
//   let response= await fetch(`http://127.0.0.1:8000/api/admin/app/${id}/`,{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json',
//         'Authorization':'Bearer  '+String(authTokens.access),
//     },
//     body:JSON.stringify({'status':'rejected'})
// })
// let data= await response.json()
//   console.log(data)
//   appList() 
//   listedApps()

// }
   

  return (
    <div>       

          <Row className='justify-content-center'>
            {/* <Col lg={10}> */}
            <h3>Pending Applications</h3>
                <Table striped bordered hover >
                  
                    <thead>
                        <tr>
                        <th>sl.no</th>
                        <th>company name</th>
                        <th>team list</th>
                        <th>city</th>
                        <th>status</th>
                        <th>Rejected</th>
                        <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                      {  state.map((obj,index)=>
                            <tr>
                            <td>{index+1}</td>
                            <td>{obj.company_name}</td>
                            <td>{obj.team_description}</td>
                            <td>{obj.city}</td>     
                            <td><Button onClick={()=>statusChange(obj.id)}  variant="warning">pending</Button>{' '}</td>                 

                            <td><Button onClick={()=>navigate (`/apps/${(obj.id)}`)}  variant="primary">open</Button>{' '}</td>
                            <td><Button onClick={()=>RejectedStatus(obj.id)} variant="danger">Rejected</Button>{' '}</td>
                           <td><Button onClick={()=>deleteApps(obj.id)} variant="danger">delete</Button>{' '}</td>
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

export default AdminTable