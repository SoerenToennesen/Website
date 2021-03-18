import React from 'react';
import '../App.css';
import Button from './Button';
import './HeroSection.css';
import Typical from 'react-typical';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-3.mp4" autoPlay loop muted/>
            <h1>{'S\u00D8REN T\u00D8NNESEN'}</h1>
            <p>A page out of my book</p>
            <p>I'm{' '}
                <Typical loop={Infinity} wrapper="b" steps={[
                    'a developer',
                    1000,
                    'a musician',
                    1000,
                    'a health enthusiast',
                    1000,
                    'a traveller',
                    1000,
                    'a student',
                    1000,
                    'an epistemophile',
                    5000
                ]} />
            </p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>PROJECTS</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>GET TO KNOW ME BETTER<i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default HeroSection
