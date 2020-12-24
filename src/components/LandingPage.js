import React from 'react';
import Hero from './Hero';
import Feature from './Feature';
import Button from './Button';
import './LandingPage.css';
import atm from '../images/atm.jpeg';
import piggyBank from '../images/piggybank.jpeg';
import money from '../images/money.jpeg';

const LandingPage = () => {
    return (
        <div>
            <main className='LandingPage-main'>
                <Hero />
            </main>
            <section className="LandingPage-secondary-container" key='LandingPage-secondary-container'>
                <Feature title='Make Deposits.' description='Deposit your spare cash with our easy-to-use system.' img={piggyBank} alt='piggy bank' />
                <Feature title='Make Withdrawals.' description='Access your cash when you need it, from the convenience of your laptop.' img={atm}  alt='atm' />
                <Feature title='Make Transfers.' description='Transfer money to your friends with the click of a button.' img={money} alt='money and pen' />
                <div className="LandingPage-join">
                    <h3>Join Today!</h3>
                    <Button to="/signup">Sign Up</Button>
                </div>
            </section>
            <footer className='LandingPage-footer'>
                For demonstration purposes only, not a real bank.  Made by Justin Wasserstein in 2020.
            </footer>
        </div>
        );
};

export default LandingPage;