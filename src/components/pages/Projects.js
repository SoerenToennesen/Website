import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Typical from 'react-typical';
import HeroSectionProjects from '../HeroSectionProjects';

export default function Projects() {
    return (
        <>
            <HeroSectionProjects />
            {/*<h1 className='projects'>Projects</h1>
            <p>I'm{' '}
                <Typical loop={Infinity} wrapper="b" steps={[
                    'a developer',//developer',
                    1000,
                    'a musician',//musician',
                    1000,
                    'a health enthusiast',//health enthusiast',
                    1000,
                    'a traveller',//traveller',
                    1000,
                    'a student',//student',
                    1000,
                    'an epistemophile',//epistemophile',
                    5000
                ]} />
            </p>
            <Cards />*/}
        </>
    );
}