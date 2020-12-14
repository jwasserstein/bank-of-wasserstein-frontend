import React from 'react';
import Hero from '../components/Hero';
import Navbar from './Navbar';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <main>
            <Navbar />
            <Hero />
        </main>
    );
};

export default LandingPage;