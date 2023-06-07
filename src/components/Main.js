import React, {useState} from 'react';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Nav from "./NavBar";
// import ContactLinks from './ContactLinks';
import Resume from './Resume';

function Main({ currentPage }) {

  const [currentPageName, setCurrentPageName] = useState('About');

  const handlePageChange = (page) => {
    setCurrentPageName(page);
  };

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };




  return (
    <div className='container'>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {<Contact/>}
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