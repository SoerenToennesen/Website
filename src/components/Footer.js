import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className="foot-container" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Send a copy of my resumé
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" textAlign='center' name="email" placeholder="Your Email <not implemented yet>" className="footer-input" />
                        <Button buttonStyle='btn--outline' linkto='about'>Send CV</Button>
                    </form>
                </div>
            </section>
            {/*<div className="footer-links">
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>A 'lil something something</h2>
                        <Link to='/contact-me'>Contact me</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                    </div>
                    <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>*/}
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

export default Footer
