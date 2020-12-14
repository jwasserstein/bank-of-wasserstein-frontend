import React from 'react';
import Hero from '../components/Hero';
import Navbar from './Navbar';
import Feature from '../components/Feature';
import Join from '../components/Join';
import './LandingPage.css';

const LandingPage = () => {
    return ([
        <main key='main'>
            <Navbar />
            <Hero />
        </main>,
        <section className="secondary-container" key='secondary-container'>
            <Feature title='Make Deposits.' description='Deposit your spare cash with our easy-to-use system.' />
            <Feature title='Make Withdrawals.' description='Access your cash when you need it, from the convenience of your laptop.' />
            <Feature title='Make Transfers.' description='Transfer money to your friends with the click of a button.' />
        </section>,
        <Join key='join' />,
        <footer key='footer'>
            For demonstration purposes only, not a real bank.  Made by Justin Wasserstein in 2020.
        </footer>
        ]);
};

export default LandingPage;