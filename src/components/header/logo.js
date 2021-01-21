import React, { Component } from 'react';
import { connect } from "react-redux";
import './Logo.scss';


const mapStateToProps = (state) => {
    return {
        logo: state.header
    };
}

class Logo extends Component {

    title() {
        return (
            <div className='title'>
                {this.props.logo.title}.
            </div>
        );
    }

    firstName() {
        return (
            <div className='firstname'>
                {this.props.logo.firstName}
            </div>
        );
    }

    lastName() {
        return (
            <div className='lastname'>
                {this.props.logo.lastName}
            </div>
        );
    }

    degree() {
        return (
            <div className='degree'>
                {this.props.logo.degree}
            </div>
        );
    }

    speciality() {
        return (
            <div className='speciality'>
                {this.props.logo.speciality}
            </div>
        );
    }


    render() {
        console.log(this.props, process.env.PUBLIC_URL + '/' + this.props.logo.logo);
        return (
            <div className='logo'>
                <div className="title-name">
                    <div className='title-container'>
                        {this.title()}
                    </div>
                    <div className='name'>
                        {this.firstName()}
                        {this.lastName()}
                    </div>
                </div>
                <div className='degree-spec'>
                    {this.degree()}
                    {this.speciality()}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Logo);