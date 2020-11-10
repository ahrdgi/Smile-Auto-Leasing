import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import LazyHero from 'react-lazy-hero';
import bg1 from '../../assets/bg1.jpg';
import './TradeIn.css';
import ReactGA from 'react-ga';

class TradeIn extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-127765623-1');
        ReactGA.pageview('/lease-termination');

        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="MobileTradeIn">
                <MetaTags>
                    <title>Smile Auto Leasing | Vehicle Trade In Value</title>
                    <meta id="meta-description" name="description" content="Trading in your car for another vehicle is optimal to save you time and money - Smile Auto Leasing (718) 682-3122"/>
                </MetaTags>
                <LazyHero className="MobileApplicationsHeader" imageSrc={bg1} color="#1F1B28" opacity={0.7} minHeight="230px" parallaxOffset={50}>
                    <p className="MobileHeading">TRADE-IN YOUR CAR</p>
                    <p className="MobileSubHeading">OUR TRADE-IN PROGRAM GETS YOU THE BEST DEAL FOR YOUR AUTO.</p>
                    <p className="MobileDescription">A leased car is another way to finance your vehicle, and trading in your vehicle for another one is the optimal choice because it can be a cost-effective and time-efficient way to obtain a new car. We are pleased to advocate or recommend a variety of options available to you to know your vehicle trade-in value.</p>
                </LazyHero>
                <div className="MobileTradeInBackground">
                    <div className="MobileTradeInDetails">
                        <p className="MobileTradeInDetailsHeading">Trade-In Appraisal</p>
                        <p className="MobileTradeInDetailsDescription">At Smile Auto Leasing, the trade-in process can be done quickly and easily to save you time and money. The trade-in appraisal allows Smile Auto Leasing to determine the market value of your vehicle. Once we have determined your vehicles trade-in value, we can move to the next step in our process by having you fill out the trade-in form. If there is a negative equity on a financed car and you would like to trade-in for a cheaper vehicle, there are two options to choose from. The first is you pay the difference out of pocket, or you can ask Smile Auto Leasing if the amount can be rolled over into the new loan.</p>
                        <p className="MobileTradeInDetailsHeading">Trade-In Form</p>
                        <p className="MobileTradeInDetailsDescription">If you are currently leasing a car, your lease contract will have a payoff value, which is the current cost to terminate the lease. When you trade-in your leased car to us, we can pay off the lease, then the cost of the payoff goes against the trade-in value of your leased vehicle.</p>
                    </div>
    
                    <div className="MobileTradeInFormContainer">
                        <iframe title="tradein" width="90%" className="MobileTradeInForm" src="https://www.123formbuilder.com/my-contact-form-4521326.html"/>
                    </div>
                    <div className="MobileTradeInLegal">
                        <p>By inputting your vehicle trade-in application, Smile Auto Leasing can assist you in determining how much your vehicles trade-in value is.<br/><br/>Located in Brooklyn, New York, and serving the tri-state area including Connecticut, New Jersey, and New York. Smile Auto Leasing can assist you in a variety of your car leasing needs. For any inquiry regarding our vehicle trade-in process, please call Smile Auto Leasing at (718)-682-3122.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TradeIn;