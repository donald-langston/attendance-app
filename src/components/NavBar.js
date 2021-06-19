import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';

function AppNavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Attendance App</Navbar.Brand>
                <Nav className="mr-auto">
                <Link to="/">Home</Link>
                </Nav>
            </Navbar>
        </div>
    )

}

export default AppNavBar;