import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;

