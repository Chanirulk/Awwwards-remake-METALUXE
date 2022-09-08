import styled from 'styled-components'; 
import "./new.css";
import ATR01 from '../../assets/images/mint.png';
import ATR02 from '../../assets/images/22.png';
import ATR03 from '../../assets/images/23.png';
import ATR04 from '../../assets/images/1.png';

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative; 
  display: flex;
  margin: 0 auto;
  color: white;
  font-family: 'Albert Sans', sans-serif;

`;

const Container = styled.div`
  position: absolute; 
  top: 40%;
`; 
 

const LeftContainer = styled.div`
  top: 10%;
  left: 5%;
  position: absolute;
  text-transform:uppercase; 
  font-family: boldgod;
`; 
 
const Third = () => {
  return (
    <SectionWrapper id="fixed-target" className="about">
      

      <LeftContainer
        data-scroll
        data-scroll-delay=".15"
        data-scroll-speed="1"
      >
       <p className="how-work">Future plans</p>
       <p className="more-thn">our<br />
       <span className="our-yell">roadmap</span>
       </p> 
       <p className="meta-des">
        Metaluxe is building to last. Our genesis mint is just the begining.
       </p>
      </LeftContainer> 
      <Container
       data-scroll
       data-scroll-delay=".15"
       data-scroll-speed="1">
        
        <div class="row">
        <div class="col col1">
        <img className="mint-vr" src={ATR01} alt="" />
        <p className="fut-des">
          In <span className="q-yell">Q3 of 2022</span>, the Metaluxe genesis <br />
          NFT collection of 10,000 hand- <br />
          curated suits will be launched.
        </p>
        </div>

        <div class="col col2">
        <img className="mint-vr" src={ATR02} alt="" />        
        <p className="fut-des">
          In <span className="q-yell">Q3 of 2022</span>, the Metaluxe genesis <br />
          NFT collection of 10,000 hand- <br />
          curated suits will be launched.
        </p>
        </div>

        <div class="col col3">
        <img className="mint-vr" src={ATR03} alt="" />        
        <p className="fut-des">
          In <span className="q-yell">Q3 of 2022</span>, the Metaluxe genesis <br />
          NFT collection of 10,000 hand- <br />
          curated suits will be launched.
        </p>
        </div>

        <div class="col col4">
        <img className="mint-vr" src={ATR04} alt="" />        
        <p className="fut-des">
          In <span className="q-yell">Q3 of 2022</span>, the Metaluxe genesis <br />
          NFT collection of 10,000 hand- <br />
          curated suits will be launched.
        </p>
        </div>
        </div>
      </Container>
      
    </SectionWrapper>
  );
};

export default Third;
