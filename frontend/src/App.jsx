import React, { useState } from 'react';
import Navbar from './components/Navbar'; 
import HeroSection from './components/HeroSection'; 
import Skills from './components/Skills'; 
import Portfolio from './components/Portfolio'; 
import Footer from './components/Footer';  
import './App.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? "dark" : "light"}>
      <Navbar  />
      <HeroSection />
      <Skills />
      <Portfolio />
      <Footer /> 
    </div>
  );
} 

export default App;
