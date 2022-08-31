import ListGroup from 'react-bootstrap/ListGroup'
import { Link  } from 'react-router-dom';


function SideBar() {
  return (
    <div>
 
       <ListGroup style={{'height':'120vh','backgroundColor':'black'}}>
        <Link style={{'backgroundColor':'black' ,'color':'white','textDecoration':'none','textAlign':'center',}} className='mt-5' to="/admin">Applicant list</Link>
        <Link style={{'backgroundColor':'black' ,'color':'white','textDecoration':'none','textAlign':'center'}} className='mt-5' to="/records">Record Track</Link>
        <Link style={{'backgroundColor':'black' ,'color':'white','textDecoration':'none','textAlign':'center'}} className='mt-5' to="/slot">slot Booking</Link>
        <Link style={{'backgroundColor':'black' ,'color':'white','textDecoration':'none','textAlign':'center'}} className='mt-5' to="/users">users list</Link>             
    </ListGroup>
  
  
   
    </div>
  )
}

export default SideBar 