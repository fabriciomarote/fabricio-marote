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
   @media (max-width: 320px) and (max-height: 568px) {
      width: 100%;
      left: 78%;
      top:78%;
      font-size: 4rem;
   }
   @media (max-height: 320px) and (max-width: 568px) and (orientation: landscape) {
      width: 100%;
      left: 80%;
      top:70%;
      font-size: 4.5rem;
   }
`