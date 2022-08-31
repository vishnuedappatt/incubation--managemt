import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import {Row,Col} from 'react-bootstrap'
import RecordTable from '../components/RecordTable'

function RecordPage() {
  return (
    <div>
       <Header />
    <Row>
    <Col lg={2}>
    <SideBar />
    </Col>
    <Col lg={10}>
    <RecordTable />
    </Col>
    

    </Row>
    </div>
  )
}

export default RecordPage