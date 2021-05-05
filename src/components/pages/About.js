import React from 'react';
import '../../App.css';
import CalendarHeatMap from '../CalendarHeatMap';
import Footer from '../Footer';
import FooterAbout from '../FooterAbout';


export default function About() {
    return (
        <>
            <div className='hero-container-about'>
                <h1>About me</h1>
                <p>I was introduced to software development through entrepreneurial
                    projects, which convinced me to pursue an education in computer
                    science. My interests lie in high-level data analysis and
                    manipulation, including machine learning techniques and AI-based
                    algorithms, in combination with microservice software architecture
                    and IoT solutions.</p>
                    {/*<Footer />*/}
            </div>
            <FooterAbout />
            
            {/*<div>
                <div>Short bio</div>
                <div>Community (voluntary work, webinars, hackathons, etc.)</div>
                <div>Bucketlist</div>
                <div>Find me on here (link social media - LinkedIn, DevPost, GitHub, etc.)</div>
                <div>Link to CV (PDF on google drives or something)</div>
                <div>Let's Talk [link to contact me]</div>
                
                <div>Remember [last updated on XXX] on homepage footer</div>
            </div>*/}
            {/*<CalendarHeatMap />*/}
        </>
    )
}