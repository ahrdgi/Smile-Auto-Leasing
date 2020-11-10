import React, { Component } from 'react';
import bg1 from '../../assets/bg1.jpg';
import bg2 from '../../assets/bg2.jpg';
import LazyHero from 'react-lazy-hero';
import MetaTags from 'react-meta-tags';
import './TradeIn.css'
import ReactGA from 'react-ga';

class TradeIn extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-127765623-1');
        ReactGA.pageview('/trade-in');
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <MetaTags>
                    <title>Smile Auto Leasing | Vehicle Trade In Value</title>
                    <meta id="meta-description" name="description" content="Trading in your car for another vehicle is optimal to save you time and money - Smile Auto Leasing (718) 682-3122"/>
                </MetaTags>
                <LazyHero imageSrc={bg1} color="#1F1B28" opacity={0.7} minHeight="367px" parallaxOffset={50} className="TradeInHeader">
                    <p className="Heading">TRADE-IN CAR FOR LEASE</p>
                    <p className="SubHeading">OUR TRADE-IN PROGRAM GETS YOU THE BEST DEAL FOR YOUR AUTO.</p>
                    <p className="Description">A leased car is another way to finance your vehicle, and trading in your vehicle for another one is the optimal choice because it can be a cost-effective and time-efficient way to obtain a new car. We are pleased to advocate or recommend a variety of options available to you to know your vehicle trade-in value.</p>
                </LazyHero>
                <LazyHero imageSrc={bg2} opacity={0} parallaxOffset={0} minHeight="1850px">
                    <div className="TradeInDetails">
                        <p className="TradeInDetailsHeading">Trade-In Appraisal</p>
                        <p className="TradeInDetailsDescription">At Smile Auto Leasing, the trade-in process can be done quickly and easily to save you time and money. The trade-in appraisal allows Smile Auto Leasing to determine the market value of your vehicle. Once we have determined your vehicles trade-in value, we can move to the next step in our process by having you fill out the trade-in form. If there is a negative equity on a financed car and you would like to trade-in for a cheaper vehicle, there are two options to choose from. The first is you pay the difference out of pocket, or you can ask Smile Auto Leasing if the amount can be rolled over into the new loan.</p>
                        <p className="TradeInDetailsHeading">Trade-In Form</p>
                        <p className="TradeInDetailsDescription">If you are currently leasing a car, your lease contract will have a payoff value, which is the current cost to terminate the lease. When you trade-in your leased car to us, we can pay off the lease, then the cost of the payoff goes against the trade-in value of your leased vehicle.</p>
                    </div>
        
                    <div className="TradeInFormContainer">
                        <iframe title="tradein" width="640px" height="100%" className="TradeInForm" src="https://www.123formbuilder.com/my-contact-form-4521326.html"/>
                    </div>
        
                    <div className="TradeInLegal">
                        <p>By inputting your vehicle trade-in application, Smile Auto Leasing can assist you in determining how much your vehicles trade-in value is.<br/><br/>Located in Brooklyn, New York, and serving the tri-state area including Connecticut, New Jersey, and New York. Smile Auto Leasing can assist you in a variety of your car leasing needs. For any inquiry regarding our vehicle trade-in process, please call Smile Auto Leasing at (718)-682-3122.</p>
                    </div>
                </LazyHero>
            </div>
        );
    }
}

export default TradeIn;