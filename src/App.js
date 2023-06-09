import React, { useState } from "react";
import Nav from "../src/components/NavBar";
import Page from "../src/components/Main";
import Footer from "../src/components/Footer";
import "./css/style.css";
import "./App.css";


function App() {
  // const [pages] = useState([
  //   {
  //     name: "About Me"
  //   },
  //   { name: "Works" },
  //   { name: "Let's Connect" },
  //   {
  //     name: "Resume"
  //   }
  // ]);

  // const [currentPage, setCurrentPage] = useState(pages[0].name);

  return (
    <div>
      {/* <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header> */}
      <main>
        <Page 
        ></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;


