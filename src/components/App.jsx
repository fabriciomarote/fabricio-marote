import React from 'react'
import NavBar from '../components/NavBar.jsx';
import Home from '../components/Home';
import Contact from '../components/Contact';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import ScrollButton from '../components/scroll/ScrollButton.jsx';
import useLocalStorage from 'use-local-storage';
import '../styles/App.css';

const App = () => {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
      <div className='app' data-theme={theme}>
        <div className="navbar">
          <NavBar theme={theme} setTheme={setTheme} />
        </div>
        <div> 
          <Home theme={theme} setTheme={setTheme} />
          <AboutMe theme={theme} setTheme={setTheme} />
          <Skills theme={theme} setTheme={setTheme} />
          <Projects theme={theme} setTheme={setTheme} />
          <Contact  theme={theme} setTheme={setTheme} />
          <Footer theme={theme} setTheme={setTheme} /> 
          <ScrollButton />
        </div>
        <div className="background-animated">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div> 
  );
};

export default App;
