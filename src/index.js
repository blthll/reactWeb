import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <div>
    <Routes >
      <Route exact path="/" element={<App/>} />
      <Route path="/about"element={<About/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes > 
  </div>
</Router>
);

