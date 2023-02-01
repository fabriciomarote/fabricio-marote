import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import WOW from 'wowjs';
import '../styles/Contact.css';

const Contact = ( props ) => {

    const { theme } = props;

    const [data, setData] = useState({
        name: "",
        email: "",
        asunto: "",
        message: ""
    });

    const handleChange = name => event => {
        setData(prevState => ({ ...prevState, [name]: event.target.value }));
      };

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])  
  
    return (
        <>
            <a name='contacto' />
            <div className='contact-container' data-theme={theme}>
                <p className='title-box wow animate__animated animate__zoomIn'> CONTACTAME</p>
                <div className='box-form wow animate__animated animate__zoomIn'>
                    <a href="https://drive.google.com/file/d/1M4t4gMeNHhtiReoUMepGMdFlsrD5xA5C/view?usp=sharing" className='button-contact hvr-sweep-to-right'><IoIosPaper size={40} className="icon-contact"/> Mi Curriculum Vitae</a> 
                    <a href="mailto:fabricio.gm1993@gmail.com" className='button-contact hvr-sweep-to-right'><MdEmail size={40} className="icon-contact "/> fabricio.gm1993@gmail.com</a> 
                    <a href="https://www.linkedin.com/in/fabricio-marote/" className='button-contact hvr-sweep-to-right'><FaLinkedin size={40} className="icon-contact"/> /fabricio-marote</a> 
                    <a href="https://github.com/fabriciomarote" className='button-contact hvr-sweep-to-right'><FaGithub size={40} className="icon-contact"/> /fabriciomarote</a> 
                </div>
                <div className='box-cv animate__animated animate__pulse animate__infinite'>
                    
                </div> 
            </div>
        </>
    );
  }
  
  export default Contact;