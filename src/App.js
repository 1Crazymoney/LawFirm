import "./App.css";

import React  from "react";
import {Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {default as DisclaimerPopup} from './components/DisclaimerPopup.jsx'
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx"
import Services from "./components/Services.jsx"
import About from "./components/About.jsx"
 
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={ < About  />} />
      </Routes>
      <DisclaimerPopup/>
    </div>
    
  );
}

export default App;
