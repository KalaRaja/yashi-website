import React, { Component } from 'react';
import './Heading.scss';

export default class Heading extends Component {
    render() {
        return (
            <div className='main-heading' style={{ backgroundImage: 'url(foggy-birds.png)' }}>
                <h1>
                    {this.props.heading}
                </h1>
            </div>
        );
    }
}
