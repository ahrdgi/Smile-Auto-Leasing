import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MobileImageGallery from 'react-image-gallery-mobile';
import SimilarListingMobile from '../SimilarListingMobile/SimilarListingMobile';
import MetaTags from 'react-meta-tags';
import 'intersection-observer';
import Observer from '@researchgate/react-intersection-observer';
import Tabletop from 'tabletop';
import "../../../node_modules/react-image-gallery-mobile/styles/css/image-gallery.css";
import './Details.css';
import ReactGA from 'react-ga';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: [],
            similars: [],
            type: '',
            price: '',
            loadingState: false,
            similarVisibility: 'HIDDEN',
        }
    }

    componentDidMount() {
        ReactGA.initialize('UA-127765623-1');
        ReactGA.pageview('/inventory/' + this.props.match.params.year + '/' + this.props.match.params.make + '/' + this.props.match.params.model);

        window.scrollTo(0, 0);

        Tabletop.init({
            key: '1mXni_N4sHEycfsAK7R4DzmYVTz81r8Wdc9xzPcXbtYM',
            callback: googleData => {
                this.setState({
                    listings: googleData,
                    similars: googleData
                })
            },
            simpleSheet: true
        })
    }

    mountHandler = () => {
        window.scrollTo(0, 0);
    }

    setSimilarVisible = (e) => {
        if (e.isIntersecting) {
            this.setState({ similarVisibility: 'SHOWN' });
        }
    }

    render() {
        const { listings } = this.state;
        const { similars } = this.state;
        const listing = listings.filter(a => a.year.includes(this.props.match.params.year) && a.make.toLowerCase() === this.props.match.params.make && a.model.toLowerCase() === this.props.match.params.model);

        const options = {
            onChange: this.setSimilarVisible,
            root: '#scrollingcontainer',
            rootMargin: '0% 0% -25%',
        }

        return (
            <div className="MobileDetailsBackground" id="scrolling-container">
                <div className="MobileDetailsBody">
                    {listing.map(listing => {
                        const similar = similars.filter(a => a.type.includes(listing.type) && a.id.localeCompare(listing.id) && a.price >= 100);
                        let price = listing.price_show;
                        if (listing.inquire === '1') {
                            price = "Inquire for price";
                        }

                        return (
                            <div key={listing.id}>
                                <MetaTags>
                                    <title>{listing.year} {listing.make} {listing.model} - Smile Auto Leasing</title>
                                    <meta id="meta-description" name="description" content={listing.description} />
                                </MetaTags>
                                <div className="MobileDetailsHeader">
                                    <h1 className="MobileDetailsHeaderText">{listing.year} {listing.make}<br />{listing.model}</h1>
                                </div>
                                <div className="MobileGalleryContainer">
                                    <MobileImageGallery thumbnailPosition="bottom" lazyLoad={true} showFullscreenButton={false} showPlayButton={false} items={[
                                        { original: listing.img_thumb, thumbnail: listing.img_thumb },
                                        { original: listing.img_rear, thumbnail: listing.img_rear },
                                        { original: listing.img_spin, thumbnail: listing.img_spin },
                                        { original: listing.img_in1, thumbnail: listing.img_in1 },
                                        { original: listing.img_in2, thumbnail: listing.img_in2 }
                                    ]} />
                                </div>
                                <div className="MobileDetailsInfoContainer">
                                    <div className="MobileDetailsInfoHeader">
                                        <p className="MobileDetailsInfoHeaderText">LEASE DETAILS</p>
                                    </div>
                                    <div className="MobileDetailsInfo">
                                        <table className="MobileDetailsInfoTable">
                                            <tbody>
                                                <tr>
                                                    <td className="MobileDetailsInfoLeft">PAYMENT:</td>
                                                    <td className="MobileDetailsInfoRight">{price}</td>
                                                </tr>
                                                <tr>
                                                    <td className="MobileDetailsInfoLeft">TERM OF LEASE:</td>
                                                    <td className="MobileDetailsInfoRight">{listing.term} months</td>
                                                </tr>
                                                <tr>
                                                    <td className="MobileDetailsInfoLeft">MILES PER YEAR:</td>
                                                    <td className="MobileDetailsInfoRight">{listing.miles}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="MobileDetailsQuote">
                                        <div className="MobileDetailsQuoteHeader">
                                            <p className="MobileDetailsQuoteHeaderText">GET A QUOTE FOR THIS VEHICLE</p>
                                        </div>
                                        <iframe title="detailsQuoteFrame" className="MobileDetailsQuoteForm" width="368px" frameBorder="0" src={"https://www.123formbuilder.com/sf.php?s=123formbuilder-4884252&control54484575=" + listing.year + "%20" + listing.make + "%20" + listing.model} />
                                    </div>
                                </div>
                                <div className="MobileDetailsDescriptionContainer">
                                    <div className="MobileDetailsDescriptionHeader1">
                                        <p className="MobileDetailsDescriptionHeaderText">DESCRIPTION</p>
                                    </div>
                                    <div className="MobileDetailsDescriptionText">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="MobileDetailsDescriptionTextBox">{listing.description}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="MobileDetailsDescriptionHeader2">
                                        <p className="MobileDetailsDescriptionHeaderText">SPECIFICATIONS</p>
                                    </div>
                                    <div className="MobileDetailsDescriptionSpecs">
                                        <table className="MobileDetailsSpecs">
                                            <tbody>
                                                <tr>
                                                    <td className="MobileDetailsSpecsLeft">Body Style:</td>
                                                    <td className="MobileDetailsSpecsRight">{listing.type}</td>
                                                </tr>
                                                <tr>
                                                    <td className="MobileDetailsSpecsLeft">Horsepower:</td>
                                                    <td className="MobileDetailsSpecsRight">{listing.hp} hp</td>
                                                </tr>
                                                <tr>
                                                    <td className="MobileDetailsSpecsLeft">MPG:</td>
                                                    <td className="MobileDetailsSpecsRight">{listing.mpg}</td>
                                                </tr>
                                                <tr>
                                                    <td className="MobileDetailsSpecsLeft">Engine:</td>
                                                    <td className="MobileDetailsSpecsRight">{listing.engine}</td>
                                                </tr>
                                                <tr>
                                                    <td className="MobileDetailsSpecsLeft">0-60:</td>
                                                    <td className="MobileDetailsSpecsRight">{listing.accel} seconds</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <Observer {...options}><span /></Observer>
                                <div className="MobileDetailsSimilarVehicles" key={listing.id}>
                                    <p className="MobileDetailsSimilarVehiclesHeader">SIMILAR VEHICLES</p>
                                    <Link to="/inventory" className="MobileDetailsSimilarVehiclesLink">See our entire inventory→</Link>
                                    <div className="MobileDetailsSimilarListings">
                                        <div className={this.state.similarVisibility}>
                                            {similar.slice(0, 9).map(similar => {
                                                let similarPrice = similar.price_show;
                                                if (similar.inquire === '1') {
                                                    similarPrice = "Inquire for price";
                                                }
                                                return (
                                                    <SimilarListingMobile key={similar.id} mount={this.mountHandler} amount="1" imageSrc={similar.img_thumb} year={similar.year} make={similar.make} model={similar.model} price={similarPrice} dynlink={similar.link} />
                                                );}
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                    )}
                </div>
            </div>
        );
    }
}

export default Details;