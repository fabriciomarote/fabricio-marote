import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import logo from '../assets/img/logos/logo2.png';
import '../styles/NavBar.css';

const Navbar2 = ({ theme, setTheme }) => {

    const navigate = useNavigate();

    const changeMode = () => {
        let newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
            <div className="navbar-container " data-theme={theme}>
                <div className="nav">
                    <input type="checkbox" id="nav-check"/>
                    <div className="nav-header2">
                        <div className="box-logo">  
                            <a href="/" className='logo'><img src={logo} alt="logo" /></a>
                        </div>
                        <div className="theme-3">
                            <a onClick={() => navigate(-1)} className="btn-btn">VOLVER</a> 
                            <div className='icon-theme' onClick={() => changeMode()}>
                                { theme === "dark" ? <BsFillMoonFill className='icon-dark' size={25}/> : <BsFillSunFill className='icon-light' size={25}/>}
                            </div>
                        </div>
                    </div> 
                </div>
            </div>  
    );
};

export default Navbar2;