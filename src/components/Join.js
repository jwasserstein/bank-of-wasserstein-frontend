import React from 'react';
import {Link} from 'react-router-dom';
import './Join.css';

const Join = () => (
    <div className="join">
        <h3>Join Today!</h3>
        <Link className="signup-btn" to="/signup">Sign Up</Link>
    </div>
);

export default Join;