import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'gatsby'
import '../styles/Navbar.css'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src="https://www.dscsdmc.org/img/logo.png" alt="" />
                    DSC ADGITM</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/team">Team</Nav.Link>
                        <Button variant="success">Join Us</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent
