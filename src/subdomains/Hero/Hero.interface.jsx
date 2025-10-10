import { Container } from "@components/ui"
import bgPink from "@assets/images/bgPink2.png"
import Navbar from "./components/navbar/navbar"
import name from "@assets/images/name.gif"



export const HeroInterface = () => {
    return (
      <Container display="flex" justify="center" align="center" direction="column">
        <Navbar/>
        <Container img={bgPink} borderRadius="0 0 4vh 4vh" height="90vh" width="97vw" bgPosition="center" bgSize="cover" display="flex" align="center" justify="center">
          <img src={name} style={{ height: "60%"}}></img>
        </Container>
      </Container>
    )
}
