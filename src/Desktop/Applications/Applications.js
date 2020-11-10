import React, {Component} from 'react';
import LazyHero from 'react-lazy-hero';
import { animateScroll as scroll} from 'react-scroll';
import bg1 from '../../assets/bg1.jpg';
import bg3 from '../../assets/bg3.jpg';
import personalIcon from '../../assets/clipboardP.png';
import businessIcon from '../../assets/clipboardY.png';
import simple from '../../assets/simple.png';
import quick from '../../assets/quick.png';
import Personal from '../Personal/Personal';
import Business from '../Business/Business';
import MetaTags from 'react-meta-tags';
import styled from 'styled-components';
import './Applications.css';
import ReactGA from 'react-ga';

const StyledSvg = styled.svg`
            fill: #3c3976;

            :hover {
                fill: #ffcf34;
            }

            transition: fill 0.25s ease;
        `;

class applications extends Component {
    constructor(props) {
        super(props);
        this.state={personalVisibility: "HIDDEN", businessVisibility: "HIDDEN",}
    }

    scrollToApplications = () => {
        scroll.scrollTo(990);
    }

    componentDidMount() {
        ReactGA.initialize('UA-127765623-1');
        ReactGA.pageview('/applications');

        window.scrollTo(0, 0);
      }

      setPersonalVisible = () => {
          this.setState({personalVisibility: "SHOWN", businessVisibility: "HIDDEN"});
      }
      unsetPersonalVisible = () => {
        this.setState({personalVisibility: "HIDDEN", businessVisibility: "HIDDEN"});
      }

      setBusinessVisible = () => {
        this.setState({personalVisibility: "HIDDEN", businessVisibility: "SHOWN"});
      }

      unsetBusinessVisible = () => {
        this.setState({personalVisibility: "HIDDEN", businessVisibility: "HIDDEN"});
      }

    render() {

        return (
            <div className="Applications">
                <MetaTags>
                    <title>Smile Auto Leasing | Credit Applications</title>
                    <meta id="meta-description" name="description" content="Submiting a credit application is quick and easy, we allow you to take advantage of our car leasing specials - Smile Auto Leasing (718) 682-3122"/>
                </MetaTags>
                <div className={this.state.personalVisibility}>
                    <Personal close={this.unsetPersonalVisible}/>
                </div>

                <div className={this.state.businessVisibility}>
                    <Business close={this.unsetBusinessVisible}/>
                </div>
                <LazyHero className="ApplicationsHeader" imageSrc={bg1} color="#1F1B28" opacity={0.7} minHeight="367px" parallaxOffset={50}>
                    <p className="Heading">CREDIT APPLICATIONS</p>
                    <p className="SubHeading">SUBMIT A CREDIT APPLICATION. PERSONAL OR BUSINESS.</p>
                    <p className="Description">Submit a credit application today to take advantage of our car leasing specials. Submitting a car lease application at Smile Auto Leasing is quick and simple. We get back into contact with you within one business day for your convenience. By filling out one credit application form, we are able to tell you which cars you are eligible to lease and the car lease specials you are qualified for.</p>
                </LazyHero>
                <div className="WhySubmit">
                    <div onClick={this.scrollToApplications} className="ApplicationsButton">
                        <StyledSvg preserveAspectRatio="xMidYMid meet" data-bbox="19 19 162 162" viewBox="19 19 162 162" height="45" width="45" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">
                            <g>
                                <path d="M136.6 82.1c-1.2-1.2-3.2-1.2-4.3 0L100 114.7 67.7 82.1c-1.2-1.2-3.2-1.2-4.3 0l-2.3 2.3c-1.2 1.2-1.2 3.2 0 4.3l36.6 36.6c1.2 1.2 3.2 1.2 4.3 0l2.3-2.3 34.6-34.6c1.2-1.2 1.2-3.2 0-4.3l-2.3-2z" data-color="1"></path>
                                <path d="M100 19c-44.7 0-81 36.3-81 81s36.3 81 81 81 81-36.3 81-81-36.3-81-81-81zm0 152.5c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5z" data-color="2"></path>
                            </g>
                        </StyledSvg>
                    </div>
                    <div className="ApplicationsWhyContainer">
                        <table className="ApplicationsWhyTable">
                            <tbody>
                                <tr>
                                    <td className="ApplicationsWhyImage"><img alt="simple" src={simple} width="85px"/></td>
                                    <td className="ApplicationsWhyImage"><img alt="quick" src={quick} width="56px"/></td>
                                </tr>
                                <tr>
                                    <td className="ApplicationsWhyTitle">SIMPLE</td>
                                    <td className="ApplicationsWhyTitle">QUICK</td>
                                </tr>
                                <tr>
                                    <td><p className="ApplicationsWhyDesc">Fill out one simple form and we will do the rest.</p></td>
                                    <td><p className="ApplicationsWhyDesc">We get back to you within one business day.</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="WhyHeading">FILL OUT A CREDIT APPLICATION TODAY</p>
                </div>
                    <LazyHero className="ApplicationsLinkBoxContainer" imageSrc={bg3} color="#ffffff" opacity={0} minHeight="778px" parallaxOffset={50}>
                        <div onClick={this.setPersonalVisible}className="ApplicationsLinkBox1">
                            <p className="ApplicationsLinkBox1Title">PERSONAL</p>
                            <img alt="pesronal" src={personalIcon} height="236px" className="ApplicationsLinkBoxImage"/>
                            <p className="ApplicationLinkBox1Description">You can lease a car from Smile Auto Leasing for a personal contract hire. This can serve as a cost-efficient way to access new vehicles without the normal associated value with owning it outright. Smile Auto Leasing offers fixed, low monthly payments for personal car leases. Some of the benefits to personal car leasing include driving a car with the latest technology, driving a higher priced and better-equipped vehicle, and not worrying about the fluctuations in the cars trade-in value.</p>
                        </div>
                        <div onClick={this.setBusinessVisible} className="ApplicationsLinkBox2">
                            <p className="ApplicationsLinkBox2Title">BUSINESS</p>
                            <img alt="business" src={businessIcon} height="236px" className="ApplicationsLinkBoxImage"/>
                            <p className="ApplicationsLinkBox2Description">A business contract hire is when your company leases at least one car for anywhere between one to five years, but usually only three years. Businesses can finance their vehicles with Smile Auto Leasing by applying a minimum down payment and an agreed mileage for the contract. There are many advantages for a business to lease a car, including write-offs on lease payments for company taxes, and portions of payment can be used as a business expense.</p>
                        </div>
                        <p className="ApplicationsLegal">As a locally owned and operated car leasing company in Brooklyn, New York, and serving the tri-state area, we are pleased to offer opportunities for people with a variety of credit scores. For any questions about our application form, personal car leasing, or business car leasing, please call (718) 682-3122.</p>
                    </LazyHero>
            </div>
        )
    }
};

export default applications;