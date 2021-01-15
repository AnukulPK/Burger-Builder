import './Layout.css';
import SideDrawer from  '../Navigation/SideDrawer/SideDrawer';
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props)=>{
    return(
    <>
    <Toolbar/>
    <SideDrawer/>
    <main className="content">
        {props.children}
    </main>
    </>
    )
}

export default Layout;