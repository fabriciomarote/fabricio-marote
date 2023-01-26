import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { IoIosArrowDropupCircle } from 'react-icons/io';

import { Button } from './Styles';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
     <IoIosArrowDropupCircle onClick={scrollToTop } 
     style={{display: visible ? 'inline' : 'none'}} className='animate__animated animate__pulse animate__infinite'/>
    </Button>
  );
}
  
export default ScrollButton;