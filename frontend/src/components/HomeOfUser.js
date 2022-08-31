import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function HomeOfUser() {
    const myStyle={
        backgroundImage: 
 "url('https://thumbs.dreamstime.com/b/abstract-gradient-blue-purple-colored-blurred-background-95666719.jpg')",
        height:'100vh',
        marginTop:'0px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
       
  
    };
    
  return (
    <div>
               <Card className='justify-content-center' style={{ width: '100%',marginLeft:'8px' ,alignItems:'center'}}>
            <Card.Img style={myStyle} variant="top" src="" />
            <Card.Body style={{marginTop:'-600px',textAlign:'center',alignItems:'center'}}>
                
                
                <h4>Register Application</h4>
               <Link to='/application'><Button style={{ width:'22rem',height:'3rem',}} variant="primary">Click Here</Button></Link> <br></br>
                <h4  className='mt-5 ' >Status of Application</h4>
                <Link to='/userstatus'><Button  style={{ width:'22rem',height:'3rem',}} variant="primary">Click Here</Button></Link>
            </Card.Body>
         </Card>
    </div>
  )
}

export default HomeOfUser