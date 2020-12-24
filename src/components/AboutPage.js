import React from 'react';
import './AboutPage.css';

const AboutPage = () => (
    <div>
        <div className='AboutPage-container'>
            <h2 className='AboutPage-title'>About BANK OF WASSERSTEIN</h2>
            <p>BANK OF WASSERSTEIN is a demonstration banking application made for the purposes of learning React and Redux.  
                It allows users to create accounts, submit transactions, and transfer money to other users.  It was designed in Figma and uses the following technologies:</p>
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