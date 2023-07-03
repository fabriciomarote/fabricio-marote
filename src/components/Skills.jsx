/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from 'react';
import { FaGithub, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaBootstrap, FaNode, FaJava } from "react-icons/fa";
import { DiMongodb, DiMysql, DiScrum, DiTrello } from "react-icons/di"; 
import { SiSpring, SiGradle, SiApachemaven, SiPostman, SiSwagger, SiNeo4J, SiSonarcloud } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import WOW from 'wowjs';
import '../styles/Skills.css';

const Skills = () => {

   useEffect(() => {
      new WOW.WOW({
        live: false
      }).init();
    }, []);
  
   return (
      <>
         <a href="#skills" name='skills'/>
         <div className='skills-container'>
            <div className='title-box wow animate__animated animate__zoomIn'>
               <span className='hvr-underline-from-center'>MIS CONOCIMIENTOS</span>
            </div> 
            <div className='box-icons wow animate__animated animate__zoomIn'>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <FaHtml5 className="icon-skill" size={60}/>
                     <span className="title-icon">HTML</span>   
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <FaCss3Alt className="icon-skill" size={60}/>
                     <span className="title-icon">CSS</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <FaBootstrap className="icon-skill" size={60}/>
                     <span className="title-icon">Bootstrap</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <FaJs className="icon-skill" size={60}/>
                     <span className="title-icon">Javascript</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <FaReact className="icon-skill" size={60}/>
                     <span className="title-icon">React.js</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <FaJava className="icon-skill" size={60}/>
                     <span className="title-icon">Java</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <TbBrandKotlin className="icon-skill" size={60}/>
                     <span className="title-icon">Kotlin</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <FaNode className="icon-skill" size={60}/>
                     <span className="title-icon">Node.js</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <SiSwagger className="icon-skill" size={60}/> 
                     <span className="title-icon">Swagger</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <DiMysql className="icon-skill" size={60}/>  
                     <span className="title-icon">MySQL</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <DiMongodb className="icon-skill" size={60}/>                
                     <span className="title-icon">MongoDB</span>
                  </div>                
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <SiNeo4J className="icon-skill" size={60}/>     
                     <span className="title-icon">Neo4J</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <SiSpring className="icon-skill" size={60}/>
                     <span className="title-icon">Spring Boot</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <SiApachemaven className="icon-skill" size={60}/>   
                     <span className="title-icon">Maven</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <SiGradle className="icon-skill" size={60}/>
                     <span className="title-icon">Gradle</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <DiTrello className="icon-skill" size={60}/>
                     <span className="title-icon">Trello</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <SiPostman className="icon-skill" size={60}/>
                     <span className="title-icon">Postman</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <DiScrum className="icon-skill" size={60}/>
                     <span className="title-icon">Scrum</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <FaGithub className="icon-skill" size={60}/> 
                     <span className="title-icon">Github</span>
                  </div>
               </div>
               <div className='contenedor'>
                  <div className='tarjeta hvr-grow-shadow'>
                     <FaGitAlt className="icon-skill" size={60}/>
                     <span className="title-icon">Git</span>
                  </div>
               </div>
            </div> 
         </div>
      </>
    );
};
  
export default Skills;