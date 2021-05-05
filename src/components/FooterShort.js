import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Footer.css';

function FooterShort() {
    return (
        <div className="foot-container-short">
                <div className="social-media-wrap-short">
                    <small className="website-rights">Portfolio © 2021</small>
                    <small className="website-rights">Last updated 05-05-2021</small>
                </div>
        </div>
    )
}

export default FooterShort
