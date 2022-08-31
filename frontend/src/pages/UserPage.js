import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import UserList from '../components/UserList'
import {Col,Row} from 'react-bootstrap'
function UserPage() {
  return (
    <div>
    <Header />
    <Row>
    <Col lg={2}>
    <SideBar />
    </Col>
    <Col  lg={9}>
    <UserList />
    </Col>
    

    </Row>
  
    </div>
  )
}

export default UserPage