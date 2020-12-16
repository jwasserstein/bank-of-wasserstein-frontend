import React from 'react';
import './Feature.css';

const Feature = props => (
    <div className="Feature">
        <div className="Feature-image-placeholder"></div>
        <div className="Feature-text">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    </div>
);

export default Feature;