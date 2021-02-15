import React from 'react';
import './AboutPage.css';

const AboutPage = () => (
    <div>
        <div className='AboutPage-container'>
            <h2 className='AboutPage-title'>About BANK OF WASSERSTEIN</h2>
            <p>BANK OF WASSERSTEIN is a demonstration banking application that allows users to create 
                checking, savings, and investing accounts, submit deposits and withdrawals, and transfer 
                money to other users. It’s a single page, fullstack application that uses React and 
                Redux on the frontend and Node.js, Express, and MongoDB on the backend. The frontend is 
                served by GitHub Pages and the backend runs on Heroku with a managed database provided by 
                MongoDB Atlas. It was designed using Figma.</p>
            <p>Hand-rafted with <span className='AboutPage-heart'>❤</span> in Glastonbury, Connecticut.</p>
        </div>
    </div>
);

export default AboutPage;