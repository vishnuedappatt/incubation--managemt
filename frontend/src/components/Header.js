import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';



function Header() {
    let {user,logoutUser,authTokens}=useContext(AuthContext)
  return (
    <div>
 

<Navbar bg="light" expand="lg">
        <Container>
         
            <Navbar.Brand style={{'marginLeft':'-10px'}} href="#home"><b>EXOTIPS</b></Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse className='position-absolute top-5 end-0' id="basic-navbar-nav">
         
                {user ? <p className='mx-5' >Hello, {authTokens.name} </p> :
                <Nav className="me-3">
                <Link style={{'textDecoration':'none','color':'black'}} to="/signup">Signup </Link> 
                                            
                </Nav> }
                <Nav className=" me-3">
                  {/* { user ? (<p className='mx-5' style={{'cursor':'pointer','color':'white'}} onClick={logoutUser}><Button>Logout</Button></p>) :
                  (<Link style={{'textDecoration':'none','color':'black'}} className='mx-5'  to="/login">Login</Link>)} */}
                                              
                </Nav>
            </Navbar.Collapse>
            { user ? (<p className='mx-5' style={{'cursor':'pointer','color':'white'}} onClick={logoutUser}><Button>Logout</Button></p>) :
                  (<Link style={{'textDecoration':'none','color':'black'}} className='mx-5'  to="/login"></Link>)
                  }

        </Container>
    </Navbar>
    </div>
  )
}

export default Header