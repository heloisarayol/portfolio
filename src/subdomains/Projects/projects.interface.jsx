
import { Container, FlatRibbon, Ribbon } from "@components/ui";
import stripTile from "@assets/images/tile_projetos.png"; 
import bg from "@assets/images/bgSobreMim.png"



export const ProjectsInterface = () => {

  return (
    <Container id="projetos" bgPosition="right" img={bg} display="flex"  margin="5% 0 0 0" align="center" justify="flex-start" direction="column">
    
      <Ribbon $stripTile={stripTile}/>
      <FlatRibbon/>

     
     
    </Container>
  );
};
