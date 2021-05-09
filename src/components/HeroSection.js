import React from 'react';
import '../App.css';
import './HeroSection.css';
import Typical from 'react-typical';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/*<video src="/videos/video-3.mp4" autoPlay loop muted/>*/}
            <h1>{'S\u00F8ren T\u00F8nnesen'}</h1>
            <p>I'm{' '}
                <Typical loop={Infinity} wrapper="b" steps={[
                    'a developer',
                    1000,
                    'a musician',
                    1000,
                    'a golfer',
                    1000,
                    'a student',
                    1000,
                    'an epistemophile',
                    5000
                ]} />
            </p>
            {/*<div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' linkto='projects'>PROJECTS</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>GET TO KNOW ME BETTER<i className='far fa-play-circle' /></Button>
            </div>*/}
        </div>
    )
}

export default HeroSection
