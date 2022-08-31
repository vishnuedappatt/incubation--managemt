import React from 'react'
import Header from '../components/Header'
import Slot from '../components/Slot'
import {Col,Row} from 'react-bootstrap'
import SideBar from '../components/SideBar'

function SlotBooking() {
  return (
    <div>
    <Header />
    <Row>
      <Col lg={2} md={2}>
    <SideBar />
    </Col>
      <Col lg={10}>
    <Slot />
    </Col>
    

    </Row>
    </div>
  )
}

export default SlotBooking