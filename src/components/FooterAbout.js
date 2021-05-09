import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
//import fileDownloader from './fileDownloader';
import './FooterAbout.css';
//import jsPDF from 'jspdf';
import pdf from '../assets/CV_SørenTønnesen.pdf';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function FooterAbout() {

    const [tippyContent, setTippyContent] = useState("sorentoennesen@gmail.com");

    function downloadCV(e) {
        e.preventDefault();
        console.log("Downloading CV...")
        window.open(pdf);
    }
    function alertNotImplemented(e) {
        alert('Not yet implemented. If you click send, you can view my CV.')
    }
    function resetTippy() {
        setTippyContent("sorentoennesen@gmail.com")
    }


    return (
        

        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Send a copy of my resumé
                </p>
                <div className="input-areas-custom">
                        <input type="email" name="email" placeholder="Your email" className="footer-input" onClick={(e) => alertNotImplemented(e)}/>
                        <Button buttonStyle='btn--outline' onClick={(e) => downloadCV(e)}>Send</Button>
                </div>
            </section>
            <section className="social-media">
                <div className="social-media-wrap">
                    <small className="website-rights">Portfolio © 2021</small>
                    <div className="social-icons">
                        <Link
                            className='social-icon-link github'
                            to={{pathname: "https://github.com/SoerenToennesen"}}
                            target='_blank'
                            aria-label='Github'
                        >
                            <i className='fab fa-github' />
                        </Link>
                        <Tippy content={"29 17 99 60"} hideOnClick={false}>
                        <Link
                            className='social-icon-link-noclick phone'
                            aria-label='Phone'
                        >
                            <i className='fas fa-phone'/>
                        </Link>
                        </Tippy>
                        <Tippy content={tippyContent} hideOnClick={false}>
                        <Link
                            className='social-icon-link email'
                            aria-label='Youtube'
                            onMouseLeave={() => resetTippy()}
                        >
                            <span onClick={() => {
                                setTippyContent("Copied to clipboard!");
                                navigator.clipboard.writeText("sorentoennesen@gmail.com");
                            }}><i className='fas fa-envelope' /></span>
                        </Link>
                        </Tippy>
                        <Tippy content={"Copenhagen, Denmark"} hideOnClick={false}>
                        <Link
                            className='social-icon-link-noclick location'
                            aria-label='Location'
                        >
                            <i className='fas fa-street-view' />
                        </Link>
                        </Tippy>
                        <Link
                            className='social-icon-link linkedin'
                            to={{pathname: "https://www.linkedin.com/in/soerentoennesen/"}}
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                    <small className="website-rights">Last updated 05-05-2021</small>
                </div>
            </section>
        </div>
    )
}

export default FooterAbout
