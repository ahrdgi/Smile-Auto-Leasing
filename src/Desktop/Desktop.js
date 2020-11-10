import React, { Component } from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import { animateScroll as scroll} from 'react-scroll';
import styled from 'styled-components';
import './Desktop.css';
import logo from '../assets/logo.png';
import Home from './Home/Home';
import Inventory from './Inventory/Inventory';
import Details from './Details/Details';
import TradeIn from './TradeIn/TradeIn';
import Applications from './Applications/Applications';
import LeaseTermination from './LeaseTermination/LeaseTermination';
import ErrorPage from './Error/Error';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  font-weight: 900;
  text-align: left;
  font-size: 16.5px;
  color: #ffcf34;
  margin-left: 14px;
  margin-right: 14px;
  top: 1px;
  cursor: pointer;

  :hover {
    color: #ffffff;
  }

  transition: color 0.25s ease;
`;

const LogoLink = styled(Link)`
  position: relative;
  top: 11px;
  margin-right: 13px;
`;

const CallUs = styled.div`
  display: inline-block;
  color: #3c3976;
  font-weight: 700;
  background-color: #ffcf34;
  position: fixed;
  right: 20px;
  top: 50px;
  z-index: 10;
  border-radius: 10px;
  border: 2px solid #3c3976;
`;

const StyledP = styled.p`
  display: block;
  position: relative;
  text-align: left;
  padding: 0px 20px;
  text-decoration: none;
`;

const StyledX = styled.div`
  display: inline-block;
  position: fixed;
  right: 30px;
  top: 55px;
  cursor: pointer;
`;

const A = styled.a`
  color: #3c3976;
`;

const routing = (
    <BrowserRouter>
      <div className='Header'>
        <div className='Topnav'>
          <LogoLink to="/"><img src={logo} alt={"logo"} width='132' height='40'/></LogoLink>
          <StyledLink to="/">HOME</StyledLink>
          <StyledLink to="/inventory" exact>INVENTORY</StyledLink>
          <StyledLink to="/trade-in">TRADE-IN</StyledLink>
          <StyledLink to="/applications">APPLICATIONS</StyledLink>
          <StyledLink to="/lease-termination">LEASE TERMINATION</StyledLink>
          <StyledLink to="/gallery">GALLERY</StyledLink>
          <StyledLink to="/" onClick={() => scroll.scrollTo(4120, 0)}>CONTACT</StyledLink>
        </div>
      </div>
      <div>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route exact path = "/inventory" component={Inventory} />
          <Route path = "/trade-in" component={TradeIn} />
          <Route path = "/applications" component={Applications} />
          <Route path = "/lease-termination" component={LeaseTermination} />
          <Route path = "/gallery" component={Gallery} />
          <Route path = "/inventory/:year/:make/:model" component={Details} />
          <Route component = {ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
)

class Desktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayClass: "Hidden",
      numberDisplay: "SHOWN"
  };
  }
  render() {
    return (
      <div className="Desktop">
        <div className={this.state.numberDisplay}>
          <CallUs>
            <StyledX onClick={()=> this.setState({numberDisplay: "HIDDEN",})}>
              <svg viewBox="0 0 20 20" height="20px" fill="#3c3976">
                  <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
              </svg>
            </StyledX>
            <StyledP>Call Us</StyledP>
            <StyledP>NY: <A href="tel:17186823122">(718) 682-3122</A></StyledP>
            <StyledP>CT: <A href="tel:12037170140">(203) 717-0140</A></StyledP>
            <StyledP>NJ: <A href="tel:17327979962">(732) 797-9962</A></StyledP>
            <StyledP>Westchester: <A href="tel:19142408112">(914) 240-8112</A></StyledP>
            <StyledP>Long Island: <A href="tel:15163001456">(516) 300-1456</A></StyledP>
          </CallUs>
        </div>
        {routing}
        <Footer/>
      </div>
    );
  }
}

export default Desktop;
