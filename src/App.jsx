import { Container } from "@components/ui"
import { AboutMeContainer } from "@subdomains/AboutMe"
import { HeroContainer } from "@subdomains/Hero"
import { ProjectsContainer } from "@subdomains/Projects"

function App() {

  return (
    <Container style={{overflow: "hidden"}}>
      <HeroContainer/>
      <AboutMeContainer/>
      <ProjectsContainer/>
    </Container>

  )
}

export default App
