
import { Container, FlatRibbon, Ribbon } from "@components/ui";
import stripTile from "@assets/images/TILE_SOBRE.png"; 
import bg from "@assets/images/bgSobreMim.png"
import { AboutMeCard } from "./components/aboutMeCard/aboutMeCard";
import { Experiences } from "./components/experiences/experiences";
import buttons from "@assets/images/buttons.png"
import { skills } from "@core/enums/skills.enums";
import { SkillBar } from "./components/skills/Skills";


export const AboutMeInterface = () => {

  const data = [
    {
      date: "12/fev",
      title: "Projeto x",
      description: "é um evento"
    }
  ]

  return (
    <Container>
      <Container id="sobre" bgPosition="right" img={bg} display="flex"  margin="5% 0 0 0" align="center" justify="flex-start" direction="column">
        <Ribbon $stripTile={stripTile}/>
        <FlatRibbon/>
        <Container display="grid" gap="3rem" mediaMin900="grid-template-columns: 1fr 1fr" padding="2rem">
          <AboutMeCard/>

          <Container style={{overflow: "hidden", border:"0.25rem solid var(--secondary)", maxWidth: "75%", transform: "rotate(2deg)"}} borderRadius="2rem" bg="white">
            <Container bg="var(--secondary)" display="flex" justify="space-between" align="center" padding="0.25rem 1rem">
              <h3>hard_skills.exe</h3>
              <img style={{height:"5%"}} src={buttons}/>
        
            </Container>
            <Container  display="grid" gap="1rem" padding="2rem" style={{gridTemplateColumns: "1fr 1fr"}}>
              {skills?.map((it, idx) => (
                <SkillBar
                  key={it.id ?? idx}
                  icon={it.iconUrl}
                  label={it.name}
                />
              ))}
          </Container>

          </Container>

        </Container>
      </Container>
      <Experiences events={data}/>
    
    </Container>
  
  );
};
