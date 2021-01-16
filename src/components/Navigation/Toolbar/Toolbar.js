import React from 'react';
import Logo from '../../Logo/Logo';
import './Toolbar.css';
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props)=>(
    <header className="Toolbar">
        <div>MENU</div>
        <div className="logo">
            <Logo/>
        </div>
        <nav className="DesktopOnly">
        <NavigationItems/>
        </nav>
    </header>
)

export default toolbar;