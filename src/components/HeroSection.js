import React from 'react';
import '../App.css';
import Button from './Button';
import './HeroSection.css';
import Typical from 'react-typical';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-3.mp4" autoPlay loop muted/>
            <h1>{'S\u00D8 D\u00D8'}</h1>
            <p>A page out of my book</p>
            <p>I'm{' '}
                <Typical loop={Infinity} wrapper="b" steps={[
                    'a abc',//developer',
                    1000,
                    'a def',//musician',
                    1000,
                    'a ghi',//health enthusiast',
                    1000,
                    'a jkl',//traveller',
                    1000,
                    'a mno',//student',
                    1000,
                    'an pqr',//epistemophile',
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
