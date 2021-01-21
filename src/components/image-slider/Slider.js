import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.scss'
export default class Slider extends Component {

    render() {
        return (
            <div className='descriptive-photos-container'>
                {this.props.images && this.props.images.length > 0 && <Carousel>
                    {this.props.images.map(p => {
                        return (
                            <Carousel.Item key={Math.random()}>
                                <p>
                                    <img
                                        className="img-fluid fixed-height"
                                        src={p.photo}
                                        alt="First slide"
                                    />
                                </p>
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