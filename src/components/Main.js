import React, {useState} from 'react';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Nav from "./NavBar";
import Header from './Header';
import image from '../images/ellieandI.jpeg';

// import ContactLinks from './ContactLinks';
import Resume from './Resume';

function Main() {

  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("current",currentPage,page)
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };




  return (
    <div className='container'>
        <header className="header">
            <h1><a href="/react-portfolio">My Portfolio</a></h1>
            <img src={image} alt="elliebear and I"></img>
            
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
        {/* {<Contact/>} */}
     
      {renderPage()}      
    </div>
  );
}

export default Main;


  // const renderPage = () => {
    //     if (currentPage === 'Home') {
    //       return <About />;
    //     }
    //     else if (currentPage === 'About') {
    //         return <About />;
    //       }
    //     else if (currentPage === 'Projects') {
    //       return <Projects />;
    //     }
    //     else if (currentPage === 'Contact') {
    //             return <Contact />;
    //     }
    //     else if (currentPage === 'Resume') {
    //             return <Resume />;
    //     }
    //     else {
    //         return null;
    //     }
    //   };