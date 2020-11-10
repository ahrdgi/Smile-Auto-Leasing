import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './Subscribe.css';

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
            z-index: 5;
            fill: #ffcf34;

            :hover {
                background-color: #ffcf34;
                fill: #3c3976;
            }

            transition: background-color 0.25s ease, fill 0.25s ease;
        `;

        const StyledInput = styled.input`
            display: block;
            -webkit-appearance: none;
            appearance: none;
            -moz-appearance: none;
            text-align: center;
            justify-content: center;
            width: 110px;
            height: 40px;
            border: none;
            border-radius: 5px;
            background-color: #3c3976;
            color: #ffcf34;
            font-size: 18px;
            font-weight: 700;
            vertical-align: middle;
            margin-left: auto;
            margin-right: auto;
            margin-top: 10px;
            padding: 0;

            :hover {
                color: #3c3976;
                background-color: #ffcf34;
            }

            transition: color 0.25s ease, background-color 0.25s ease;
        `;

class Subscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            formVis: 'SHOWN',
            thankVis: 'HIDDEN',
        };
    }

    submitHandler = (event) => {
        event.preventDefault();
        
        let formData = new FormData();
        formData.append('email', this.state.email);

        axios({
            method: 'post',
            url: '/api/subscribe.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data'}}
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            console.log(response);
        })

        this.setState({formVis: 'HIDDEN', thankVis: 'SHOWN'});
    }

    render() {
        return (
            <div>
                <div className="MobileSubscribeBackground"/>
                <div className="MobileSubscribeContainer">
                    <StyledButton onClick={this.props.close} xmlns="http://www.w3.org/2000/svg" version="1.1" className="MobileQuoteLightboxCloseButton">
                        <svg viewBox="0 0 20 20" className="MobileQuoteCloseIcon">
                            <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                        </svg>
                    </StyledButton>
                    <div className="MobileSubscribeContent">
                        <p className="MobileSubscribeTitle">Subscribe to our newsletter so you never miss a deal:</p>
                        <div className={this.state.thankVis}>
                            <p className="MobileThanksText">Thanks for subscribing! You may close this box now.</p>
                        </div>
                        <div className={this.state.formVis}>
                            <form className="MobileSubscribeForm">
                                <p className="MobileSubscribeLabel">E-mail Address</p>
                                <input key="1" className="MobileSubscribeInput" type="text" name="email" value={this.state.email} onChange={e=>this.setState({email: e.target.value})}/>
                                <StyledInput type="submit" value="Subscribe" onClick={e=> {this.submitHandler(e);}}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Subscribe;