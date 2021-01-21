import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class Slider extends Component {

    render() {
        return (
            <div className='descriptive-photos-container'>
                {this.props.images && this.props.images.length > 0 && <Carousel>
                    {this.props.images.map(p => {
                        return (
                            <Carousel.Item key={Math.random()}>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={p.photo}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    {p.caption && <h3>{p.caption}</h3>}
                                    {p.description && <p>{p.description}</p>}
                                </Carousel.Caption>
                            </Carousel.Item>

                        )
                    })}
                </Carousel>}
            </div>
        );
    }
}