/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from 'react';
import { FaGithub, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaBootstrap, FaNode, FaJava } from "react-icons/fa";
import { DiMongodb, DiMysql, DiScrum, DiTrello } from "react-icons/di"; 
import { SiSpring, SiGradle, SiApachemaven, SiPostman, SiExpress, SiNeo4J } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import WOW from 'wowjs';
import '../styles/Skills.css';

const Skills = () => {

   useEffect(() => {
      new WOW.WOW({
        live: false
      }).init();
    }, [])
  
    return (
      <>
         <a href="#skills" name='skills'/>
         <div className='skills-container'>
            <div className='title-box wow animate__animated animate__zoomIn'>
               <p>MIS HABILIDADES / CONOCIMIENTOS</p>
            </div> 
            <div className='box-icons wow animate__animated animate__zoomIn'>
               <div className='icon hvr-grow-shadow'>
                  <FaHtml5 className="icon-skill" size={70}/>
                  <div className='add-title'>
                     <p className="title-icon">HTML</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <FaCss3Alt className="icon-skill" size={70}/>
                  <div className='add-title'>
                  <p className="title-icon">CSS</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <FaBootstrap className="icon-skill" size={70}/>
                  <div className='add-title'>
                  <p className="title-icon">Bootstrap</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <FaJs className="icon-skill" size={70}/>
                  <div className='add-title'>
                  <p className="title-icon">Javascript</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <FaReact className="icon-skill" size={70}/>
                  <div className='add-title'>
                  <p className="title-icon">React.js</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <FaJava className="icon-skill" size={70}/>
                  <div className='add-title'>
                     <p className="title-icon">Java</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <TbBrandKotlin className="icon-skill" size={70}/>
                  <div className='add-title'>
                     <p className="title-icon">Kotlin</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <FaNode className="icon-skill" size={70}/>
                  <div className='add-title'>
                     <p className="title-icon">Node.js</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <SiExpress className="icon-skill" size={70}/>
                  <div className='add-title'>
                     <p className="title-icon">Express</p>
                  </div>
                                 </div>
               <div className='icon hvr-grow-shadow'>
                  <DiMysql className="icon-skill" size={70}/>
                  <div className='add-title'>
                     <p className="title-icon">MySQL</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <DiMongodb className="icon-skill" size={70}/>
                  <div className='add-title'>
                     <p className="title-icon">MongoDB</p>
                  </div>                
               </div>
               <div className='icon hvr-grow-shadow'>
                  <SiNeo4J className="icon-skill" size={70}/>
                  <div className='add-title'>
                     <p className="title-icon">Neo4J</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <SiSpring className="icon-skill" size={70}/>
                  <div className='add-title'>
                     <p className="title-icon">Spring Boot</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <SiApachemaven className="icon-skill" size={70}/>
                  <div className='add-title'>
                     <p className="title-icon">Maven</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <SiGradle className="icon-skill" size={70}/>
                  <div className='add-title'>
                     <p className="title-icon">Gradle</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <DiTrello className="icon-skill" size={70}/>
                  <div className='add-title'>
                     <p className="title-icon">Trello</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <SiPostman className="icon-skill" size={70}/>
                  <div className='add-title'>
                     <p className="title-icon">Postman</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <DiScrum className="icon-skill" size={70}/>
                  <div className='add-title'>
                     <p className="title-icon">Scrum</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <FaGithub className="icon-skill" size={70}/>
                  <div className='add-title'>
                     <p className="title-icon">Github</p>
                  </div>
               </div>
               <div className='icon hvr-grow-shadow'>
                  <FaGitAlt className="icon-skill" size={70}/>
                  <div className='add-title'>
                     <p className="title-icon">Git</p>
                  </div>
               </div>
            </div> 
         </div>
      </>
    );
  }
  
  export default Skills;