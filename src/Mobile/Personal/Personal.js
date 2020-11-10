import React, { Component } from 'react';
import styled from 'styled-components';
import './Personal.css';

const StyledButton = styled.button`
            background-color: #3c3976;
            cursor: pointer;
            position: fixed;
            right: 0px;
            border: none;
            border-top-right-radius: 18px;
            border-bottom-left-radius: 20px;
            width: 45px;
            height: 45px;
            z-index: 4;
            fill: #ffcf34;

            :hover {
                background-color: #ffcf34;
                fill: #3c3976;
            }

            transition: background-color 0.25s ease, fill 0.25s ease;
        `;

class Personal extends Component {
    render() {
        return (
            <div>
                <div className="MobilePersonalBackground"/>
                <div className="MobilePersonalFormContainer">
                    <StyledButton onClick={this.props.close} className="PersonalLightboxCloseButton">
                        <svg className="MobilePersonalCloseIcon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                        </svg>
                    </StyledButton>
                    <iframe title="personal" width="90%" height="100%" className="MobilePersonalForm" src="https://www.123formbuilder.com/form-3319791/personal-credit-application"/>
                </div>
            </div>
        );
    }
};

export default Personal;