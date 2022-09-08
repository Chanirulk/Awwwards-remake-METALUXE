import React from 'react';
import styled from 'styled-components'; 
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import rot01 from '../../assets/images/14s.png';
import logo01 from '../../assets/images/logo.png';
import "./foot.css";
const SectionWrapper = styled.section`
  min-height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  color:whitesmoke
  position: relative;
`;
const Container = styled.div` 
    text-transform:uppercase;  
`; 
const LeftContainer = styled.div` 
    margin-top: -15%;
    position: absolute;
    text-transform:uppercase;  
`; 
const RightContainer = styled.div` 
    position: absolute;
    margin-top: 1%;
    text-transform:uppercase;  
    z-index: 10;
`; 
const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);

    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <SectionWrapper>
     <Container
     data-scroll
     data-scroll-delay=".15"
     data-scroll-speed="1">

      <img src={rot01} alt="" className="rot" />
     </Container>
      <LeftContainer
       data-scroll
       data-scroll-delay=".15"
       data-scroll-speed="1">
          <a className='last-link' href="https://www.instagram.com/chaniru.lk/"><span className="sml-last">N1 </span>Home</a>
          <a className='last-link' href="https://www.instagram.com/chaniru.lk/"><span className="sml-last">N2 </span>lite-paper</a>
          <a className='last-link-un' href="https://www.instagram.com/chaniru.lk/"><span className="sml-last">soon </span>mint</a>
      </LeftContainer>
      <RightContainer
       data-scroll
       data-scroll-delay=".15"
       data-scroll-speed="1">
      <a href="https://www.instagram.com/chaniru.lk/" className="credit-outbox">site by - chaniru.lk</a>
      </RightContainer>
      <div className="lgo">
        <img src={logo01} alt="" />
      </div>
    </SectionWrapper>
  );
};

export default Footer;
