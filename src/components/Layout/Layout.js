import './Layout.css';

const Layout = (props)=>{
    return(
    <>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className="content">
        {props.children}
    </main>
    </>
    )
}

export default Layout;