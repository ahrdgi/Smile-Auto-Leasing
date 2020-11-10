import React, { Component } from 'react';
import './Error.css';
import icon404 from '../../assets/icon404.png';
import ferrari from '../../assets/ferrari.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

const StyledImg = styled.img`
            height: 100px;

            :hover {
                height: 120px;
            }

            transition: height 0.25s ease;
        `;
        
class Error extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-127765623-1');
        ReactGA.pageview('/404');
    }

    render() {
        return(
            <div className="Error">
                <div className="ErrorMessage">
                    <div className="ErrorContainer">
                        <img src={icon404} alt="Error 404" height="100vh"/>
                        <h1 className="ErrorText"><strong>It looks like you're lost.</strong><br/>Don't worry, we gave you a<br/><strong>Ferrari</strong> to drive back home.<br/><strong>Click it.</strong></h1>
                        <Link to="/"><StyledImg src={ferrari}/></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Error;