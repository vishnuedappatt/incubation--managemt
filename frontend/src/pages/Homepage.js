import React from 'react'
import Header from '../components/Header'
import HomeScreen from '../components/HomeScreen'
import {Row,Col} from 'react-bootstrap'

function Home_page() {
  return (
    <div>
      <Header />
   <Row>
    <Col lg={12} md={12}>
      <HomeScreen />
    </Col>
   </Row>
   
    </div>
  )
}

export default Home_page