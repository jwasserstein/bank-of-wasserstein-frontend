import React from 'react';
import './Feature.css';

const Feature = ({title, description, img}) => (
    <div className="Feature">
        <img className="Feature-image" src={img} />
        <div className="Feature-text">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

export default Feature;