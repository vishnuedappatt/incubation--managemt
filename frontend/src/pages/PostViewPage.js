import React from 'react'
import DetailPost from '../components/DetailPost'
import SideBar from '../components/SideBar'
import {Row,Col} from 'react-bootstrap'
import Header from '../components/Header'

function PostViewPage() {
  return (
    <div>
      <Header />
      <Row>
      <Col lg={2}>
        <SideBar />
        </Col>
        <Col lg={10}>
        <DetailPost />
        </Col>
      </Row>
      
      
    </div>
  )
}

export default PostViewPage