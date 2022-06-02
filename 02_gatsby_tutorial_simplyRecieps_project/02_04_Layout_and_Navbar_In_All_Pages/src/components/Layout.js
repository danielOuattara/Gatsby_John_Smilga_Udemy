import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({ children }) => {
    return (
        <>
            <Navbar/>
            <hr />
            { children }
            <hr />
            <Footer/>
        </>
    );
}
export default Layout;
