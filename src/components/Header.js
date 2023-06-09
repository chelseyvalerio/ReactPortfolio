import React, { useState } from 'react';
import Nav from './NavBar';
import PageContent from './PageContent';
import image from '../images/ellieandI.jpeg';



function Header(props) {

    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
        <header className="header">
            <h1><a href="/react-portfolio">My Portfolio</a></h1>
            <img src={image} alt="elliebear and I"></img>
            {props.children}
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
        <PageContent currentPage={currentPage} isInsideHeader={true} />
        </>
    );
}

export default Header;