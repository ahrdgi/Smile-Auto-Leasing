import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import SimilarListing from '../SimilarListing/SimilarListing';
import MetaTags from 'react-meta-tags';
import 'intersection-observer';
import Observer from '@researchgate/react-intersection-observer';
import Tabletop from 'tabletop';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
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
            carLoaded: false,
            picture: null,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        Tabletop.init({
            key: '1mXni_N4sHEycfsAK7R4DzmYVTz81r8Wdc9xzPcXbtYM',
            callback: googleData => {
                this.setState({
                    listings: googleData,
                    similars: googleData,
                });
            },
            simpleSheet: true
        });

        ReactGA.initialize('UA-127765623-1');
        ReactGA.pageview('/inventory/' + this.props.match.params.year + '/' + this.props.match.params.make + '/' + this.props.match.params.model);
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
            <div className="DetailsBackground" id="scrolling-container">
                <div className="DetailsBody">
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
                                <div className="DetailsHeader">
                                    <h1 className="DetailsHeaderText">{listing.year} {listing.make}<br />{listing.model}</h1>
                                    <p className="DetailsPriceMatch">Price match guaranteed.<br />Give us a call!</p>
                                </div>
                                <ImageGallery thumbnailPosition="bottom" lazyLoad={true} showFullscreenButton={false} showPlayButton={false} items={[
                                    { original: listing.img_thumb, thumbnail: listing.img_thumb },
                                    { original: listing.img_rear, thumbnail: listing.img_rear },
                                    { original: listing.img_spin, thumbnail: listing.img_spin },
                                    { original: listing.img_in1, thumbnail: listing.img_in1 },
                                    { original: listing.img_in2, thumbnail: listing.img_in2 }
                                ]} />
                                <div className="DetailsInfoContainer">
                                    <div className="DetailsInfoHeader">
                                        <p className="DetailsInfoHeaderText">LEASE DETAILS</p>
                                    </div>
                                    <div className="DetailsInfo">
                                        <table className="DetailsInfoTable">
                                            <tbody>
                                                <tr>
                                                    <td className="DetailsInfoLeft">PAYMENT:</td>
                                                    <td className="DetailsInfoRight">{price}</td>
                                                </tr>
                                                <tr>
                                                    <td className="DetailsInfoLeft">TERM OF LEASE:</td>
                                                    <td className="DetailsInfoRight">{listing.term} months</td>
                                                </tr>
                                                <tr>
                                                    <td className="DetailsInfoLeft">MILES PER YEAR:</td>
                                                    <td className="DetailsInfoRight">{listing.miles}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="DetailsQuote">
                                        <div className="DetailsQuoteHeader">
                                            <p className="DetailsQuoteHeaderText">GET A QUOTE FOR THIS VEHICLE</p>
                                        </div>
                                        <iframe title="detailsQuoteFrame" className="DetailsQuoteForm" width="368px" frameBorder="0" src={"https://www.123formbuilder.com/sf.php?s=123formbuilder-4884252&control54484575=" + listing.year + "%20" + listing.make + "%20" + listing.model} />
                                    </div>
                                </div>
                                <div className="DetailsDescriptionContainer">
                                    <div className="DetailsDescriptionHeader1">
                                        <p className="DetailsDescriptionHeaderText">DESCRIPTION</p>
                                    </div>
                                    <div className="DetailsDescriptionHeader2">
                                        <p className="DetailsDescriptionHeaderText">SPECIFICATIONS</p>
                                    </div>
                                    <div className="DetailsDescriptionText">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="DetailsDescriptionTextBox">{listing.description}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="DetailsDescriptionSpecs">
                                        <table className="DetailsSpecs">
                                            <tbody>
                                                <tr>
                                                    <td className="DetailsSpecsLeft">Body Style:</td>
                                                    <td className="DetailsSpecsRight">{listing.type}</td>
                                                </tr>
                                                <tr>
                                                    <td className="DetailsSpecsLeft">Horsepower:</td>
                                                    <td className="DetailsSpecsRight">{listing.hp} hp</td>
                                                </tr>
                                                <tr>
                                                    <td className="DetailsSpecsLeft">MPG:</td>
                                                    <td className="DetailsSpecsRight">{listing.mpg}</td>
                                                </tr>
                                                <tr>
                                                    <td className="DetailsSpecsLeft">Engine:</td>
                                                    <td className="DetailsSpecsRight">{listing.engine}</td>
                                                </tr>
                                                <tr>
                                                    <td className="DetailsSpecsLeft">0-60:</td>
                                                    <td className="DetailsSpecsRight">{listing.accel} seconds</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <Observer {...options}><span /></Observer>
                                <div className="DetailsSimilarVehicles" key={listing.id}>
                                    <p className="DetailsSimilarVehiclesHeader">SIMILAR VEHICLES</p>
                                    <Link to="/inventory" className="DetailsSimilarVehiclesLink">See our entire inventory→</Link>
                                    <div className="DetailsSimilarListings">
                                        <div className={this.state.similarVisibility}>
                                            {similar.slice(0, 9).map(similar => {
                                                let similarPrice = similar.price_show;
                                                if (similar.inquire === '1') {
                                                    similarPrice = "Inquire for price";
                                                }
                                                return (
                                                    <SimilarListing key={similar.id} mount={this.mountHandler} amount="1" imageSrc={similar.img_thumb} year={similar.year} make={similar.make} model={similar.model} price={similarPrice} dynlink={similar.link} />
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