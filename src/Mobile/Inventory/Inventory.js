import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import LazyHero from 'react-lazy-hero';
import bg1 from '../../assets/bg1.jpg';
import Tabletop from 'tabletop';
import Listing from '../Listing/Listing';
import 'intersection-observer';
import Observer from '@researchgate/react-intersection-observer';
import styled from 'styled-components';
import { animateScroll as scroll} from 'react-scroll';
import './Inventory.css';
import ReactGA from 'react-ga';

const StyledBack = styled.div`
    width: 50px;
    height: 50px;
    background-color: #3c3976;
    border-radius: 100px;
    position: fixed;
    z-index: 10;
    color: #ffcf34;
    font-weight: 700;
    bottom: 15px;
    left: 15px;
    cursor: pointer;

    :hover {
        color: #3c3976;
        background-color: #ffcf34;
    }

    transition: background-color 0.25s ease, color 0.25s ease;

    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1s; /* Firefox < 16 */
    -ms-animation: fadein 1s; /* Internet Explorer */
    -o-animation: fadein 1s; /* Opera < 12.1 */
    animation: fadein 1s;

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
`;

const NoResults = styled.div`
    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1s; /* Firefox < 16 */
    -ms-animation: fadein 1s; /* Internet Explorer */
    -o-animation: fadein 1s; /* Opera < 12.1 */
    animation: fadein 1s;

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
`;

