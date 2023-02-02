import React from 'react'
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
            <img alt="imagen" className="image-modal" src={image}/>
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
padding: 40px;
display: flex;
align-items: center;
justify-content: center;  
`;

  const ContenedorModal = styled.div`
    width: 1000px;
    height: 600px;
    position: relative;
    border-radius:0px;
    padding: 0px;
  `;

  const BotonCerrar = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
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
  `;