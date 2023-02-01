import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import logo from '../assets/img/logos/logo.png';
import '../styles/NavBar.css';

const Navbar2 = ( props ) => {

    const { theme, setTheme } = props;

    const changeMode = () => {
        let newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    }

    return (
            <div className="navbar-container col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" data-theme={theme}>
                <div className="nav col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <input type="checkbox" id="nav-check"/>
                    <div className="nav-header">
                        <div className="box-logo">  
                            <a href="/" className='logo'><img src={logo} alt="logo" /></a>
                        </div>
                    </div>
                    <div className="nav-btn">
                        <div className="theme-1">
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
                    <div className="nav-links2"> 
                        <div className="theme-2">
                            <div className='icon-theme' onClick={() => changeMode()}>
                                { theme === "dark" ? <BsFillMoonFill  className='icon-dark' size={25}/> : <BsFillSunFill className='icon-light' size={25}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
    );
};

export default Navbar2;