import React, { useContext } from 'react'
import AuthContext  from '../context/AuthContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col,Row} from 'react-bootstrap'



function Login() {
    let {logingUser}=useContext(AuthContext)
  return (    
    <div>       
      <Row className='justify-content-center mt-5 '>
        <Col lg={5}>
          <Form onSubmit={logingUser}>
            <h1>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" name='username' placeholder="Enter email" />
              <Form.Text className="text-muted">              
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-{6}" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            
            <Button  variant="primary" type="submit">
              Submit  
            </Button>
      </Form>
    </Col>

    </Row>
  
  </div>
  )
}

export default Login