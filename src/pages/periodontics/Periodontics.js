import React, { Component } from 'react';
import { connect } from "react-redux";
import './Periodontics.scss';
import Heading from '../../components/heading/Heading';
import Slider from '../../components/image-slider/Slider';
import { createContentParagraphs, createCollapsableContent } from '../../utilities';

const mapStateToProps = (state) => {
    return {
        periodonticsPage: state.pages[1]
    };
}

class Periodontics extends Component {

    render() {
        return (
            <div className='wrapper'>
                <Heading heading={this.props.periodonticsPage.name} />
                <div className='main-container-periodontics pt-lg-5'>
                    <div className='container'>
                        <Slider images={this.props.periodonticsPage.decorativePhotos} />
                        {createContentParagraphs(this.props.periodonticsPage.content)}
                        {createCollapsableContent(this.props.periodonticsPage.collapsableContent)}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Periodontics);