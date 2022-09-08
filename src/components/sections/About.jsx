import styled from 'styled-components';
import purp01 from '../../assets/images/67.png';
import "./about.css";
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative; 
  display: flex;
  margin: 0 auto;
  color: white;
  font-family: 'Albert Sans', sans-serif;

`;


const LeftContainer = styled.div`
  top: 10%;
  left: 5%;
  position: absolute;
  text-transform:uppercase; 
  font-family: boldgod;
`; 

const BannerComponent = styled.div`
 
`;
const Container = styled.div`
 
`;

const About = () => {
  return (
    <SectionWrapper id="fixed-target" className="about">
      

      <LeftContainer
        data-scroll
        data-scroll-delay=".15"
        data-scroll-speed="1"
      >
       <p className="how-work">How it works</p>
       <p className="more-thn"><span className="more-yell">More </span>than a <br />
       profile picture 
       </p> 
       <p className="meta-des">
        Metaluxe suits are <span className="nft-yell">suit-inspired NFTs</span> that live in <span className="art-one">artwork form</span> and <span className="art-two">augmented reality</span>. <br />
        Take your NFT everywhere you go, create content, and share with the world.
       </p>
      </LeftContainer>
      <Container id="up">
      <BannerComponent>
          <img src={purp01} className="purp-pic"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
          </img>
      </BannerComponent>
      </Container>
      
      
    </SectionWrapper>
  );
};

export default About;
