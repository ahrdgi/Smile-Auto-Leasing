import React, { Component } from 'react';
import styled from 'styled-components';
import { configureAnchors } from 'react-scrollable-anchor';
import Subscribe from '../Subscribe/Subscribe';
import './Footer.css';

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
            margin-bottom: 15px;

            :hover {
                background-color: #3c3976;
                color: #ffcf34;
            }

            transition: background-color 0.25s ease, color 0.25s ease;
        `;

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state=({
            subVisibility: 'HIDDEN'
        });
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
            <div className="MobileFooter">
                <div className={this.state.subVisibility}>
                    <Subscribe close={this.closeHandler}/>
                </div>
                <div className="MobileFooterTitleContainer">
                    <p className="MobileFooterTitle">CONTACT SMILE & DRIVE A NEW CAR TODAY</p>
                    <p className="MobileFooterSubTitle">Smile is a car leasing company that is dedicated to providing exceptional customer service & quality vehicles to lease. For any questions regarding our lease specials, deals, & agreements, do not hesitate to call us at (718) 682-3122.<br/><br/>We're a team of car leasing professionals that look forward to being the car dealer you choose.</p>
                </div>
                <div className="MobileContactLinksContainer">
                    <div className="MobileContactLinks">
                        <a href="mailto:info@smileautoleasing.com?Subject=Leasing%20Inquiry" target="_top" className="MobileEmail">
                            <svg viewBox="0 0 20 20" fill="#a9a9a9" width="30px">
                                <path d="M16.999,4.975L16.999,4.975C16.999,4.975,16.999,4.975,16.999,4.975c-0.419-0.4-0.979-0.654-1.604-0.654H4.606c-0.584,0-1.104,0.236-1.514,0.593C3.076,4.928,3.05,4.925,3.037,4.943C3.034,4.945,3.035,4.95,3.032,4.953C2.574,5.379,2.276,5.975,2.276,6.649v6.702c0,1.285,1.045,2.329,2.33,2.329h10.79c1.285,0,2.328-1.044,2.328-2.329V6.649C17.724,5.989,17.441,5.399,16.999,4.975z M15.396,5.356c0.098,0,0.183,0.035,0.273,0.055l-5.668,4.735L4.382,5.401c0.075-0.014,0.145-0.045,0.224-0.045H15.396z M16.688,13.351c0,0.712-0.581,1.294-1.293,1.294H4.606c-0.714,0-1.294-0.582-1.294-1.294V6.649c0-0.235,0.081-0.445,0.192-0.636l6.162,5.205c0.096,0.081,0.215,0.122,0.334,0.122c0.118,0,0.235-0.041,0.333-0.12l6.189-5.171c0.099,0.181,0.168,0.38,0.168,0.6V13.351z"></path>
                            </svg>
                            <p className="MobileEmailText">info@smileautoleasing.com</p>
                        </a>
                        <hr color="#605e5e" size="1"/>
                        <a href="https://goo.gl/maps/sa6an5h8RudVXHqYA" rel="noopener noreferrer" target="_blank" className="MobileMaps">
                            <svg fill="#a9a9a9" viewBox="0 0 20 20" width="30px">
                                <path d="M10.292,4.229c-1.487,0-2.691,1.205-2.691,2.691s1.205,2.691,2.691,2.691s2.69-1.205,2.69-2.691S11.779,4.229,10.292,4.229z M10.292,8.535c-0.892,0-1.615-0.723-1.615-1.615S9.4,5.306,10.292,5.306c0.891,0,1.614,0.722,1.614,1.614S11.184,8.535,10.292,8.535z M10.292,1C6.725,1,3.834,3.892,3.834,7.458c0,3.567,6.458,10.764,6.458,10.764s6.458-7.196,6.458-10.764C16.75,3.892,13.859,1,10.292,1z M4.91,7.525c0-3.009,2.41-5.449,5.382-5.449c2.971,0,5.381,2.44,5.381,5.449s-5.381,9.082-5.381,9.082S4.91,10.535,4.91,7.525z"></path>
                            </svg>
                            <p className="MobileMapsText">2110 Ave X, Brooklyn, NY, 11235</p>
                        </a>
                        <hr color="#605e5e" size="1"/>
                        <a href="tel:17186823122" className="MobilePhone">
                            <svg fill="#a9a9a9" viewBox="0 0 20 20" width="30px">
                                <path d="M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781 M13.794,16.955c0,0.228-0.194,0.421-0.422,0.421H6.628c-0.228,0-0.421-0.193-0.421-0.421v-0.843h7.587V16.955z M13.794,15.269H6.207V4.731h7.587V15.269z M13.794,3.888H6.207V3.045c0-0.228,0.194-0.421,0.421-0.421h6.744c0.228,0,0.422,0.194,0.422,0.421V3.888z"></path>
                            </svg>
                            <p className="MobilePhoneText">(718) 682-3122</p>
                        </a>
                    </div>
                </div>
                <br/>
                <div className="SocialLinks">
                    <StyledFB href="https://www.facebook.com/SmileAutoLeasing/" rel="noopener noreferrer" target="_blank">
                        <svg className="Facebook" viewBox="0 0 20 20" height="30px">
                            <path d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
                        </svg>
                    </StyledFB>
                    <StyledIN href="https://www.instagram.com/smileautoleasing/" rel="noopener noreferrer" target="_blank">
                        <svg className="Instagram" viewBox="0 0 200 200" height="30px">
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
                        <svg className="Twitter" viewBox="0 0 20 20" height="30px">
                            <path d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
                        </svg>
                    </StyledTW>
                </div>
                <NewsletterButton onClick={()=> this.setState({subVisibility: 'SHOWN'})}><p>Subscribe to our newsletter</p></NewsletterButton>
                <div className="MobileCopyright">
                    <hr className="MobileCopyrightDivider" color="#605e5e" size="1"/>
                    <p className="MobileCopyrightText">© 2018 by Smile Auto Leasing</p>
                </div>
            </div>
        );
    }
}

export default Footer;