import React, { Component } from 'react';
import { connect } from "react-redux";
import './Faqs.scss';
import Heading from '../../components/heading/Heading';
import Slider from '../../components/image-slider/Slider';
import { createCollapsableContent } from '../../utilities';

const mapStateToProps = (state) => {
    return {
        faqsPage: state.pages[4]
    };
}

class Faqs extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Heading heading={this.props.faqsPage.name} />
                <div className='main-container-faqs pt-lg-5'>
                    <div className='container'>
                        <Slider images={this.props.faqsPage.decorativePhotos} />
                        {createCollapsableContent(this.props.faqsPage.content)}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Faqs);
