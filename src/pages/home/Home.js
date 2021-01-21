import React, { Component } from 'react';
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './Home.scss';
import Slider from '../../components/image-slider/Slider';

const mapStateToProps = (state) => {
    return {
        homepage: state.pages[0]
    };
}

class Home extends Component {

    createCard() {
        const descriptionLines = this.props.homepage.content.description;
        const phones = this.props.homepage.content.contact.phones;
        const emails = this.props.homepage.content.contact.emails;
        const socialMedia = this.props.homepage.content.socialMedia;
        return (
            <Card>
                <Card.Body>
                    <Card.Text>
                        {descriptionLines.map(d => {
                            return (
                                <span key={Math.random()}> <br />{d} <br /> </span>
                            )
                        })}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush phones">
                    <ListGroupItem className='icon'><img src={this.props.homepage.content.phoneIcon} alt='phone'></img></ListGroupItem>
                    <ListGroupItem>
                        <ListGroup className="list-group-flush">

                            {phones.map(p => {
                                return (
                                    <ListGroupItem key={Math.random()}>{p}</ListGroupItem>
                                )
                            })}
                        </ListGroup>

                    </ListGroupItem>
                </ListGroup>
                <ListGroup className="list-group-flush emails">
                    <ListGroupItem className='icon'><img src={this.props.homepage.content.emailIcon} alt='email'></img></ListGroupItem>
                    <ListGroupItem>
                        <ListGroup className="list-group-flush">

                            {emails.map(e => {
                                return (
                                    <ListGroupItem key={Math.random()}>{e}</ListGroupItem>
                                )
                            })}
                        </ListGroup>

                    </ListGroupItem>
                </ListGroup>
                <Card.Body className='social'>
                    {socialMedia.map(s => {
                        return (
                            <div className='social-container' key={Math.random()}>
                                <Card.Link href={s.link}>
                                    <img src={s.icon} alt={s.name}></img>
                                </Card.Link>
                                <Card.Link href={s.link}>
                                    {s.link}
                                </Card.Link>
                            </div>
                        )
                    })}
                </Card.Body>
            </Card>
        );
    }

    render() {
        return (
            <div className='main-container pt-lg-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='profile col-lg-6'>
                            <Slider images={this.props.homepage.profilePhotos} />
                        </div>
                        <div className='content col-lg-6'>
                            {this.createCard()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Home);