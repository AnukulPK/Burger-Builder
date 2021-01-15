import React from 'react';
import Logo from '../../Logo/Logo';
import './Toolbar.css';
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props)=>(
    <header className="Toolbar">
        <div>MENU</div>
        <Logo/>
        <NavigationItems/>
    </header>
)

export default toolbar;