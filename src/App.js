import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import App2 from './components/App.jsx';
import Project from './components/Project.jsx';
import InvalidRoute from './components/InvalidRoute';

function App() {

  return (
     <> 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App2/>} />
          <Route path="/projects/:idProject" element={<Project/>} />
          <Route path="*" element={<InvalidRoute/>} />
          <Route path="/invalid-route" element={<InvalidRoute/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
