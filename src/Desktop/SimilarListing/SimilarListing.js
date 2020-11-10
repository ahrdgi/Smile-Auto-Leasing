import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './SimilarListing.css';

const StyledDetails = styled(Link)`
    display: table-cell;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    background-color: #3c3976;
    border-radius: 10px;
    color: #ffcf34;
    width: 104px;
    height: 40px;
    font-size: 15px;
    font-weight: 900;
    position: relative;
    left: 161px;
    top: -60px;

    :hover {
        background-color: #ffcf34;
        color: #3c3976;
    }

    transition: color 0.25s ease,background-color 0.25s ease;
`;

const StyledImg = styled.img`
    border-radius: 6px;
    min-width: 306px;
    max-width: 306px;
    min-height: 230px;
    max-height: 230px;

    :hover {
        -webkit-filter:brightness(50%);
        -moz-filter:brightness(50%);
        filter: url(#brightness);
        filter:brightness(50%);
    }

    transition: -webkit-filter 0.25s ease, -moz-filter 0.25s ease, filter 0.25s ease;
`;

const StyledListing = styled.div`
    display: inline-block;
    border: 3px solid #ffcf34;
    width: 306px;
    height: 347px;
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 24px;
    top: 330px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.01);
    border-radius: 10px;
    background-color: #ffffff;

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

const SimilarListing = (props) => {
    return (
            <StyledListing>
                <Link to={props.dynlink} onClick={props.mount}><StyledImg src={props.imageSrc} alt="IMAGE COMING SOON"/></Link>
                <div className="SimilarListingDivider"/>
                <div className="SimilarListingInfo">
                    <p>{props.year} {props.make}<br/>{props.model}</p>
                    <p className="SimilarListingFrom">From:</p>
                    <p className="SimilarListingPrice">{props.price}</p>
                    <StyledDetails to={props.dynlink} onClick={props.mount}>DETAILS</StyledDetails>
                </div>
            </StyledListing>
    )
};

export default SimilarListing;