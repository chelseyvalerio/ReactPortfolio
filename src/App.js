import React, { useState } from "react";
import Header from "../src/components/Header";
import Nav from "../src/components/NavBar";
import Page from "../src/components/Main";
import Footer from "../src/components/Footer";

function App() {
  const [pages] = useState([
    {
      name: "About Me"
    },
    { name: "Works" },
    { name: "Let's Connect" },
    {
      name: "Resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;


