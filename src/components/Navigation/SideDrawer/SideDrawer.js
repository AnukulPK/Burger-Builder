import React from 'react';

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/Backdrop/Backdrop";
import "./SideDrawer.css";

const sideDrawer = (props)=>{
    let attachedClasses = ["SideDrawer","Close"];
    if(props.open){
        attachedClasses=["SideDrawer","Open"];
    }
    return(
        <>
        <BackDrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className="logo-1">
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </>
    );
}

export default sideDrawer;