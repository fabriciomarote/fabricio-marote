import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TbError404 } from "react-icons/tb";
import '../styles/InvalidRoute.css'

 const InvalidRoute = ({ theme }) => {

    const navigate = useNavigate();

    return (
        <div className='invalid' data-theme={theme}>
            <div className='card-invalid'>
                <TbError404 className='error404 animate__animated animate__pulse animate__infinite'/>
                <div className='card-text'>
                    <h1>PÁGINA NO ENCONTRADA</h1>
                    <h5>No se ha podido encontrar la página solicitada</h5>
                </div>
                <div className='box-btn'>
                    <button className='btn-invalid hvr-rectangle-out' onClick={ () => navigate('/')}>Volver al inicio</button>
                </div>
            </div>
            <div className="background-animated">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default InvalidRoute; 