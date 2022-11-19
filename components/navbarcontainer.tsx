/****************** 
 By:                Callum Clegg

 Last Updated:      18/11/12
 Desc:              This file creates a navbar component
                    for the webapp.
******************/

import React from 'react'

// Bootstap
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.css';

type Props = {
    onAboutClick: () => void
    onHomeClick: () => void
    onFreqClick: () => void
}

export function NavBarContainer(props: Props)
{
    return (
        <Navbar bg="light" expand="lg" fixed='top'>
            <Container>

                <Navbar.Brand href="#home" onClick={props.onHomeClick}>Enhanced Interiors</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                    <Nav.Link href="#about" onClick={props.onAboutClick}>About</Nav.Link>
                    <Nav.Link href="#FAQ" onClick={props.onFreqClick}>F&Q</Nav.Link>

                    <NavDropdown title="Contacts" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#number">Telephone: +44 8938473038</NavDropdown.Item>
                        <NavDropdown.Item href="#address">
                            55, stStreet, City
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#postcode">NR24 8HL</NavDropdown.Item>
                    </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}

export default NavBarContainer;