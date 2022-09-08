import styled from 'styled-components';
import drop01 from '../../assets/images/drop.mp4';
import "./video.css"; 
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative; 
  display: flex;
  margin: 0 auto;
  color: white;
  font-family: 'Albert Sans', sans-serif;
`;
const LeftContainer = styled.div`
  z-index: 10; 
`;

const Second = () => {
  return (
    <SectionWrapper id="fixed-target" className="about">
      <LeftContainer
        data-scroll
      >
      <video className="drop-ply" src={drop01}
      autoPlay muted loop></video>
      </LeftContainer> 
    </SectionWrapper> 
  );
};

export default Second;
