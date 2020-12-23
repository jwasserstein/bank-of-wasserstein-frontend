import React from 'react';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Join from '../components/Join';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div>
            <main className='LandingPage-main'>
                <Hero />
            </main>
            <section className="LandingPage-secondary-container" key='LandingPage-secondary-container'>
                <Feature title='Make Deposits.' description='Deposit your spare cash with our easy-to-use system.' />
                <Feature title='Make Withdrawals.' description='Access your cash when you need it, from the convenience of your laptop.' />
                <Feature title='Make Transfers.' description='Transfer money to your friends with the click of a button.' />
                <Join />
            </section>
            <footer className='LandingPage-footer'>
                For demonstration purposes only, not a real bank.  Made by Justin Wasserstein in 2020.
            </footer>
        </div>
        );
};

export default LandingPage;