import React, { Component } from 'react';
import bg1 from '../../assets/bg1.jpg';
import bg2 from '../../assets/bg2.jpg';
import LazyHero from 'react-lazy-hero';
import MetaTags from 'react-meta-tags';
import './LeaseTermination.css'
import ReactGA from 'react-ga';

class LeaseTermination extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-127765623-1');
        ReactGA.pageview('/lease-termination');
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <MetaTags>
                    <title>Smile Auto Leasing | Lease Termination </title>
                    <meta id="meta-description" name="description" content="Looking to end your lease? Want a new car? We can terminate your lease so you can get into the car you want! If your current lease is expiring, view our leasing deals, leasing specials, and car inventory - Smile Auto Leasing (718) 682 3122"/>
                </MetaTags>
                <LazyHero imageSrc={bg1} color="#1F1B28" opacity={0.7} minHeight="367px" parallaxOffset={50} className="LeaseTerminationHeader">
                    <p className="Heading">CAR LEASE TERMINATION</p>
                    <p className="SubHeading">TERMINATE YOUR LEASE, SO YOU CAN START A BETTER LEASE.</p>
                </LazyHero>

                <LazyHero imageSrc={bg2} opacity={0} minHeight="2100px" parallaxOffset={0}>
                    <div className="LeaseTerminationDetails">
                        <p className="LeaseTerminationDetailsHeading">Terminating Your Lease</p>
                        <p className="LeaseTerminationDetailsDescriptionHeading">Lease termination typically occurs under two circumstances:</p>
                        <blockquote className="LeaseTerminationDetailsDescription">1. Contract Expiration<br/>2. Early Lease Termination</blockquote>
                        <p className="LeaseTerminationDetailsDescription">The details of either event are clearly spelled out in your lease contract. Regardless of the option you’re considering, the Automotive Experts at SmileAutoLeasing.com advise you to be prepared. Don’t let the end of your lease sneak up on you. Take the time learn what to expect and what your options are. When in doubt, contact SmileAutoLeasing.com for help.</p>
                        <p className="LeaseTerminationDetailsDescriptionHeading">If You're Ending Your Lease Early</p>
                        <p className="LeaseTerminationDetailsDescription">Ending a lease early means a few extra steps you need to go through. SmileAutoLeasing.com can make this process both easy and affordable. They give you valuable and honest advice to get you where you want to be, whether that’s in a new lease or just out from under the existing one. You don’t have to jump through the hoops of lease termination alone.<br/>You probably already know about the termination fees and other potential penalties for ending your lease early. The good news is that the weight of these penalties can be reduced, offset, or even eliminated. There are options available to you, and SmileAutoLeasing.com wants to tell you about them.</p>
                        <p className="LeaseTerminationDetailsDescriptionHeading">If You're at the End</p>
                        <p className="LeaseTerminationDetailsDescription">Being prepared for the end of your lease is the most important step. If your lease is ending soon, it’s time to explore your options. At the end of a lease agreement, you can:</p>
                        <blockquote className="LeaseTerminationDetailsDescription">• Return the vehicle for a new one<br/>• Sign up for a new lease with the same vehicle<br/>• Buy your vehicle for the agreed upon price</blockquote>
                        <p className="LeaseTerminationDetailsDescription">Whether you choose a new lease or are happy with the original vehicle, SmileAutoLeasing.com can help navigate the next steps. With an amazing range of automobiles in NYC, SmileAutoLeasing.com can satisfy your needs to end of your lease or move through a transition into a new vehicle. Your road begins with a phone call to (718) 682-3122.<br/><br/>Life is too short to be stuck in a car you hate. You deserve to be in the automobile of your choice. Your vehicle should be a pleasure, not an obligation. SmileAutoLeasing.com can help you find satisfaction and peace of mind. Enjoy the ride!</p>
                    
                    </div>

                    <div className="LeaseTerminationFormContainer">
                        <iframe title="leaseTerm" width="640px" height="100%" className="LeaseTerminationForm" src="https://www.123formbuilder.com/my-contact-form-4521376.html"/>
                    </div>
                </LazyHero>
            </div>
        );
    }
}

export default LeaseTermination;