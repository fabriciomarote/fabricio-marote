import React from "react";
import '../styles/ModelProject.css';

const ModelProject = (props) => {

    const { project } = props

    return (
            <div className="modelProject-container wow animate__animated animate__flipInY animate__delay-0.5s">
                <img alt="imagen" className="image-project1" src={project.image}></img>
                <div className="add-info">
                    <p className="title">{project.title}</p>
                    <a href={`/projects/${project.id}`} className='project-button hvr-shutter-in-horizontal'>Ver Proyecto</a>
                </div>
            </div>
    );
};
  
export default ModelProject;
