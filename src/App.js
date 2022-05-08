// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Layout from './Component/Layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './Pages/Main.js'
import Resume from './Pages/Resume.js'
import Contact from './Pages/Contact.js'
import Project from './Pages/Project.js'

function App() {
  return (
    <> 
    <Router>
  

    <Routes>
    <Route path="/" caseSensitive={false} element={<Main />} />
    <Route path="/resume" caseSensitive={false} element={<Resume />} />
    <Route path="/contact" caseSensitive={false} element={<Contact />} />
    <Route path="/project" caseSensitive={false} element={<Project />} />
    </Routes>   
    
      
    </Router>
    </>
  );
}

export default App;
