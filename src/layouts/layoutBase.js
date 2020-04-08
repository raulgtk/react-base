import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LayoutBase = ({ children }) => (
  <div id="app">
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="/">React App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Container fluid>{children}</Container>
  </div>
)
export default LayoutBase