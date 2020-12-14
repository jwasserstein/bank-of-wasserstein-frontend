import React from 'react';
import './Hero.css';

const Hero = () => (
    <div className="main-container">
        <div className="main-text">
            <h2>Banking Reimagined.</h2>
            <p>Start saving for the future of your dreams.</p>
        </div>
        <img className="coins-growing" src="imgs/coins-growing.jpeg" alt="coins growing" />
    </div>
);

export default Hero;