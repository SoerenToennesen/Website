import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Typical from 'react-typical';
import FooterShort from '../FooterShort';

export default function Projects() {
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
    );
}