import React from 'react';

import burgerLogo from "../../assets/images/burger-logo.png";
import "./Logo.css";

function Logo(props) {
    return (
        <div className="Logo">
            <img src={burgerLogo} alt="Website Logo"/> 
        </div>
    )
}

export default Logo
