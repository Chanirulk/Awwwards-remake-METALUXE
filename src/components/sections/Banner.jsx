import styled from 'styled-components'; 
import "./banner.css";
import SLIDE from '../../assets/images/3.png';
import SLIDE1 from '../../assets/images/4.png';
import SLIDE2 from '../../assets/images/5.png';
import SLIDE3 from '../../assets/images/6.png';
import SLIDE4 from '../../assets/images/7.png';
import SLIDE5 from '../../assets/images/8.png';
import SLIDE6 from '../../assets/images/9.png';
import SLIDE7 from '../../assets/images/10.png';
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
    position: absolute;
    left: -18%;
    top: 50%;
`; 

const Container = styled.div`
  top: 10%;
  left: 5%;
  position: absolute;
  text-transform:uppercase; 
  font-family: boldgod;
`; 

 

const Banner = () => {
  return (
    <SectionWrapper id="fixed-target" className="banner">
      <Container
        data-scroll
        data-scroll-delay=".15"
        data-scroll-speed="1"
      >
       <p className="how-work">whats included</p>
       <p className="more-thn">genesis<br />
       <span className="gen-yell">Collection</span>
       </p> 
       <p className="meta-des">
        The Metaluxe genesis NFT collection consists of <span className="ten-yell">10,000 unique, hand-curated suits</span>.<br />
        Each suit includes a blockchain-authenthicated artwork piece and an identical, cloud-hosted<span className="rm-one">augmented reality model</span>. <br />
        </p>
      </Container> 
      <LeftContainer
       data-scroll
       data-scroll-delay=".15"
       data-scroll-speed="2">
        <div className="items">
        <div className="entry">
            <img src={SLIDE} alt="" className="slide" />
        </div>
        <div className="entry">
            <img src={SLIDE1} alt="" className="slide" />
        </div>
        <div className="entry">
            <img src={SLIDE2} alt="" className="slide" />
        </div>
        <div className="entry">
            <img src={SLIDE3} alt="" className="slide" />
        </div>
        <div className="entry">
            <img src={SLIDE4} alt="" className="slide" />
        </div>
        <div className="entry">
            <img src={SLIDE5} alt="" className="slide" />
        </div>
        <div className="entry">
            <img src={SLIDE6} alt="" className="slide" />
        </div>
        <div className="entry">
            <img src={SLIDE7} alt="" className="slide" />
        </div>
    </div>
      </LeftContainer>
    </SectionWrapper>
  );
};

export default Banner;
