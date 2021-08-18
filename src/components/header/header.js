import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {

    return (
        <Navbar bg="primary" variant="dark">


            <Nav className="primary" defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}
export default Header;