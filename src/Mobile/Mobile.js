import React, { Component } from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';
import logo from '../assets/logo.png';
import Home from './Home/Home';
import ErrorPage from './Error/Error';
import {HamburgerSqueeze} from 'react-animated-burgers';
import posed from 'react-pose';
import styled from 'styled-components';

import Inventory from './Inventory/Inventory';
import TradeIn from './TradeIn/TradeIn';
import Applications from './Applications/Applications';
import LeaseTermination from './LeaseTermination/LeaseTermination';
import Gallery from './Gallery/Gallery';
import Details from './Details/Details';
import Footer from './Footer/Footer';
import './Mobile.css';

const Menu = posed.div({
    closed: {
        height: '12px',
        transition: { duration: 800, ease: 'easeInOut'}
    },
    open: {
        height: '300px',
        transition: { duration: 800, ease: 'easeInOut'}
    },
});

const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    position: relative;
    text-align: left;
    top: 15px;
    margin-bottom: 18px;
    padding-left: 10px;
    color: #3c3976;
    font-weight: 700;
    font-size: 18px;

    :hover {
        background-color: #e5ba2e;

        transition: background-color 0.25s ease;
    }
`;

class Mobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        }
    }

    toggleButton = () => {
        this.setState({
            isActive: !this.state.isActive,
        })
    }

    resetMenu = () => {
        this.setState({
            isActive: false,
        })
    }

    render() {
        const routing = (
            <BrowserRouter>
                <div className="MobileHeader">
                    <Link to="/" className="MobileLogo"><img src={logo} alt={"logo"} width='132px' height='40px'/></Link>
                    <div className="MobileMenuContainer">
                        <HamburgerSqueeze className="MobileMenu" isActive={this.state.isActive} toggleButton={this.toggleButton} buttonColor="" barColor="#ffcf34" buttonWidth={32}/>
                        <Menu className="MobileLinkContainer" pose={this.state.isActive ? 'open' : 'closed'}>
                            <StyledLink onClick={this.resetMenu} to="/">HOME</StyledLink>
                            <StyledLink onClick={this.resetMenu} to="/inventory">INVENTORY</StyledLink>
                            <StyledLink onClick={this.resetMenu} to="/trade-in">TRADE-IN</StyledLink>
                            <StyledLink onClick={this.resetMenu} to="/applications">APPLICATIONS</StyledLink>
                            <StyledLink onClick={this.resetMenu} to="/lease-termination">LEASE TERMINATION</StyledLink>
                            <StyledLink onClick={this.resetMenu} to="/gallery">GALLERY</StyledLink>
                            <StyledLink onClick={() => {scroll.scrollTo(4580, 0); this.resetMenu()}} to="/">CONTACT</StyledLink>
                        </Menu>
                    </div>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/inventory" component={Inventory}/>
                        <Route path="/trade-in" component={TradeIn}/>
                        <Route path="/applications" component={Applications}/>
                        <Route path="/lease-termination" component={LeaseTermination}/>
                        <Route path="/gallery" component={Gallery}/>
                        <Route path = "/inventory/:year/:make/:model" component={Details} />
                        <Route component={ErrorPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );

        return (
            <div className="Mobile">
                {routing}
                <Footer/>
            </div>
        );
    }
}

export default Mobile;