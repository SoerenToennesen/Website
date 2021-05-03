import React from 'react';
import '../../App.css';
import CalendarHeatMap from '../CalendarHeatMap';
import AboutMe from '../AboutMe';
import Footer from '../Footer';


export default function About() {
    return (
        <>
            <h1 className='about'>About me</h1>
            <AboutMe />
            <CalendarHeatMap />
            <Footer />
        </>
    )
}