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
width: 100vw;
height: 100vh;
position: fixed;
top:0;
left:0;
background: rgba(0,0,0,.9);    
padding: 0px;
display: flex;
align-items: center;
justify-content: center;  
transition: .3s ease all;
z-index: 10;
`;

const ContenedorModal = styled.div`
width: 100vw;
min-height: 100vh;
position: relative;
display: grid;
border-radius:10px;
padding: 50px;
`;

const BotonCerrar = styled.div`
position: absolute;
top: 17px;
right: 10px;
width: 30px;
height: 30px;
border: none;
background: none;
cursor: pointer;
transition: .3s ease all;
border-radius: 5px;
color: #E8E8E8;
svg {
  width: 90%;
  height: 90%;
}
`;

const Contenido = styled.div`
`;