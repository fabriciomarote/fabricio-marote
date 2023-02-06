import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import logo from '../assets/img/logos/logo.png';
import '../styles/NavBar.css';

const Navbar2 = ( props ) => {

    const { theme, setTheme } = props;

    const changeMode = () => {
        let newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
            <div className="navbar-container " data-theme={theme}>
                <div className="nav">
                    <input type="checkbox" id="nav-check"/>
                    <div className="nav-header">
                        <div className="box-logo">  
                            <a href="/" className='logo'><img src={logo} alt="logo" /></a>
                        </div>
                    </div>
                    <div className="nav-btn2">
                        <div className="theme-3">
                            <div className='icon-theme' onClick={() => changeMode()}>
                                { theme === "dark" ? <BsFillMoonFill className='icon-dark' size={25}/> : <BsFillSunFill className='icon-light' size={25}/>}
                            </div>
                        </div>
                        <label className="nav-check" htmlFor="nav-check">
                            <div></div>
                            <div></div>
                            <div></div>
                        </label>
                    </div>
                    <div className="nav-links">                  
                        <a href="/#home" className="btn-btn hvr-underline-from-left" >Inicio</a>
                        <a href="/#aboutMe" className="btn-btn hvr-underline-from-left" >Sobre mí</a>
                        <a href="/#skills" className="btn-btn hvr-underline-from-left" >Habilidades</a>
                        <a href="/#projects" className="btn-btn hvr-underline-from-left">Proyectos</a>
                        <a href="/#contact" className="btn-btn hvr-underline-from-left"> Contacto</a> 
                        <div className="theme-2">
                            <div className='icon-theme' onClick={() => changeMode()}>
                                { theme === "dark" ? <BsFillMoonFill  className='icon-dark' size={35}/> : <BsFillSunFill className='icon-light' size={35}/>}
                            </div>
                        </div>
                    </div>    
                </div>
            </div>  
    );
};

export default Navbar2;