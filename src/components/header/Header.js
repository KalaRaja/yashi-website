import React, { Component } from 'react';
import './Header.scss';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import Logo from './logo';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        pages: state.pages
    };
}

class Header extends Component {

    createMenu() {
        const pages = this.props.pages;
        return pages.map(page => {
            return (
            <Nav.Link key={Math.random()} href={page.link}>{page.name}</Nav.Link>
            );
        });
    }

    render() {
        return (
            <Navbar bg="light" expand="lg" className='header'>
                <Navbar.Brand href="#home">
                    <div className='container'>
                        <Logo />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className='container'>
                        <Nav className="mr-auto">
                            {this.createMenu()}
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default connect(mapStateToProps)(Header);