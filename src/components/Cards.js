import React from 'react';
import CardItems from './CardItems';
import './Cards.css';

function Cards() {
    return (
        <div className="cards" style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
            <h1>Selected projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems 
                            src="images/starthacklogo3.jpg"
                            text="Entrepreneurial hackathon | STARTHack 2021"
                            label="Python, ReactJS, Flask"
                            path="https://app.hackjunction.com/projects/start-hack/view/6055b89a4aa8b7004355cab6"
                        />
                        <CardItems 
                            src="images/netcompanylogo.png"
                            text="Case competition | Netcompany 2021"
                            label="Design, Miro"
                            path="https://ibb.co/476zLcs"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItems 
                            src="images/bscthesisimg.png"
                            text="Generic industrial interfacing solution"
                            label="C, serial, Modbus, Python, PyQt"
                            path="https://github.com/SoerenToennesen/Development-of-firmware-for-interfacing-with-sensors-for-industrial-applications"
                        />
                        <CardItems 
                            src="images/UserListPane.jpg"
                            text="Instant messaging application"
                            label="Java, Spring"
                            path="https://github.com/SoerenToennesen/34318ProgrammingProjectInNetworkTechnologyAndIT"
                        />
                        <CardItems 
                            src="images/2048ai.png"
                            text="2048 game with self-playing minimax AI"
                            label="Java, Swing, minimax search AI"
                            path="https://github.com/SoerenToennesen/2048AI"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
