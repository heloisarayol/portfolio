import { Container } from "@components/ui"
import { AboutMeContainer } from "@subdomains/AboutMe"
import { HeroContainer } from "@subdomains/Hero"

function App() {

  return (
    <Container style={{overflow: "hidden"}}>
      <HeroContainer/>
      <AboutMeContainer/>
    </Container>

  )
}

export default App
