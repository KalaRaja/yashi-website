import React, { Component } from 'react';
import { connect } from "react-redux";
import './Visit.scss';
import Heading from '../../components/heading/Heading';
import Slider from '../../components/image-slider/Slider';
import { createContentParagraphs } from '../../utilities';

const mapStateToProps = (state) => {
    return {
        visitPage: state.pages[5]
    };
}

class Visit extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Heading heading={this.props.visitPage.name} />
                <div className='main-container-visit pt-lg-5'>
                    <div className='container'>
                        <Slider images={this.props.visitPage.decorativePhotos} />
                        {createContentParagraphs(this.props.visitPage.content)}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Visit);
