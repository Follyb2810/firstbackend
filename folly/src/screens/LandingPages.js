import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import "./LandingPage.css"
const LandingPages = () => {
  return (
    <div className="main">
        <Container >
           <Row>
            <div className='intro-text'>
                <div>
                    <h1 className='title'>Welcome to folly note</h1>
                    <p className='subtitle'>one safe place for your note</p>
                </div>
            </div>
            <div className='buttonContainer'>
                <a href='/login'>
                    <Button size="lg" className="landingbutton">Login</Button>
                </a>
                <a href='/register'>
                    <Button size="lg" className="landingbutton" variant="outline-primary">Register</Button>
                </a>
            </div>
           </Row>

        </Container>
    </div>
  )
}

export default LandingPages
