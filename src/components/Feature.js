import React from 'react';
import './Feature.css';

const Feature = props => (
    <div className="feature">
        <div className="image-placeholder"></div>
        <div className="feature-text">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    </div>
);

export default Feature;