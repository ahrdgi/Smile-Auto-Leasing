import React, { Component } from 'react';
import { configureAnchors } from 'react-scrollable-anchor';
import Subscribe from '../Subscribe/Subscribe';
import styled from 'styled-components';
import './Footer.css';

const NewsletterButton = styled.div`
            display: inline-block;
            background-color: #ffcf34;
            color: #3c3976;
            font-size: 19px;
            width: 250px;
            height: 64px;
            border-radius: 10px;
            margin-top: 25px;
            font-weight: 700;
            cursor: pointer;

            :hover {
                background-color: #3c3976;
                color: #ffcf34;
            }

            transition: background-color 0.25s ease, color 0.25s ease;
        `;

        const StyledFB = styled.a`
            fill: #adadad;

            :hover {
                fill: #3b5998;
            }

            transition: fill 0.25s ease;
        `;

        const StyledIN = styled.a`
            fill: #adadad;

            :hover {
                fill: #ffffff;
            }

            transition: fill 0.25s ease;
        `;

        const StyledTW = styled.a`
            fill: #adadad;
            
            :hover {
                fill: #1da1f2;
            }

            transition: fill 0.25s ease;
        `;

class footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subVisibility: 'HIDDEN',
        }
    }

    componentDidMount() {
        let visited = localStorage["alreadyVisited"];
        if(visited) {
             this.setState({ subVisibility: 'HIDDEN' });
             //do not view Popup
        } else {
             localStorage["alreadyVisited"] = true;
             this.setState({ subVisibility: 'SHOWN' });
        }
    }

    closeHandler = () => {
        this.setState({ subVisibility: 'HIDDEN' });
    }

    render() {
        configureAnchors({scrollDuration: 1500});

        return (
            <div className="Footer">
                <div className={this.state.subVisibility}>
                    <Subscribe close={this.closeHandler}/>
                </div>
                <p className="FooterTitle">CONTACT SMILE AUTO LEASING AND DRIVE AWAY WITH YOUR NEW CAR</p>
                <p className="FooterSubText">Smile Auto Leasing is a car leasing company that is dedicated to providing exceptional one-on-one customer service and quality vehicles available to lease. For any questions regarding our car lease specials, lease deals, and lease agreements please do not hesitate to call us at (718) 682-3122.<br/><br/>We are a team of car leasing professionals that look forward to being the car leasing company you choose.</p>
                <div className="ContactLinks">
                    <div className="ContactLink1">
                        <a href="mailto:info@smileautoleasing.com?Subject=Leasing%20Inquiry" target="_top">
                            <svg viewBox="0 0 20 20" fill="#adadad" height="45px">
                                <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
                            </svg>
                            <p className="ContactLinkText">info@smileautoleasing.com</p>
                        </a>
                    </div>

                    <div className="ContactLink2">
                        <a href="https://goo.gl/maps/sa6an5h8RudVXHqYA" rel="noopener noreferrer" target="_blank">
                            <svg viewBox="0 0 20 20" fill="#adadad" height="45px">
                                <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
                            </svg>
                            <p className="ContactLinkText">2110 Ave X, Brooklyn, NY 11235</p>
                        </a>
                    </div>

                    <div className="ContactLink3">
                        <a href="tel:17186823122">
                            <svg viewBox="0 0 20 20" fill="#adadad" height="45px">
                                <path d="M10,15.654c-0.417,0-0.754,0.338-0.754,0.754S9.583,17.162,10,17.162s0.754-0.338,0.754-0.754S10.417,15.654,10,15.654z M14.523,1.33H5.477c-0.833,0-1.508,0.675-1.508,1.508v14.324c0,0.833,0.675,1.508,1.508,1.508h9.047c0.833,0,1.508-0.675,1.508-1.508V2.838C16.031,2.005,15.356,1.33,14.523,1.33z M15.277,17.162c0,0.416-0.338,0.754-0.754,0.754H5.477c-0.417,0-0.754-0.338-0.754-0.754V2.838c0-0.417,0.337-0.754,0.754-0.754h9.047c0.416,0,0.754,0.337,0.754,0.754V17.162zM13.77,2.838H6.23c-0.417,0-0.754,0.337-0.754,0.754v10.555c0,0.416,0.337,0.754,0.754,0.754h7.539c0.416,0,0.754-0.338,0.754-0.754V3.592C14.523,3.175,14.186,2.838,13.77,2.838z M13.77,13.77c0,0.208-0.169,0.377-0.377,0.377H6.607c-0.208,0-0.377-0.169-0.377-0.377V3.969c0-0.208,0.169-0.377,0.377-0.377h6.785c0.208,0,0.377,0.169,0.377,0.377V13.77z"></path>
                            </svg>
                            <p className="ContactLinkText">(718) 682-3122</p>
                        </a>
                    </div>
                </div>

                <div className="SocialLinks">
                    <StyledFB href="https://www.facebook.com/SmileAutoLeasing/" rel="noopener noreferrer" target="_blank">
                        <svg className="Facebook" viewBox="0 0 20 20" height="37px">
                            <path d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
                        </svg>
                    </StyledFB>

                    <StyledIN href="https://www.instagram.com/smileautoleasing/" rel="noopener noreferrer" target="_blank">
                        <svg className="Instagram" viewBox="0 0 200 200" height="37px">
                            <g>
                                <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
                                    c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
                                    c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
                                    c17.455,0,31.656,14.201,31.656,31.655V122.407z"/>
                                <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
                                    C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
                                    c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"/>
                                <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
                                    c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
                                    C135.661,29.421,132.821,28.251,129.921,28.251z"/>
                            </g>
                        </svg>
                    </StyledIN>

                    <StyledTW href="https://twitter.com/smile_leasing" rel="noopener noreferrer" target="_blank">
                        <svg className="Twitter" viewBox="0 0 20 20" height="37px">
                            <path d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
                        </svg>
                    </StyledTW>
                </div>

                <NewsletterButton onClick={()=> this.setState({subVisibility: 'SHOWN'})}><p>Subscribe to our newsletter</p></NewsletterButton>

                <div className="Copyright">
                    <hr className="CopyrightDivider" color="#605e5e" size="1"/>
                    <p className="CopyrightText">© 2018 by Smile Auto Leasing</p>
                </div>
            </div>
        )
    }
};

export default footer;