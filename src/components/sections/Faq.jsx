import styled from 'styled-components';
import black01 from '../../assets/images/2.png';
import "./faq.css";
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative; 
  display: flex;
  margin: 0 auto;
  color: white; 
`;


const LeftContainer = styled.div`
  top: 10%;
  left: 5%;
  position: absolute;
  text-transform:uppercase; 
  font-family: boldgod;
`; 

const BannerComponent = styled.div`
  white-space: nowrap;
`;
const Container = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Faq = () => {
  return (
    <SectionWrapper id="fixed-target" className="faq">
      
      <Container id="up">
      <BannerComponent>
        <img src={black01} className="rick-pic"
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
          </img>
        </BannerComponent>
      </Container>
      
      <LeftContainer
        data-scroll
        data-scroll-delay=".15"
        data-scroll-speed="1"
      > 
      <section class="accordion">
      <input type="checkbox" name="collapse" id="handle1">
      </input>
      <h2 class="handle">
      <label for="handle1">What is Metaluxe suit?
      <span className="pl">+</span>
      </label>
      </h2>
      <div class="content">
      <p>
      Launching in Q3 of 2022, the Metaluxe collection will be available to <br />
      mint on LuxeClub.io in two primary phases - a Luxelist private sale for <br />
      Metaluxe community members who earn or win thier spot through <br />
      positive community engagement or project partnerships.
      </p>
      </div>
      </section> 
      <section class="accordion">
      <input type="checkbox" name="collapse2" id="handle2">
      </input>
      <h2 class="handle">
      <label for="handle2">How were the Metaluxe suits designed?
      <span className="pl">+</span>
      </label>
      </h2>
      <div class="content">
      <p>
      Launching in Q3 of 2022, the Metaluxe collection will be available to <br />
      mint on LuxeClub.io in two primary phases - a Luxelist private sale for <br />
      Metaluxe community members who earn or win thier spot through <br />
      positive community engagement or project partnerships.
      </p>
      </div>
      </section> 
      <section class="accordion">
      <input type="checkbox" name="collapse2" id="handle3">
      </input>
      <h2 class="handle">
      <label for="handle3">What serivces does possessing a Metaluxe suit provide?
      <span className="pl">+</span>
      </label>
      </h2>
      <div class="content">
      <p>
      Launching in Q3 of 2022, the Metaluxe collection will be available to <br />
      mint on LuxeClub.io in two primary phases - a Luxelist private sale for <br />
      Metaluxe community members who earn or win thier spot through <br />
      positive community engagement or project partnerships.
      </p>
      </div>
      </section> 
      <section class="accordion">
      <input type="checkbox" name="collapse2" id="handle4">
      </input>
      <h2 class="handle">
      <label for="handle4">How and where do I purchses a Metaluxe suit?
      <span className="pl">+</span>
      </label>
      </h2>
      <div class="content">
      <p>
      Launching in Q3 of 2022, the Metaluxe collection will be available to <br />
      mint on LuxeClub.io in two primary phases - a Luxelist private sale for <br />
      Metaluxe community members who earn or win thier spot through <br />
      positive community engagement or project partnerships.
      </p>
      </div>
      </section> 
      <section class="accordion">
      <input type="checkbox" name="collapse2" id="handle5">
      </input>
      <h2 class="handle">
      <label for="handle5">After purchsing my Metaluxe suit, how do I access it?
      <span className="pl">+</span>
      </label>
      </h2>
      <div class="content">
      <p>
      Launching in Q3 of 2022, the Metaluxe collection will be available to <br />
      mint on LuxeClub.io in two primary phases - a Luxelist private sale for <br />
      Metaluxe community members who earn or win thier spot through <br />
      positive community engagement or project partnerships.
      </p>
      </div>
      </section> 
      <section class="accordion">
      <input type="checkbox" name="collapse2" id="handle6">
      </input>
      <h2 class="handle">
      <label for="handle6">Which smart contract is Metaluxe developing?
      <span className="pl">+</span>
      </label>
      </h2>
      <div class="content">
      <p>
      Launching in Q3 of 2022, the Metaluxe collection will be available to <br />
      mint on LuxeClub.io in two primary phases - a Luxelist private sale for <br />
      Metaluxe community members who earn or win thier spot through <br />
      positive community engagement or project partnerships.
      </p>
      </div>
      </section>
      </LeftContainer>
    </SectionWrapper>
  );
};

export default Faq;
