
import { Container } from "@components/ui";


import styled, { keyframes } from "styled-components";
import stripTile from "@assets/images/TILE_SOBRE.png"; 
import bg from "@assets/images/bgSobreMim.png"
import { AboutMeCard } from "./components/aboutMeCard/aboutMeCard";

const scrollBG = keyframes`
  from { background-position-x: 0; }
  to   { background-position-x: -1000px; } /* distância qualquer múltiplo da largura do tile */
`;

const Ribbon = styled.div`
z-index: 2;  
  --speed: 20s;         
  --tilt: -2deg;         
  position: relative;
  height: clamp(36px, 6vh, 150px);
  width: 100%;
  overflow: hidden;
  transform: rotate(var(--tilt));
  background:
    linear-gradient(180deg, rgba(0,0,0,0) 15%, rgba(0,0,0,.12) 85%),
    url(${stripTile}) repeat-x,
    linear-gradient(var(--primary), var(--primary));
  animation: ${scrollBG} var(--speed) linear infinite;
  will-change: background-position;
  background-size: contain;
  padding: 1rem;


  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const FlatRibbon = styled.div`
  --speed: 20s;         
  --tilt: 0deg; 
  top: -3rem;
  position: absolute;
  z-index: 1;       
  position: relative;
  height: clamp(36px, 6vh, 150px);
  width: 100%;
  overflow: hidden;
  transform: rotate(var(--tilt));
  background:
    linear-gradient(180deg, rgba(0,0,0,0) 15%, rgba(0,0,0,.12) 85%),
    linear-gradient(var(--secondary), var(--secondary));
  background-size: contain;
  padding: 1rem;

`;



export const AboutMeInterface = () => {

  return (
    <Container height="100vh" id="sobre" bgPosition="right" img={bg} display="flex"  margin="5% 0 0 0" align="center" justify="flex-start" direction="column">
    
      <Ribbon/>
      <FlatRibbon/>
      <Container display="flex">
        <AboutMeCard/>
        <Container width="35%">
          
        </Container>

      </Container>
     
     
    </Container>
  );
};
