import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App2 from './components/App.jsx';
import Project from './components/Project.jsx';
import InvalidRoute from './components/InvalidRoute';
import useLocalStorage from 'use-local-storage';
import './styles/App.css';

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
     <> 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App2 theme={theme} setTheme={setTheme}/>} />
          <Route path="/projects/:idProject" element={<Project theme={theme} setTheme={setTheme}/>} />
          <Route path="*" element={<InvalidRoute theme={theme}/>} />
          <Route path="/invalid-route" element={<InvalidRoute theme={theme}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
