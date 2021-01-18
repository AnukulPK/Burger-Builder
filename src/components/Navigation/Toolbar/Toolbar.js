import React from 'react';
import Logo from '../../Logo/Logo';
import './Toolbar.css';
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props)=>(
    <header className="Toolbar">
        <DrawerToggle/>
        <div className="logo">
            <Logo/>
        </div>
        <nav className="DesktopOnly">
        <NavigationItems/>
        </nav>
    </header>
)

export default toolbar;