import styled from 'styled-components'; 
import "./our.css";
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative; 
  display: flex;
  margin: 0 auto;
  color: white; 
`;
const Container = styled.div`
  position: absolute;
  left: 5%;
  top: 35px; 
`; 

const LeftContainer = styled.div`
  position: absolute;
  left: 27%;
  top: -100px;
`; 


const Our = () => {
  return (
    <SectionWrapper id="fixed-target" className="faq">
      
      
      <LeftContainer
        data-scroll
        data-scroll-delay=".15"
        data-scroll-speed="1"
      > 
      <h1 className="our-title">
     <span className="our-yell">our </span>story</h1>
      
      </LeftContainer>
      <Container
      data-scroll
      data-scroll-delay=".20"
      data-scroll-speed="1">
      <p className="our-des">
      After a 30 year career in the NYC luxury fashion sector. Chuck Hellman followed his lifelong vision of disrupting the fashion industry's status quo. Even after <br></br>
      successfully operating world-reowned fashion stores in Ohio, his ambition of suiting the world persisted prompting him to dig deeper. <br></br>
      <br></br>
      After collaborating with the co-founder Christian Barker, the two <span className="make-yell">launched the Hellman Retail Group</span> - a digital fashion brand that fuses pop culture with eccentrix <br></br>
      luxury suits within in just a few months, their social media presence rocketed to over <span className="make-yell">4 million followers</span> across various platforms. People from around the globe fell <br></br>
      in love with thier custom suits and passion for the community, which ultimately inspired Barker and Hellman to foray into the next digital frontier. <br></br>
      <br></br>
      After a 30 year career in the NYC luxury fashion sector. Chuck Hellman followed his lifelong vision of disrupting the fashion industry's status quo. Even after <br></br>
      successfully operating world-reowned fashion stores in Ohio, his ambition of suiting the world persisted prompting him to dig deeper. <br></br>
      <br></br>
      After collaborating with the co-founder Christian Barker, the two <span className="make-yell">launched the Hellman Retail Group</span> - a digital fashion brand that fuses pop culture with eccentrix <br></br>
      luxury suits within in just a few months, their social media presence rocketed to over <span className="make-yell">4 million followers</span> across various platforms. People from around the globe fell <br></br>
      in love with thier custom suits and passion for the community, which ultimately inspired Barker and Hellman to foray into the next digital frontier.
      </p>
      <br></br>
      <h1 className="credit-our">@chaniru - <span className="our-yell">Instagram</span></h1>
      </Container>
    </SectionWrapper>
  );
};

export default Our;
