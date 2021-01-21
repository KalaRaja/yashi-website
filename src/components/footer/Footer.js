import React, { Component } from 'react';
import './Footer.scss';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        pages: state.pages,
        copyrightText: state.header.copyrightText
    };
}

class Footer extends Component {

    createMenu() {
        const pages = this.props.pages;
        return pages.map(page => {
            return (
                <Nav.Link key={Math.random()} href={'#' + page.link}>{page.name}</Nav.Link>
            );
        });
    }

    render() {
        const copyrightText = this.props.copyrightText;

        return (
            <Navbar bg="light" className='footer'>
                <Nav className="mr-auto">
                    {this.createMenu()}
                </Nav>

                <div className='copyright'>
                    {copyrightText}
                </div>
            </Navbar>
        );
    }
}

export default connect(mapStateToProps)(Footer);