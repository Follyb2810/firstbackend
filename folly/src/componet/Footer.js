import React from 'react'
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer 
    style={{
        width:"100%",
        position:"relative",
        bottom:0,
        display:"flex",
        justifyContent:"center",
    }}
    >
        <Container>
        <Row>
            <Col className="text-center py-3"> Copyright og folly
            </Col>
        </Row>
        </Container>
      header
    </footer>
  )
}

export default Footer
