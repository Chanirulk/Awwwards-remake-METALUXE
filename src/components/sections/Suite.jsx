import styled from 'styled-components';
import "./suite.css";
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative; 
  display: flex;
  margin: 0 auto;
  color: white; 
`;
const Container = styled.div`
    top: 43%;
    left: 43%; 
    position: absolute;
    text-transform:uppercase;  
`; 

const RightContainer = styled.div`
    top: 50%;
    left: 45.5%; 
    position: absolute;
    text-transform:uppercase;  
`; 


const LeftContainer = styled.div`
    top: 30%;
    left: 38%; 
    position: absolute;
    text-transform:uppercase;  
`; 

 
const Suite = () => {
  return (
    <SectionWrapper id="fixed-target" className="faq">
        <div className="overlay-pic"></div>
        
      
      <LeftContainer
        data-scroll
        data-scroll-delay=".15"
        data-scroll-speed="1"
      > 
       <h1 className="up-suit">suit up</h1>
      </LeftContainer>
      <Container
      data-scroll
      data-scroll-delay=".15"
      data-scroll-speed="1">
      <p className="learn-more">Learn more about Metaluxe<span className="arrn">&#x2193;</span></p>
      </Container>
      <RightContainer>
      <a href="https://www.instagram.com/chaniru.lk/" class="myButton">READ</a>
      </RightContainer>
    </SectionWrapper>
  );
};

export default Suite;
