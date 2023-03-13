import React from 'react'
import {Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        {/* <div className='Container'> */}
         <Navbar bg="primary" expand="lg" variant='dark'>
      <Container >
        <Navbar.Brand><Link to="/">folly</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav l > 
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
            </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home"><Link to="/note">My Note</Link></Nav.Link>
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
            <NavDropdown title="folly" id="navbarScrollingDropdown">
              {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item> */}
              <NavDropdown.Item href="#action4">
                my profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                log out
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
        </Navbar>
    {/* </div> */}

    </div>
  )
}

export default Header
