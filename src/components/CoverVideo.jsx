import styled from 'styled-components';
import { motion } from 'framer-motion';
import car01 from "../assets/images/24.png";
import car02 from "../assets/images/24.png";
import car03 from "../assets/images/24.png";
import ric01 from "../assets/images/25.png";
import ric02 from "../assets/images/26.png";
import ric03 from "../assets/images/27.png";
import hvr01 from "../assets/images/28.png";
import hvr02 from "../assets/images/18a.png";
import hvr03 from "../assets/images/18b.png";
import waterm from "../assets/images/29.png";
import "./cover.css";
import "./carousel.css";
import "./carousel-two.css";
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  
  
`;


const TitleWrapper = styled(motion.div)`
  position: absolute;
  top: 24%;
  left: 2%;
  z-index: 8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
  }
  
`;



const LeftTitleWrapper = styled(motion.div)`
  position: absolute;
  z-index: 8;
  top: 370px;
  left: 2.8%;
`;
const Container = styled.div`
   
`;
const LeftContainer = styled.div`
     top: 37.6%;
     left: 3%;
      display: flex;
     position: absolute;
`;
const RightContainer = styled.div`


`;

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <SectionWrapper>
      <TitleWrapper
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <div>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-delay=".15"
            data-scroll-speed="3"
          >
            <p className="welcome">welcome to <span className="meta-yell">metaluxe</span></p>
            <p className="cover-head-vid">Choose <br />
            your <span className="suit-yell">suit</span>
           </p>
          </motion.h1>
        </div>
      </TitleWrapper>


      <LeftTitleWrapper
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <div>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-delay=".15"
            data-scroll-speed="1"
          >
          <p className="scan-me">Scan To Launch <br />
          Agumented Reality Suit <span className="arrn">&#x2193;</span></p>

          <p className="power-by">@chaniru.lk<span className="arrn">&#x2193;</span></p>
          <img className="water" src={waterm} alt="" />
          </motion.h1>
          </div>
        </LeftTitleWrapper>
      <Container>
      <div className="carousel">
        <img className="rot-pic-one" src={car01} alt="" />
        <img className="rot-pic-two" src={car02} alt="" />
        <img className="rot-pic-three" src={car03} alt="" /> 
        <img className="rot-pic-one" src={car01} alt="" />
        <img className="rot-pic-two" src={car02} alt="" />
      </div>
      </Container>
      <RightContainer>
      <div className="carousel-two">
        <img className="ric" src={ric01} alt="" />
        <img className="ric" src={ric02} alt="" />
        <img className="ric" src={ric03} alt="" />
        <img className="ric" src={ric01} alt="" />
        <img className="ric" src={ric02} alt="" />
       </div>
      </RightContainer>
      <LeftContainer
       data-scroll
       data-scroll-delay=".15"
       data-scroll-speed="1">
        <img src={hvr01} alt="" className="hover-pic-one" />
        <img src={hvr02} alt="" className="hover-pic-two" />
        <img src={hvr03} alt="" className="hover-pic-three" />
      </LeftContainer>
    </SectionWrapper>
  );
};

export default CoverVideo;
