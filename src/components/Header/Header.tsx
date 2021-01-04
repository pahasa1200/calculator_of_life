import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import './Header.scss'

type PropsType = {}
const Header: React.FC<PropsType> = () => {
    return (
        <>
            <header>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand><NavLink to="/home">Important-things</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><NavLink to="/savingsCalculator">Savings Calculator</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/loanCalculator">Loan Calculator</NavLink></Nav.Link>
                            {/*<Nav.Link><NavLink to="/savingsCalculator">Savings Calculator</NavLink></Nav.Link>*/}
                            {/*<Nav.Link><NavLink to="/savingsCalculator">Savings Calculator</NavLink></Nav.Link>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </>
    )
}

export default Header