import React from 'react';
import '../App.css';
import Button from './Button';
import './HeroSection.css';
import Typical from 'react-typical';
import Cards from './Cards';
import FooterShort from './FooterShort';

function HeroSection() {
    return (
        <>
        <div className='hero-container-projects'>
            {/*<video src="/videos/video-3.mp4" autoPlay loop muted/>*/}
            <h1>Projects</h1>
            <p>"The question of whether computers can think is like the question whether submarines can swim."</p>
        </div>
        <Cards />
        <FooterShort />
        </>
    )
}

export default HeroSection
