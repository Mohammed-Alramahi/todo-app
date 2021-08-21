import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import Auth from '../auth/signin';
function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link href="/" className="text-dark">Home</Nav.Link>
                            <Nav.Link href="/settings" className="text-dark">Settings</Nav.Link>
                        </Nav>
                        <Auth />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;