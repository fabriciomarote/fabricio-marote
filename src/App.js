import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import App2 from './components/App.jsx';
import Project from './components/Project.jsx';

function App() {

  return (
     <> 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App2/>} />
          <Route path="/projects/:idProject" element={<Project/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
