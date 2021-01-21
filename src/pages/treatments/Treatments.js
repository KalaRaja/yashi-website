import React, { Component } from 'react';
import { connect } from "react-redux";
import './Treatments.scss';
import Heading from '../../components/heading/Heading';
import Slider from '../../components/image-slider/Slider';
import { createContentParagraphs } from '../../utilities';

const mapStateToProps = (state) => {
    return {
        treatmentsPage: state.pages[3]
    };
}

class Treatments extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Heading heading={this.props.treatmentsPage.name} />
                <div className='main-container-treatments pt-lg-5'>
                    <div className='container'>
                        <Slider images={this.props.treatmentsPage.decorativePhotos} />
                        {createContentParagraphs(this.props.treatmentsPage.content)}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Treatments);
