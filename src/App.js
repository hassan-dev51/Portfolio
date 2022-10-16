import React from "react";

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Study from "./components/Study/Study";
import Work from "./components/Work/Work";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Study />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
