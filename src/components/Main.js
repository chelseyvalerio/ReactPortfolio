import React from 'react';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
// import ContactLinks from './ContactLinks';
import Resume from './Resume';

function Main({ currentPage, isInsideHeader }) {
    const renderPage = () => {
        if (currentPage === 'Home') {
          return <About />;
        }
        else if (currentPage === 'About') {
            return <About />;
          }
        else if (currentPage === 'Projects') {
          return <Projects />;
        }
        else if (currentPage === 'Contact') {
                return <Contact />;
        }
        else if (currentPage === 'Resume') {
                return <Resume />;
        }
        else {
            return null;
        }
      };

  return (
    <div className='container'>
        {isInsideHeader && <Contact/>}
      {renderPage()}      
    </div>
  );
}

export default Main;