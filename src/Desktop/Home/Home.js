import React, {Component} from 'react';
import bg1 from '../../assets/bg1.jpg';
import bg3 from '../../assets/bg3.jpg';
import cm from '../../assets/cm.gif';
import pa from '../../assets/pa.gif';
import fd from '../../assets/fd.gif';
import es from '../../assets/es.gif';
import LazyHero from 'react-lazy-hero';
import Listing from '../Listing/Listing';
import { Link } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';
import TradeOrTerminate from '../TradeOrTerminate/TradeOrTerminate';
import Quote from '../Quote/Quote';
import MetaTags from 'react-meta-tags';
import styled from 'styled-components';
import 'intersection-observer';
import Tabletop from 'tabletop';
import Observer from '@researchgate/react-intersection-observer';
import './Home.css';
import ReactGA from 'react-ga';

const StyledQuote = styled.div`
            cursor: pointer;
            display: table;
            position: absolute;
            text-decoration: none;
            background-color: #ffcf34;
            border-radius: 10px;
            color: #3c3976;
            width: 202px;
            height: 53px;
            font-size: 21px;
            font-weight: 900;
            top: 700px;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);

            :hover {
                background-color: #3c3976;
                color: #ffcf34;
            }

            transition: color 0.25s ease, background-color 0.25s ease;
        `;

        const StyledQuoteFooter = styled.div`
            cursor: pointer;
            display: table;
            margin-left: auto;
            margin-right: auto;
            text-decoration: none;
            background-color: #ffcf34;
            border-radius: 10px;
            color: #3c3976;
            width: 202px;
            height: 53px;
            font-size: 21px;
            font-weight: 900;
            margin-top: 95px;

            :hover {
                background-color: #3c3976;
                color: #ffcf34;
            }

            transition: color 0.25s ease, background-color 0.25s ease;
        `;

        const StyledCreditButton = styled(Link)`
            display: inline-block;
            text-decoration: none;
            background-color: #ffcf34;
            border-radius: 10px;
            color: #3c3976;
            width: 202px;
            height: 53px;
            font-size: 21px;
            font-weight: 900;
            margin-top: 95px;

            :hover {
                color: #ffcf34;
                background-color: #1f1b28;
            }

            transition: color 0.25s ease, background-color 0.25s ease;
        `;

        const StyledInvLink = styled(Link)`
            display: inline-block;
            text-decoration: none;
            background-color: #3c3976;
            color: #ffcf34;
            width: 202px;
            height: 53px;
            font-size: 21px;
            font-weight: 900;
            margin-top: 18px;
            border-radius: 10px;

            :hover {
                background-color: #ffcf34;
                color: #3c3976;
            }

            transition: color 0.25s ease, background-color 0.25s ease;
        `;

        const StyledSvg = styled.svg`
            fill: #ffcf34;

            :hover {
                fill: #3c3976;
            }

            transition: fill 0.25s ease;
        `;

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: 'HIDDEN',
            listings: [],
            quoteVisibility: 'HIDDEN',
            dealsVisibility: 'HIDDEN',
        }
    }

    componentDidMount() {
        ReactGA.initialize('UA-127765623-1');
        ReactGA.pageview('/');
        
        window.scrollTo(0,0);

        Tabletop.init({
            key: '1mXni_N4sHEycfsAK7R4DzmYVTz81r8Wdc9xzPcXbtYM',
            callback: googleData => {
                googleData.sort(function (a, b) {
                    return a.price - b.price;
                });
                this.setState({
                    listings: googleData
                })
            },
            simpleSheet: true
        })
    }

    scrollToLinkBox = () => {
        scroll.scrollTo(919);
    }

    setVisible = () => {
        this.setState({visibility: 'SHOWN',});
    }

    unsetVisible = () => {
        this.setState({visibility: 'HIDDEN',});
    }

    setQuoteVisible = () => {
        this.setState({quoteVisibility: 'SHOWN',});
    }

    unsetQuoteVisible = () => {
        this.setState({quoteVisibility: 'HIDDEN',});
    }

    setDealsVisible = (e) => {
        if (e.isIntersecting) {
            this.setState({dealsVisibility: 'SHOWN'});
        }
    }

    render() {
        const data = this.state.listings;

        const listings = data.filter(a=> a.price > 0);

        const options = {
            onChange: this.setDealsVisible,
            root: '#scrollingcontainer',
            rootMargin: '0% 0% -25%',
        }
        
        return (
            <div className="Home" id="scrolling-container">
                <MetaTags>
                    <title>Smile Auto Leasing - Best Cheap Car Lease Deals NYC</title>
                    <meta id="meta-description" name="description" content="Car leasing company based in New York City with excellent customer service. Cars delivered to any* state. Call Smile Auto Leasing: (718) 682-3122"/>
                    <meta id="meta-keywords" name="keywords" content="leasing, brooklyn, cars 4 sale, new car lease, auto inventory" />
                </MetaTags>
                <div className={this.state.visibility}>
                    <TradeOrTerminate close={this.unsetVisible}/>
                </div>
                <div className={this.state.quoteVisibility}>
                    <Quote close={this.unsetQuoteVisible}/>
                </div>
                <LazyHero imageSrc={bg1} color="#1F1B28" opacity={0.7} minHeight="1151px" parallaxOffset={50}>
                    <p className="HomeHeading">ALWAYS ZERO DOWN</p>
                    <div onClick={this.scrollToLinkBox} className="Button">
                        <StyledSvg preserveAspectRatio="xMidYMid meet" data-bbox="19 19 162 162" viewBox="19 19 162 162" height="45" width="45" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">
                                <path d="M136.6 82.1c-1.2-1.2-3.2-1.2-4.3 0L100 114.7 67.7 82.1c-1.2-1.2-3.2-1.2-4.3 0l-2.3 2.3c-1.2 1.2-1.2 3.2 0 4.3l36.6 36.6c1.2 1.2 3.2 1.2 4.3 0l2.3-2.3 34.6-34.6c1.2-1.2 1.2-3.2 0-4.3l-2.3-2z" data-color="1"></path>
                                <path d="M100 19c-44.7 0-81 36.3-81 81s36.3 81 81 81 81-36.3 81-81-36.3-81-81-81zm0 152.5c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5z" data-color="2"></path>
                        </StyledSvg>
                    </div>
                    <p className="HomeSubHeading">AUTO LEASING</p>
                    <p className="SubText">Smile Auto Leasing is a car leasing company located in Brooklyn, New York, and serving the tri-state area including Connecticut, New Jersey, and New York. We are car leasing experts that can assist you in finding the optimal car for your needs. Our process includes engaging with the customer and providing one-on-one attention to ensure that we are an equitable car leasing company that values your car leasing needs.<br/><br/>We are a customer-focused auto leasing company that strives to provide a lower monthly payment for lease agreements. Smile Auto Leasing offers an unmatched variety of new cars to lease. We are a dependable car leasing company that incorporates our ingenuity with our extensive experience and knowledge to assist you in leasing a car on a budget.</p>
                    <StyledQuote onClick={this.setQuoteVisible}><p>GET A QUOTE</p></StyledQuote>
                    <div className="LinkContainer">
                        <Link to="/inventory" className="Link1">
                            <div className="LinkBoxText">
                                <p className="LinkText1_1">NEW AUTO LEASING DEALS</p>
                                <p className="LinkText1_2"> Our large inventory enables you to find the right vehicle for you and lease or finance it instantly.</p>
                                    <svg viewBox="0 0 20 20" className="LinkArrow">
                                        <path d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z" fill="#222222"></path>
                                    </svg>
                            </div>      
                        </Link>
                        <div onClick={this.setVisible} className="Link2">
                            <div className="LinkBoxText">
                                <p className="LinkText2_1">TRADE IN YOUR OLD CAR</p>
                                <p className="LinkText2_2">Trade in your car or terminate your lease with us today. Leasing and financing is easier than ever.</p>
                                <svg viewBox="0 0 20 20" className="LinkArrow">
                                        <path d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z" fill="#eeeeee"></path>
                                    </svg>
                            </div>
                        </div>
                    </div>
                </LazyHero>
                <div className="DealsSection">
                    <div className="Deals">
                        <p className="DealsHeading">BEST AUTO LEASING DEALS</p>
                        <p className="DealsSubHeading">WE CAN GUARANTEE YOU THE LOWEST PRICE</p>
                        <p className="DealsSubText">We offer an affordable monthly rate for a variety of cars we offer to lease. With Smile Auto Leasing, we offer free delivery for your new leased car. We only sell certified, brand new vehicles for leasing. At Smile Auto Leasing, every new car is sourced through our network and comes from the dealership. The cars are leased or sold as new and carry the manufacturer's warranty. We offer a variety of new cars including, but not limited to car companies like BMW, Subaru, Cadillac, Mercedes-Benz, and Honda.<br/><br/>At Smile Auto Leasing, you can trade in your old vehicle or terminate your lease. If the amount you owe on your car is less than the trade-in value, our trade-in process can be quick and simple. We are your new car leasing advocates that want to provide a positive and well-serviced experience.</p>
                    </div>
                    <Observer {...options}>
                        <div className="HomeListings">
                            <div className={this.state.dealsVisibility}>
                                {listings.slice(0, 6).map(listing => {
                                    let price = listing.price_show;
                                    if (listing.inquire === '1') {
                                        price = "Inquire for price";
                                    }
                                    return (
                                        <Listing key={listing.id} imageSrc={listing.img_thumb} year={listing.year} make={listing.make} model={listing.model} price={price} dynlink={listing.link}/>
                                    )
                                }
                                )}
                            </div>
                        </div>
                    </Observer>
                    <StyledInvLink to="/inventory" className="InventoryLink"><p className="InventoryLinkText">VIEW MORE</p></StyledInvLink>
                </div>
                <div className="AboutSection">
                    <p className="WhySmile">WHY SMILE AUTO LEASING?</p>
                    <div className="WhyContainer">
                        <table className="WhyTable">
                            <tbody>
                                <tr>
                                    <td className="WhyImage"><img alt="cm" src={cm} height="50px"/></td>
                                    <td className="WhyImage"><img alt="cm" src={pa} height="50px"/></td>
                                    <td className="WhyImage"><img alt="cm" src={fd} height="50px"/></td>
                                    <td className="WhyImage"><img alt="cm" src={es} height="50px"/></td>
                                </tr>
                                <tr>
                                    <td className="WhyTitle">CERTIFIED MOTORS</td>
                                    <td className="WhyTitle">PRE-APPROVAL</td>
                                    <td className="WhyTitle">FREE DELIVERY</td>
                                    <td className="WhyTitle">EXTRA SERVICE</td>
                                </tr>
                                <tr>
                                    <td className="HomeWhyDesc">At Smile, we always offer current and next year model cars for leasing.</td>
                                    <td className="HomeWhyDesc">We accept pre-approval statements that include, but are not limited to proof of income and credit score.</td>
                                    <td className="HomeWhyDesc">Quick and efficient car delivery to the tri-state area.</td>
                                    <td className="HomeWhyDesc">We offer exceptional customer service and can answer any inquiry about leasing a new car.</td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                </div>

                <div className="CreditSection">
                    <p className="CreditSubmitText">SUBMIT A CREDIT APPLICATION FOR ELIGIBILITY TO LEASE A CAR</p>
                    <StyledCreditButton to="/applications" className="CreditSubmitButton"><p className="CreditSubmitButtonText">APPLY HERE</p></StyledCreditButton>
                </div>
                <LazyHero imageSrc={bg3} opacity={0} minHeight="577px" parallaxOffset={50}>
                    <p className="HomeFooterText">YOU CAN GET A FREE QUOTE AT ANY TIME</p>
                    <StyledQuoteFooter className="HomeFooterButton" onClick={this.setQuoteVisible}><p>GET A QUOTE</p></StyledQuoteFooter>
                </LazyHero>
            </div>
        )
    }
};

export default home;