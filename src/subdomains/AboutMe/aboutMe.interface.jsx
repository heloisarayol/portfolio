
import { Container, FlatRibbon, Ribbon } from "@components/ui";
import stripTile from "@assets/images/TILE_SOBRE.png"; 
import bg from "@assets/images/bgSobreMim.png"
import { AboutMeCard } from "./components/aboutMeCard/aboutMeCard";
import { Skills } from "./components/skills/Skills";


export const AboutMeInterface = () => {

  return (
    <Container id="sobre" bgPosition="right" img={bg} display="flex"  margin="5% 0 0 0" align="center" justify="flex-start" direction="column">
    
      <Ribbon $stripTile={stripTile}/>
      <FlatRibbon/>
      <Container display="flex" wrap="wrap">
        <AboutMeCard/>
        <Skills/>
      </Container>
     
     
    </Container>
  );
};
