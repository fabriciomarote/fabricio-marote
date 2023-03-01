/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import '../styles/Home.css';

const Home = ({ theme }) => {

    return (
        <>
            <a href="#home" name='home'/>
            <div className='home-container col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' data-theme={theme}>
                <div className='box-home col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                    <span className='animate__animated animate__lightSpeedInLeft animate__delay-1s'>Hola,</span>
                    <span className='animate__animated animate__lightSpeedInLeft animate__delay-1s'>Soy Fabricio.</span>
                    <span className='span1 animate__animated animate__lightSpeedInRight animate__delay-1s'>Desarrollador Web</span>
                    <span className='span1 animate__animated animate__lightSpeedInRight animate__delay-1s'>Full Stack</span>
                </div> 
            </div>
        </>
    );
};
  
export default Home;