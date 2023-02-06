/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from 'react';
import foto from '../assets/img/foto.jpeg'; 
import WOW from 'wowjs';
import '../styles/AboutMe.css';

const AboutMe = ( props ) => {

    const { theme } = props;

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
  
    return (
        <>
            <a href="#aboutMe" name='aboutMe'/>
            <div className='about-container' data-theme={theme}>
                <div className='title-box span1 wow animate__animated animate__zoomIn animate__delay-0.5s'>
                    <p>SOBRE MÍ</p>
                </div> 
                <div className='body-about'>
                    <div className='box-image wow animate__animated animate__zoomIn animate__delay-0.5s'>
                        <img className='foto' src={foto} alt="logo" />
                    </div> 
                    <div className='text-box span1 wow animate__animated animate__zoomIn animate__delay-0.5s'>    
                        <p>¡Hola! Me llamo Fabricio y soy de Buenos Aires, Argentina. Soy Desarrollador Web Full Stack y estoy en busca de mi primera experiencia laboral en IT. Actualmente soy estudiante avanzado de la Tecnicatura Universitaria en Programación Informática de la Universidad Nacional de Quilmes, y durante este período aprendí tecnologías tanto de Frontend como de Backend. </p> 
                        <p>Me considero una persona responsable, creativa, detallista y con muchas ganas de seguir aprendiendo nuevas habilidades y tecnologías para mi desarrollo profesional. También tengo un fuerte compromiso con los proyectos que me asignan, con el trabajo en equipo, y doy lo mejor de mí para completar las tareas con el mejor resultado posible.</p>
                        <p>He desarrollado varios proyectos utilizando diferentes lenguajes y tecnologías, tengo experiencia y un buen manejo en lo que respecta al trabajo en equipo, tambien tengo conocimientos sobre las metodologías ágiles (SCRUM).</p>
                    </div>
                </div>
            </div>
        </>  
    );
  }
  
  export default AboutMe;