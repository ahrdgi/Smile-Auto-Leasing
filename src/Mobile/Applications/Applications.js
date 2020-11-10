import React, { Component } from 'react';
import personalIcon from '../../assets/clipboardP.png';
import businessIcon from '../../assets/clipboardY.png';
import MetaTags from 'react-meta-tags';
import Personal from '../Personal/Personal';
import Business from '../Business/Business';
import LazyHero from 'react-lazy-hero';
import bg1 from '../../assets/bg1.jpg';
import bg3 from '../../assets/bg3.jpg';
import simple from '../../assets/simple.png';
import quick from '../../assets/quick.png';
import './Applications.css';
import ReactGA from 'react-ga';

class Applications extends Component {
    constructor(props) {
        super(props);

        this.state={
            personalVis: 'HIDDEN',
            businessVis: 'HIDDEN',
        };
    }

    componentDidMount() {
        ReactGA.initialize('UA-127765623-1');
        ReactGA.pageview('/applications');
        
        window.scrollTo(0,0);
    }

    setPersonalVis = () => {
        this.setState({personalVis: 'SHOWN'});
    }

    setBusinessVis = () => {
        this.setState({businessVis: 'SHOWN'});
    }

    unsetPersonalVis = () => {
        this.setState({personalVis: 'HIDDEN'});
    }

    unsetBusinessVis = () => {
        this.setState({businessVis: 'HIDDEN'});
    }

    render() {
        return(
            <div className="MobileApplications">
                <MetaTags>
                    <title>Smile Auto Leasing | Credit Applications</title>
                    <meta id="meta-description" name="description" content="Submiting a credit application is quick and easy, we allow you to take advantage of our car leasing specials - Smile Auto Leasing (718) 682-3122"/>
                </MetaTags>
                <div className={this.state.personalVis}>
                    <Personal close={this.unsetPersonalVis}/>
                </div>
                <div className={this.state.businessVis}>
                    <Business close={this.unsetBusinessVis}/>
                </div>
                <LazyHero className="MobileApplicationsHeader" imageSrc={bg1} color="#1F1B28" opacity={0.7} minHeight="230px" parallaxOffset={50}>
                    <p className="MobileHeading">CREDIT APPLICATIONS</p>
                    <p className="MobileSubHeading">SUBMIT A CREDIT APPLICATION. PERSONAL OR BUSINESS.</p>
                    <p className="MobileDescription">Submit a credit application today to take advantage of our car leasing specials. Submitting a car lease application at Smile Auto Leasing is quick and simple. We get back into contact with you within one business day for your convenience. By filling out one credit application form, we are able to tell you which cars you are eligible to lease and the car lease specials you are qualified for.</p>
                </LazyHero>
                <div className="MobileApplicationsWhyContainer">
                    <table className="MobileApplicationsWhyTable">
                        <tbody>
                            <tr>
                                <td className="MobileApplicationsWhyImage"><img alt="simple" src={simple} width="85px"/></td>
                                <td className="MobileApplicationsWhyImage"><img alt="quick" src={quick} width="56px"/></td>
                            </tr>
                            <tr>
                                <td className="MobileApplicationsWhyTitle">SIMPLE</td>
                                <td className="MobileApplicationsWhyTitle">QUICK</td>
                            </tr>
                            <tr>
                                <td><p className="MobileApplicationsWhyDesc">Fill out one simple form and we will do the rest.</p></td>
                                <td><p className="MobileApplicationsWhyDesc">We get back to you within one business day.</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="MobileAppHeading">FILL OUT A CREDIT APPLICATION TODAY</div>
                <LazyHero className="MobileApplicationsLinkBoxContainer" imageSrc={bg3} color="#ffffff" opacity={0} minHeight="250px" parallaxOffset={50}/>
                <div className="MobileAppButtons">
                    <div className="MobilePersonalButton" onClick={this.setPersonalVis}>
                        <p className="MobilePersonalText">PERSONAL</p>
                        <img alt="business" src={personalIcon} height="100px" className="MobilePersonalImage"/>
                    </div>

                    <div className="MobileBusinessButton" onClick={this.setBusinessVis}>
                    <p className="MobileBusinessText">BUSINESS</p>
                    <img alt="business" src={businessIcon} height="100px" className="MobileBusinessImage"/>
                    </div>
                </div>
                <p className="MobileApplicationsLegal">As a locally owned and operated car leasing company in Brooklyn, New York, and serving the tri-state area, we are pleased to offer opportunities for people with a variety of credit scores. For any questions about our application form, personal car leasing, or business car leasing, please call (718) 682-3122.</p>
            </div>
        );
    }
}

export default Applications;