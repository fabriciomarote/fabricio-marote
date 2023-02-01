import React, { useState } from 'react'
import styled from 'styled-components';
import { IoIosClose } from "react-icons/io";

const Modal = ({image, state, setState}) => {

  return ( 
    <>
      { state && 
        <Overlay>
          <ContenedorModal>
            <BotonCerrar onClick={() => setState(!state)}>
              <IoIosClose/>
            </BotonCerrar> 
            <Contenido>
              <img alt="imagen" className="image-modal" src={image}/>
            </Contenido>
          </ContenedorModal>
        </Overlay>
      }
    </>
  )
}

export default Modal;

  const Overlay = styled.div`
    min-width: 99.3vw;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    background: rgba(0,0,0);     
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top:-15px;
    margin-left:-83px;  
  `;

  const ContenedorModal = styled.div`
    width: 1000px;
    height: 600px;
    position: relative;
    border-radius:0px;
    padding: 0px;
    @media (max-width:600px) {
      height: 200px;
      width: 550px;
    }
  `;

  const BotonCerrar = styled.div`
    position: absolute;
    top: 10px;
    right: 30px;
    width: 20px;
    height: 20px;
    border: none;
    background #f2f2f2;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 50px;
    color: white(0,0,0);
    svg {
      width: 100%;
      height: 100%;
    }

    &:hover {
    }
  `;

  const Contenido = styled.div`
    @media (max-width:600px) {
    }
  `;