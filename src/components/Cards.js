import React from 'react';
import CardItems from './CardItems';
import './Cards.css';

function Cards() {
    return (
        <div className="cards" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems 
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/projects"
                        />
                        <CardItems 
                            src="images/img-2.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label="Luxury"
                            path="/projects"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItems 
                            src="images/img-3.jpg"
                            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                            label="Mystery"
                            path="/projects"
                        />
                        <CardItems 
                            src="images/img-4.jpg"
                            text="Experience Football on Top of the Himilayan Mountains"
                            label="Adventure"
                            path="/projects"
                        />
                        <CardItems 
                            src="images/img-8.jpg"
                            text="Ride through the Sahara Desert on a guided camel tour"
                            label="Adrenaline"
                            path="/projects"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
