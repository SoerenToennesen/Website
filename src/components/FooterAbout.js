import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './FooterAbout.css';

function FooterAbout() {
    return (
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Send a copy of my resumé
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email <not implemented yet>" className="footer-input" />
                        <Button buttonStyle='btn--outline' linkto='about'>Send CV</Button>
                    </form>
                </div>
            </section>
            <section className="social-media">
                <div className="social-media-wrap">
                    <small className="website-rights">Portfolio © 2021</small>
                    <div className="social-icons">
                        <Link
                            class='social-icon-link github'
                            to='/'
                            target='_blank'
                            aria-label='Github'
                        >
                            <i class='fab fa-github' />
                        </Link>
                        <Link
                            class='social-icon-link phone'
                            to='/'
                            target='_blank'
                            aria-label='Phone'
                        >
                            <i class='fas fa-phone'/>
                        </Link>
                        <Link
                            class='social-icon-link email'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fas fa-envelope' />
                        </Link>
                        <Link
                            class='social-icon-link location'
                            to='/'
                            target='_blank'
                            aria-label='Location'
                        >
                            <i class='fas fa-street-view' />
                        </Link>
                        <Link
                            class='social-icon-link linkedin'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                    <small className="website-rights">Last updated 05-05-2021</small>
                </div>
            </section>
        </div>
    )
}

export default FooterAbout
