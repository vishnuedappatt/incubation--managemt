import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col,Row} from 'react-bootstrap'
import AuthContext from '../context/AuthContext';


function SignUp() {
  let {signupUser} =useContext(AuthContext)
  return (
    <div>     
      <Row className='justify-content-center mt-5 '>
        <Col lg={5}>
        <Form onSubmit={signupUser}>
          <h1>Signin</h1>     

      <Form.Group className="mb-3 col-{6}" controlId="formBasicPassword" requried>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"  name="name" placeholder="Name" required/>
      </Form.Group>
      <Form.Group className="mb-3 col-{6}"  controlId="formBasicPassword">
        <Form.Label>username</Form.Label>
        <Form.Control type="text" name="username" placeholder="username" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email"  placeholder="Enter email" required/>
        <Form.Text className="text-muted">         
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 col-{6}" controlId="formBasicPassword" required>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Col>

    </Row>
  
  </div>
  )
}

export default SignUp