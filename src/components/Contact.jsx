/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import WOW from 'wowjs';
import '../styles/Contact.css';

const Contact = ({ theme }) => {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])  
  
    return (
        <>
            <a href="#contact" name='contact'/>
            <div className='contact-container' data-theme={theme}>
                <div className='wow animate__animated animate__zoomIn'> 
                    <div className='title-box'>
                        <span>C</span>
                        <span>O</span>
                        <span>N</span>
                        <span>T</span>
                        <span>A</span>
                        <span>C</span>
                        <span>T</span>
                        <span>A</span>
                        <span>M</span>
                        <span>E</span>
                    </div>
                </div>
                <div className='box-form wow animate__animated animate__zoomIn'>
                    <a href="https://drive.google.com/file/d/1G2flSVyitVMo85QCV5juiW6vlxzHHfIe/view?usp=sharing" className='button-contact hvr-sweep-to-right'><IoIosPaper size={30} className="icon-contact"/> Mi Curriculum Vitae</a> 
                    <a href="mailto:fabricio.gm1993@gmail.com" className='button-contact hvr-sweep-to-right'><MdEmail size={30} className="icon-contact "/> fabricio.gm1993@gmail.com</a> 
                    <a href="https://www.linkedin.com/in/fabricio-marote/" className='button-contact hvr-sweep-to-right'><FaLinkedin size={30} className="icon-contact"/> /fabricio-marote</a> 
                    <a href="https://github.com/fabriciomarote" className='button-contact hvr-sweep-to-right'><FaGithub size={30} className="icon-contact"/> /fabriciomarote</a> 
                </div> 
            </div>
        </>
    );
  };
  
  export default Contact;