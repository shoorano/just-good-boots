import React from 'react';
import './icon.scss';


const Icon = () => (
        <div className="icon-container">
            <img className="icon" src={ process.env.PUBLIC_URL + "/icon.svg" } alt="icon"/>
            <p className="icon-footer">JUST GOOD BOOTS</p>
        </div>
);

export default Icon;