class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state=({
            value: "az",
            make: '*',
            type: '*',
            budget: '2500',
            limit: 6,
            listings: [],
            loadingState: false,
            topVisibility: 'HIDDEN',
            noResVisibility: 'HIDDEN',
            resultsText1: 'Loading...',
            resultsText2: '',
        });
    }

    componentDidMount() {
        ReactGA.initialize('[REDACTED]');
        ReactGA.pageview('/inventory');

        window.scrollTo(0, 0);
        
        Tabletop.init({
            key: '[REDACTED]',
            callback: googleData => {
                googleData.sort(function (a, b) {
                    return b.year - a.year || a.make - b.make || a.model - b.model;
                });
                this.setState({
                    listings: googleData,
                })
            },
            simpleSheet: true
        })
    }

    intersectHandler = (e) => {
        if (e.isIntersecting) {
            this.setState({limit: this.state.limit+6, topVisibility: 'SHOWN'});
        }
    }

    sortHandler = (e) => {
        this.setState({ value: e.target.value });
        this.setState({
            resultsText1: 'Sorry, no results found',
            resultsText2: 'Please refine your search',
        })
    }

    makeHandler = (e) => {
        this.setState({make: e.target.value});
        this.setState({
            resultsText1: 'Sorry, no results found',
            resultsText2: 'Please refine your search',
        })
    }

    typeHandler = (e) => {
        this.setState({type: e.target.value});
        this.setState({
            resultsText1: 'Sorry, no results found',
            resultsText2: 'Please refine your search',
        })
    }

    budgetHandler = (e) => {
        this.setState({ budget: e.target.value }, () => {
        });
        this.setState({
            resultsText1: 'Sorry, no results found',
            resultsText2: 'Please refine your search',
        })
    }
    
    render() {
        let { listings } = this.state;
        let filtered = listings;

        let resVisibility = 'HIDDEN';

        const options = {
            onChange: this.intersectHandler,
            root: '#scrollingcontainer',
            rootMargin: '0% 0% -25%',
        }

        if (this.state.value === "az") {
            listings.sort(function (a, b) {
                return b.year - a.year || a.make.localeCompare(b.make) || a.model.localeCompare(b.model);
            });
        } else if (this.state.value === "lth") {
            listings.sort(function (a, b) {
                return a.price - b.price;
            });
        } else if (this.state.value === "htl") {
            listings.sort(function (a, b) {
                return b.price - a.price;
            });
        }

        if (this.state.make === "*" && this.state.type === "*") {
            filtered = listings.filter(a=>a.price <= parseInt(this.state.budget) && a.price >= 100);
        } else if (this.state.make !== "*" && this.state.type === "*") {
            filtered = listings.filter(a=>a.make.includes(this.state.make) && a.price <= parseInt(this.state.budget) && a.price >= 100);
        } else if (this.state.make === "*" && this.state.type !== "*") {
            filtered = listings.filter(a=>a.type.includes(this.state.type) && a.price <= parseInt(this.state.budget) && a.price >= 100);
        } else {
            filtered = listings.filter(a=>a.make.includes(this.state.make) && a.type.includes(this.state.type) && a.price <= parseInt(this.state.budget) && a.price >= 100);
        }

        if (filtered.length === 0) {
            resVisibility = 'SHOWN';
        } else {
            resVisibility = 'HIDDEN';
        }

        return (
            <div id="scrolling-container" className="MobileInventory">
                <div className={this.state.topVisibility}>
                    <StyledBack onClick={scroll.scrollToTop}><p className="TopText">TOP</p></StyledBack>
                </div>
                <MetaTags>
                    <title>Smile Auto Leasing | Car Inventory | Selection</title>
                    <meta id="meta-description" name="description" content="Auto leasing company that partners with a variety of dealers to offer a large car inventory - Smile Auto Leasing (718) 682-3122"/>
                </MetaTags>
                <LazyHero className="MobileApplicationsHeader" imageSrc={bg1} color="#1F1B28" opacity={0.7} minHeight="230px" parallaxOffset={50}>
                    <p className="MobileHeading">INVENTORY</p>
                    <p className="MobileSubHeading">NEARLY ENDLESS CHOICES. HAVE A LOOK:</p>
                    <p className="MobileDescription">At Smile Auto Leasing, we have partnerships with a variety of dealerships so we can offer a diverse selection of cars in our inventory including, but not limited to, BMW, Cadillac, Subaru, Honda, Mercedes-Benz, and Acura. Smile makes it easy to quickly browse through the cars in our inventory and the price of each cars monthly lease payment. Prices calculated without bank fee, DMV, and local taxes. Pricing, months, and miles may vary.</p>
                </LazyHero>
                <div className="MobileSearch">
                    <div className="MobileButtonNames">
                        <p className="MobileMake">Make</p>
                        <select className="MobileMakeButton" onChange={this.makeHandler}>
                        <option value="*">All Makes</option>
                            <option value="Acura">Acura</option>
                            <option value="Alfa Romeo">Alfa Romeo</option>
                            <option value="Audi">Audi</option>
                            <option value="Bentley">Bentley</option>
                            <option value="BMW">BMW</option>
                            <option value="Buick">Buick</option>
                            <option value="Cadillac">Cadillac</option>
                            <option value="Chevrolet">Chevrolet</option>
                            <option value="Chrysler">Chrysler</option>
                            <option value="Dodge">Dodge</option>
                            <option value="Fiat">Fiat</option>
                            <option value="Ford">Ford</option>
                            <option value="Genesis">Genesis</option>
                            <option value="GMC">GMC</option>
                            <option value="Honda">Honda</option>
                            <option value="Hyundai">Hyundai</option>
                            <option value="Infiniti">Infiniti</option>
                            <option value="Jaguar">Jaguar</option>
                            <option value="Jeep">Jeep</option>
                            <option value="Land Rover">Land Rover</option>
                            <option value="Lexus">Lexus</option>
                            <option value="Lincoln">Lincoln</option>
                            <option value="Maserati">Maserati</option>
                            <option value="Mazda">Mazda</option>
                            <option value="Mercedes-Benz">Mercedes-Benz</option>
                            <option value="Mini">Mini</option>
                            <option value="Mitsubishi">Mitsubishi</option>
                            <option value="Nissan">Nissan</option>
                            <option value="Porsche">Porsche</option>
                            <option value="RAM">RAM</option>
                            <option value="Subaru">Subaru</option>
                            <option value="Tesla">Tesla</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Volkswagen">Volkswagen</option>
                            <option value="Volvo">Volvo</option>
                        </select>

                        <p className="MobileBody">Body Style</p>
                        <select className="MobileBodyButton" onChange={this.typeHandler}>
                            <option value="*">All Styles</option>
                            <option value="Coupe">Coupe</option>
                            <option value="Convertible">Convertible</option>
                            <option value="Crossover">Crossover</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Minivan">Minivan</option>
                            <option value="Pickup">Pickup</option>
                            <option value="Sedan">Sedan</option>
                            <option value="Wagon">Wagon</option>
                            <option value="SUV">SUV</option>
                            <option value="Van">Van</option>
                        </select>
                        <br/>

                        <p className="MobileBudget">Budget Search</p>
                        <div className="MobileBudgetValue">≤${this.state.budget}/mo</div>
                        <input name="budget" type="range" min="100" max="3000" defaultValue="2500" step="100" className="MobileBudgetButton" onChange={this.budgetHandler} title={this.state.budget}/>

                        <p className="MobileSort">Sort By</p>
                        <select className="MobileSortButton" onChange={this.sortHandler}>
                            <option value="az">Alphabet</option>
                            <option value="lth">Price: low to high</option>
                            <option value="htl">Price: high to low</option>
                        </select>
                    </div>
                </div>
                <div className={resVisibility}>
                    <NoResults>
                        <div className="MobileNoResultsText">
                            <p className="MobileNoResults1">{this.state.resultsText1}</p>
                            <p className="MobileNoResults2">{this.state.resultsText2}</p>
                        </div>
                    </NoResults>
                </div>
                <div className="MobileListings">
                    {filtered.slice(0, this.state.limit).map(listing => {
                        let price = listing.price_show;
                        if (listing.inquire === '1') {
                            price = "Inquire for price";
                        }
                        return (
                            <Listing key={listing.id} imageSrc={listing.img_thumb} year={listing.year} make={listing.make} model={listing.model} price={price} dynlink={listing.link} />
                        )
                    }
                    )}
                </div>
                <Observer {...options}>
                    <div/>
                </Observer>
            </div>
        )
    }
}

export default Inventory;
