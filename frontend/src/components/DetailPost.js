import React, { useContext,useEffect } from 'react'
import AppilationContext  from '../context/AppContext';
import Table from  'react-bootstrap/Table'
import {useParams} from 'react-router-dom'

function DetailPost() {

    let {viewPost,posts} =useContext(AppilationContext)

    const parms=useParams();
    let id=parms.id
    console.log(id,'paraammmm')
    useEffect(() => {
      console.log(id,'rrrrrrrrrr')
      viewPost(id)
      
     
    }, [])
    

  return (
    
    <div> 
     
   <Table className='m-5 '  size="sm">

<tbody style={{'lineHeight':'8vh'}}>
  <h2 ><u>Details</u></h2>
  <tr>         
    <th>Name</th>
    <td  >{posts.name}</td>
    </tr>

    <tr>
    <th>Address</th>
    <td>{posts.address}</td>
    </tr>

    <tr>
    <th>City</th>
    <td>{posts.city}</td>
    </tr>

    <tr>
    <th>State</th>
    <td>{posts.state}</td>  
    </tr>

    <tr>
    <th>Email Address</th>
    <td>{posts.email}</td>
    </tr>

    <tr>
    <th>Phone number</th>
    <td>{posts.mobile}</td>
    </tr>

    <tr>
    <th>Company Name</th>
    <td>{posts.company_name}</td>
    </tr>

    <tr>
    <th>About Team</th>
    <td>{posts.team_description}</td>   
    </tr>

    <tr>
    <th>About Products</th>
    <td>{posts.product_description}</td> 
    </tr>

    <tr>
    <th>Problem</th>
    <td>{posts.problem_description}</td>
  </tr>
</tbody>

</Table>
  </div>
  )
}

export default DetailPost