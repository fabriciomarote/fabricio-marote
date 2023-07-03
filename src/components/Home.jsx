/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import '../styles/Home.css';

const Home = ({ theme }) => {

    return (
        <>
            <a href="#home" name='home'/>
            <div className='home-container col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' data-theme={theme}>
                <div className='box-home col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                    <span className='span1 animate__animated animate__slideInDown animate__delay-0.5s'>HOLA, ME LLAMO</span>
                    <span className='span2'> FABRICIO MAROTE</span>
                    <span className='span1 animate__animated animate__slideInUp animate__delay-0.5s'>Y SOY</span>
                    <span className='span3'>DESARROLLADOR FULLSTACK</span>
                </div> 
            </div>
        </>
    );
};
  
export default Home;