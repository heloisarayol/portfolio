
import { Container } from "@components/ui";
import Navbar from "./components/navbar/navbar";
import { Animation } from "./components/animation/animation";


export const HeroInterface = () => {

  return (
    <Container display="flex" justify="center" align="center" direction="column">
      <Navbar />
      <Animation/>
    </Container>
  );
};
