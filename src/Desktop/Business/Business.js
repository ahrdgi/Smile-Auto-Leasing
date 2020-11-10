import React, {Component} from 'react';
import styled from 'styled-components';
import './Business.css';

const StyledButton = styled.button`
            background-color: #3c3976;
            cursor: pointer;
            position: fixed;
            right: 0px;
            border: none;
            border-top-right-radius: 18px;
            border-bottom-left-radius: 20px;
            font-size: 24px;
            font-weight: 700;
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

class Business extends Component {
    render() {

        return (
            <div>
                <div className="BusinessLightboxBackground"/>
                <div className="BusinessFormContainer">
                    <StyledButton onClick={this.props.close} className="BusinessLightboxCloseButton">
                        <svg className="BusinessLightboxCloseIcon" viewBox="0 0 20 20">
                            <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                        </svg>
                    </StyledButton>
                    <iframe title="business" width="640px" height="100%" className="BusinessForm" src="https://www.123formbuilder.com/form-4521238/business-credit-application"/>
                </div>
            </div>
        )
    }
};

export default Business;