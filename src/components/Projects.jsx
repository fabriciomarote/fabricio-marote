/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import projects from "../data/Projects.js";
import ModelProject from './ModelProject.jsx';
import WOW from 'wowjs';
import '../styles/Projects.css';

const Proyects = () => {

    const [current, setCurrent] = useState(0);
    const [viewProjects, setViewProjects] = useState(projects);
    const length = viewProjects.length;

    const nextProject = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
    const prevProject = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const projectsBy = (type) => {
        let newProjects = [];
        projects.map((project, id) => project.type === type ? newProjects.push(project) : []); 
        return newProjects;
    };

    const changeView = (type) => {
        setViewProjects(projectsBy(type));
        setCurrent(0);
    };

    useEffect(() => {
        if (!Array.isArray(projects) || projects.length <= 0) {
            return null;
        };
    }, []); 
      
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, []);  

    return (
        <>
            <a href="#projects" name='projects'/>
            <div className='projects-box-container'>
                <div className='wow animate__animated animate__zoomIn'>
                    <div className='title-box'>
                        <span>M</span>
                        <span>I</span>
                        <span>S </span>
                        <span>P</span>
                        <span>R</span>
                        <span>O</span>
                        <span>Y</span>
                        <span>E</span>
                        <span>C</span>
                        <span>T</span>
                        <span>O</span>
                        <span>S</span>
                    </div>
                </div> 
                <div className='buttons-box wow animate__animated animate__zoomIn'>
                    <button className='buttons hvr-sweep-to-top' onClick={() => { changeView("Backend") }}>Back End</button>
                    <button className='buttons hvr-sweep-to-top' onClick={() => { changeView("Fullstack") }}>Full Stack</button>
                    <button className='buttons hvr-sweep-to-top' onClick={() => { changeView("Frontend") }}>Front End</button>
                </div> 
                <div className='box-home-2'>
                    <div className='box-projects'>
                        { viewProjects.map((project) => {                        
                            return   <ModelProject key={project.id} project={project}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
  
export default Proyects;


/*

<div className='box-projects'>
    <MdArrowBackIosNew className='left-arrow' onClick={prevProject} />
    <MdArrowForwardIos className='right-arrow' onClick={nextProject} />
    { viewProjects.map((project, index) => {
        return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && ( 
                    <ModelProject key={project.id} project={project}/>
                )}
            </div>
        );
    })}
</div>

*/