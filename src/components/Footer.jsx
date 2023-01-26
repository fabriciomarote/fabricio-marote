import React, { useEffect } from 'react'
import WOW from 'wowjs';
import '../styles/Footer.css';

const Footer = () => {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])

    return (
            <div className="footer-container">
                <div className="text-footer">
                    <p className="col-sm">
                       {"Todos los derechos reservados."} &copy; {new Date().getFullYear()}  {"| Fabricio Marote"} 
                    </p>
                </div>
            </div>
    );
};

export default Footer;