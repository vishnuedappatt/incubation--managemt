import React from 'react'
import AdminTable from '../components/AdminTable'
import AdminAppTable from '../components/AdminAppTable'  
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import {Row,Col} from 'react-bootstrap'

function Admin_page() {
  return (
    <div>
    <Header />
    <Row>
    <Col lg={2}>
      <SideBar />
    </Col>
    <Col  lg={10}>
      <AdminTable />
      <AdminAppTable />
    </Col>  
    </Row>  
    </div>
  )
}

export default Admin_page