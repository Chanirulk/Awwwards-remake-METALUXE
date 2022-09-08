import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import imga from "../assets/images/logo.png";
import "./logo.css";
const Container = styled.div`
`;

const TextWrapper = styled(motion.span)`

.bar-nav{
  position:absolute;
  z-index:99;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden; 
  border-radius: 20px;
  position: fixed;
  left: 5px;
  top: 10px;
  width: 99%;
  background: rgba(48, 48, 48, 0.541);
  border-radius: 20px;  
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
}

li {
  float: right;
}

li a { 
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  text-transform: uppercase;
}
li a:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0; 
}

li a:hover:after{
  transform: scaleX(1);
  transform-origin: bottom left;
}


`;

const textVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    x: -5,
    transition: {
      duration: 1,
      delay: 2,
      ease: 'easeInOut',
    },
  },
};
 
const Logo = () => {
  return (
    <Container>
      <Link to="/">
         
        <TextWrapper
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
      <div className='bar-nav'>
        <ul>
         <img className="logo-av" src={imga} alt="" />
         <a className="home-nav" href="https://www.instagram.com/chaniru.lk/">- home</a>
         <li><a href="https://www.instagram.com/chaniru.lk/">litepaper</a></li>
         <li><a href="https://www.instagram.com/chaniru.lk/">team</a></li> 
         <li><a href="https://www.instagram.com/chaniru.lk/">faq</a></li>
         <li><a href="https://www.instagram.com/chaniru.lk/">Roadmap</a></li>
         <li><a href="https://www.instagram.com/chaniru.lk/">Collection</a></li>
         <li><a href="https://www.instagram.com/chaniru.lk/">About</a></li>
         <li><a href="https://www.instagram.com/chaniru.lk/">Demo</a></li>

        </ul>
      </div>

        </TextWrapper>
      </Link>
    </Container>
  );
};

export default Logo;
