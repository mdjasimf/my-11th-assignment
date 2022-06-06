import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    }
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">FRUITS WAREHOUSES</Navbar.Brand>
                <div className='d-flex justify-content-left'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            {
                                user ?
                                    <>
                                        <Nav.Link as={Link} to="/manageInventory">Manage Item</Nav.Link>
                                        <Nav.Link as={Link} to="/addNewItem">Add Item</Nav.Link>
                                        <Nav.Link as={Link} to="/myitems">My Item</Nav.Link>
                                        <Nav.Link onClick={logOut} as={Link} to="/login">Logout</Nav.Link>
                                    </> :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar >
    );
};

export default Header;