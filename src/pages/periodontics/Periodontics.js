import React, { Component } from 'react';
import { connect } from "react-redux";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import './Periodontics.scss';

const mapStateToProps = (state) => {
    return {
        periodonticsPage: state.pages[1]
    };
}

class Periodontics extends Component {

    createContent() {
        const content = this.props.periodonticsPage.content;
        return (
            content.map(c => {
                return (
                    <div className='content-container' key={Math.random()}>
                        <div className='heading'>
                            <h2>
                                {c.title}
                            </h2>
                        </div>
                        <div className='texts'>
                            {c.texts.map(t => {
                                return (
                                    <p key={Math.random()}>
                                        {t}
                                    </p>
                                )
                            })}
                        </div>
                        {
                            c.links.length > 0 &&
                            <div className='links'>
                                {c.links.map(link => {
                                    return (
                                        <p key={Math.random()}>
                                            <a href={link}>{link}</a>
                                        </p>
                                    );
                                })}
                            </div>
                        }
                        {
                            c.images.length > 0 &&
                            <div className='images'>
                                {c.images.map(image => {
                                    return (
                                        <img src={image} alt={image} className='img-fluid' key={Math.random()} />
                                    )
                                })}
                            </div>
                        }
                    </div>
                )
            })
        );
    }

    createCollapsableContent() {
        const content = this.props.periodonticsPage.collapsableContent;
        return content.map(c => {
            return (
                <div className='content-container' key={Math.random()} >
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <h6>{c.title}</h6>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <div className='texts'>
                                        {c.texts.map(text => {
                                            return (
                                                <p key={Math.random()} >
                                                    {text}
                                                </p>
                                            )
                                        })}
                                    </div>
                                    {
                                        c.links.length > 0 &&
                                        <div className='links'>
                                            {c.links.map(link => {
                                                return (
                                                    <p key={Math.random()}>
                                                        <a href={link}>{link}</a>
                                                    </p>
                                                );
                                            })}
                                        </div>
                                    }
                                    {
                                        c.images.length > 0 &&
                                        <div className='images'>
                                            {c.images.map(image => {
                                                return (
                                                    <img src={image} alt={image} className='img-fluid' key={Math.random()} />
                                                )
                                            })}
                                        </div>
                                    }
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <br />
                </div>
            );
        });
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='main-heading' style={{ backgroundImage: 'url(foggy-birds.png)' }}>
                    <h1>
                        {this.props.periodonticsPage.name}
                    </h1>
                </div>
                <div className='main-container-periodontics pt-lg-5'>
                    <div className='container'>
                        {this.createContent()}
                        {this.createCollapsableContent()}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Periodontics);