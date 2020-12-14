import React from 'react';
import './Feature.css';

const Feature = props => (
    <div class="feature">
        <div class="image-placeholder"></div>
        <div class="feature-text">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    </div>
);

export default Feature;