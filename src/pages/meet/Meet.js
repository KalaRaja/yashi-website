import React, { Component } from 'react';
import { connect } from "react-redux";
import './Meet.scss';
import Heading from '../../components/heading/Heading';
import Slider from '../../components/image-slider/Slider';
import { createContentParagraphs } from '../../utilities';

const mapStateToProps = (state) => {
    return {
        meetPage: state.pages[2]
    };
}

class Meet extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Heading heading={this.props.meetPage.name} />
                <div className='main-container-meet pt-lg-5'>
                    <div className='container'>
                        <Slider images={this.props.meetPage.decorativePhotos} />
                        {createContentParagraphs(this.props.meetPage.content)}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Meet);
