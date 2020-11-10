import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './TradeOrTerminate.css';

const StyledButton = styled.button`
        background-color: #ffcf34;
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
        fill: #3c3976;

        :hover {
            background-color: #3c3976;
            fill: #ffcf34;
        }

        transition: background-color 0.25s ease, fill 0.25s ease;
    `;

const tradeorterminate = (props) => {
    return (
        <div>
                <div className="LightboxBackground"/>
                <div className="Lightbox">
                    <StyledButton onClick={props.close} className="LightboxClose">
                        <svg className="LightboxCloseIcon" viewBox="0 0 20 20">
                            <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                        </svg>
                    </StyledButton>
                    <span className="LightboxText">Get rid of your old vehicle to get a new, better one:</span>
                    
                    <Link to="/trade-in" className="TradeOrTerminateBox1">
                        <span className="LightboxLink1">TRADE IN YOUR CAR</span>
                        <svg viewBox="0 0 20 20" className="LinkArrow">
                            <path fill="#3c3976" d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"></path>
                        </svg>
                    </Link>

                    <Link to="/lease-termination" className="TradeOrTerminateBox2">
                        <span className="LightboxLink2">TERMINATE YOUR LEASE</span>
                        <svg viewBox="0 0 20 20" className="LinkArrow">
                            <path fill="#ffcf34" d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"></path>
                        </svg>
                    </Link>
                </div>
        </div>
    );
}

export default tradeorterminate;