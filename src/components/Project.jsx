import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { FaGithub, FaPager } from "react-icons/fa";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import projects from "../data/Projects.js";
import NavBar2 from '../components/Navbar2.jsx';
import useLocalStorage from 'use-local-storage';
import '../styles/Project.css';

const Project = () => {

    const { idProject } = useParams();
    const navigate = useNavigate();

    const [project, setProject] = useState([]);
    const [techsProject, setTechsProject] = useState([]);
    const [imagesProject, setImagesProject] = useState([]);
    const [current, setCurrent] = useState(0);
    const length = imagesProject != undefined ? imagesProject.length : "";

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const disabled1 = project.link1 == null ? "not-active" : "";
    const disabled2 = project.link2 == null ? "not-active" : "";

    const nextProject = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
    const prevProject = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const projectById = (id) => {
        let pj;
        projects.find( project => {
            if (project.id == id) {
                pj = project;
            }    
        });        
        return pj == undefined ? navigate("/invalid-route") : pj
    };

    useEffect(() => {
        setProject(projectById(idProject));
        setTechsProject(project.techs);
        setImagesProject(project.images);
    }, [idProject, project]);

    const imagesByProject = () => {
        if (imagesProject != undefined) {
            return (
                <>
                    {imagesProject.map((image, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && ( 
                                <>
                                    { current > 0 ? <IoIosArrowDropleftCircle className='arrow-left' onClick={prevProject} /> : <></> }
                                    { current !== length -1 ? <IoIosArrowDroprightCircle className='arrow-right' onClick={nextProject} /> : <></>}                                    
                                    <img alt="imagen" className="p-image wow animate__animated animate__fadeIn" src={image} />
                                </>
                                )}
                            </div>
                        );
                    })}
                </>
            );
        } else {
            return (
                <>
                </>
            );
        }
    }

    const techsByProject = () => {
        if (techsProject != undefined) {
            return (
                <>
                
                    {techsProject.map(tech => {
                            return (
                                <div className="project-tech hvr-float-shadow">
                                    <p>{tech}</p>
                                </div>
                            );
                    })}
                </>
            );
        } else {
            return (
                <>
                </>
            );
        }
    }

    console.log( "current" + current)
    console.log(length)

    return (
        <>
            <div className="navbar">
                    <NavBar2 theme={theme} setTheme={setTheme} />
            </div> 
            <div className="project-container" data-theme={theme}>
                <div className="box-project wow animate__animated animate__zoomIn">    
                    <p className="title-project">{project.title}</p>
                    <div className="images-container">
                        {imagesByProject()} 
                        
                    </div>

                    <p className="text-project">{project.text}</p>
                    <p className="techs">Tecnologias utilizadas:</p>
                    <div className='box-techs'>
                        {techsByProject()} 
                    </div> 
                    <div className='box-buttons'>
                        <a href={project.link1} className='button-project hvr-bounce-to-right' id={disabled1}><FaPager size={23}/>Sitio Web</a>
                        <a href={project.link2} className='button-project hvr-bounce-to-right' id={disabled2}><FaGithub size={23}/>Repositorio</a>
                    </div>
                </div>
            </div>
        </>
    );
};
  
export default Project;