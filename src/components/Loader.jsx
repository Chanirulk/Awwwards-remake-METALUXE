import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import  "./loader.css";
const Container = styled(motion.div)`
  position: absolute;
  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black; 
 
`;

const Text = styled(motion.span)`
    font-family: 'Noto Sans', sans-serif;
    color: whitesmoke;
`;

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
};
 
const Loader = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: 0,
        opacity: 0,
      }}
      transition={{
        duration: 4,
      }}
    >
      
      <Text
      
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
       <p className='load-head'>METALUXE</p><br />
       
      </Text>
       
    </Container>
  );
};

export default Loader;
