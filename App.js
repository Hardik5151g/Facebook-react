import React from 'react';
import './App.css';

import Header from './component/Header';
import About from './component/about';
import Services from './component/services';
import Project from './component/projects';
import Contact from './component/contact';


function App(){
  return(
    
    <>
    <Header/>
    <About/>
    <Services/>
    <Project/>
    <Contact/>
    </>
    
  )
}

export default App;