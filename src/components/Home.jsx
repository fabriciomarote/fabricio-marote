import React from 'react';
import '../styles/Home.css';

const Home = ( props ) => {

    const { theme } = props;

    return (
        <>
            <a name='inicio'/>
            <div className='home-container' data-theme={theme}>
                <div className='box-home' >
                        <span className='animate__animated animate__lightSpeedInLeft animate__delay-2s'>Hola,</span>
                        <span className='animate__animated animate__lightSpeedInLeft animate__delay-2s'>Soy Fabricio.</span>
                        <span className='span1 animate__animated animate__lightSpeedInRight animate__delay-2s'>Desarrollador Web</span>
                        <span className='span1 animate__animated animate__lightSpeedInRight animate__delay-2s'>Full Stack</span>
                </div> 
            </div>
        </>
    );
  }
  
  export default Home;

  /*

    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(../assets/img/fondos/background.jpg);
    background-size: cover;
    background-position: center center;
    height: 100vh;

  */