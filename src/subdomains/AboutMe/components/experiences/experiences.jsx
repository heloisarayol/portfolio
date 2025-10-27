import { Container } from "@components/ui";
import { Timeline } from "../timeline/Timeline";
import { experiences } from "@core/enums/experiences.enums";
import stars from "@assets/images/stars.png"

export  function Experiences() {

  return (
    <Container>

      <Container display="flex" justify="flex-start" align="center" gap="2em" padding="4% 2% 0 2%">
        <Container img={stars} width="3em" margin="0" height="3em"></Container>
        <h2>Experiências</h2>

      </Container>
    
      <Timeline items={experiences} />
    </Container>

);
}
