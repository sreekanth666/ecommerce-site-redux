import React from 'react'
import {Navbar, Container, Nav, Button, Badge} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Navbar expand="lg" className="bg-primary" style={{position:"sticky", top:"0", zIndex: "1000"}}>
            <Container>
                <Navbar.Brand><Link to={'/'} style={{textDecoration: "none", fontWeight:"bold", fontSize:"2rem"}} className='text-secondary'><i class="fa-brands fa-opencart"></i> eKart</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link><Link to={'/cart'} style={{textDecoration: "none"}} className='text-dark'>
                            <Button variant="secondary">
                                Cart <Badge bg="success">9</Badge>
                                <span className="visually-hidden">Shopping Cart</span>
                            </Button>
                        </Link></Nav.Link>
                        <Nav.Link><Link to={'/wishlist'} style={{textDecoration: "none"}} className='text-dark'>
                            <Button variant="secondary">
                                Wishlist <Badge bg="success">9</Badge>
                                <span className="visually-hidden">Shopping Wishlist</span>
                            </Button>
                        </Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header