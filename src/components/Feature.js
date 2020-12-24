import React from 'react';
import './Feature.css';

const Feature = ({title, description, img, alt}) => (
    <div className="Feature">
        <img className="Feature-image" src={img} alt={alt} />
        <div className="Feature-text">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

export default Feature;