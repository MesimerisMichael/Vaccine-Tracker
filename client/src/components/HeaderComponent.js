import React, { Component ,Fragment} from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody, FormGroup, Form, Label, Input
} from 'reactstrap';
import { Link } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment >
                    <Navbar  dark expand="md" color="primary">
                        <div className="container">
                            <NavbarBrand href="/home">Vaccine Tracker</NavbarBrand>
                        </div>

                        <div className="coll-1 ">
                            <div className="navbar-nav mr-auto">
                                <a href="/login" className="btn btn-dark" >Login</a>
                            </div>
                        </div>

                        <div className="coll-1 ">
                            <div className="navbar-nav mr-auto">
                                <a href="/register" className="btn btn-dark">Register</a>
                            </div>
                        </div>
                    </Navbar>
            </Fragment >
        );
    }
}
export default Header;