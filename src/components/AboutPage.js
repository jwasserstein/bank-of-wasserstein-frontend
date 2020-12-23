import React from 'react';
import './AboutPage.css';

const AboutPage = () => (
    <div>
        <div className='AboutPage-container'>
            <h2 className='AboutPage-title'>About BANK OF WASSERSTEIN</h2>
            <p>BANK OF WASSERSTEIN is a demonstration banking application that allows users to create accounts and submit transactions.  
                It was made to practice creating React applications.  It uses the following technologies:</p>
            <ul>
                <li><strong>Front-end</strong>: React and Redux</li>
                <li><strong>Back-end</strong>: Node.js and Express</li>
                <li><strong>Database</strong>: MongoDB</li>
            </ul>
            <p>Hand-crafted with <span className='AboutPage-heart'>❤</span> in Glastonbury, Connecticut.</p>
        </div>
    </div>
);

export default AboutPage;