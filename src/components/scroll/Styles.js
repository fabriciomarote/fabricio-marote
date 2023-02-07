import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: right;
   color: green;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 83%;
   top:83%;
   bottom: 40px;
   height: 20px;
   font-size: 4rem;
   z-index: 10;
   cursor: pointer;
   color: var(--hover);
   @media (min-width: 1280px) {
      left: 94%;
      top:79%;
      font-size: 5rem;
   }
   @media only screen and (min-width:721px) and (max-width: 1199px) {
      left: 88%;
      top:85%;
      font-size: 5rem;
   }
   @media only screen and (min-width:481px) and (max-width:720px) {
      width: 100%;
      left: 88%;
      top:90%;
      font-size: 4rem;
   }
   @media only screen and (min-width:0px) and (max-width:480px){
      width: 100%;
      left: 77%;
      top:80%;
      font-size: 4rem;
   }
   @media only screen and (min-width:0px) and (max-width:700px) and (orientation: landscape) { 
      width: 100%;
      left: 88%;
      top:60%;
      font-size: 4rem;
   }
`;