import {useState} from 'react';
import './Layout.css';
import SideDrawer from  '../Navigation/SideDrawer/SideDrawer';
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props)=>{
    const[showSideDrawer,setShowSideDrawer]=useState(true);

    const sideDrawerClosed = ()=>{
        setShowSideDrawer(false);
    }

    return(
    <>
    <Toolbar/>
    <SideDrawer open={showSideDrawer} closed={sideDrawerClosed}/>
    <main className="content">
        {props.children}
    </main>
    </>
    )
}

export default Layout;