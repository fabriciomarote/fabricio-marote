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
   z-index: 1;
   cursor: pointer;
   color: var(--hover);
   @media (min-width: 1280px) {
      left: 94.5%;
      top:79%;
      font-size: 5rem;
   }
   @media (max-height: 1024px) and (max-width: 768px) {
      width: 100%;
      left: 91%;
      top:83%;
      font-size: 4rem;
   }
   @media (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
      width: 100%;
      left: 90%;
      top:78%;
      font-size: 6rem;
   }
   @media (max-width:600px) {
      left: 80%;
      top:85%;
      font-size: 4rem;
   }
   @media (max-height: 600px) and (max-width: 400px) {
      left: 81%;
   }

   @media (max-height: 400px) and (max-width: 600px) {
      left: 88%;
      top:78%; 
   }
`