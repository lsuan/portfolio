import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Projects from './components/Projects';
// import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import * as bootstrap from 'bootstrap';
import Home from './components/Home';
import Profile from './components/Profile';
import ScrollToTop from './components/ScrollToTop';
// import Success from './components/Success';

function App() {
  // useEffect( () => {
  //   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  //   const _tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new window.bootstrap.Tooltip(tooltipTriggerEl))
  // });

  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/#profile" exact element={<Profile />} />
        <Route path="/projects" exact element={<Projects />} />
        {/* <Route path="/contact" exact element={<Contact />} />
        <Route path="/success" exact element={<Success />} /> */}
      </Routes>
    </Router>
  )
}

export default App;