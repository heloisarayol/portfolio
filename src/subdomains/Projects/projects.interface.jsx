
import { Container, FlatRibbon, Ribbon } from "@components/ui";
import stripTile from "@assets/images/tile_projetos.png"; 
import bg from "@assets/images/bgSobreMim.png"
import { ProjectCard } from "./components/cardProject";
import { useState } from "react";
import ProjectModal from "./components/modal";



export const ProjectsInterface = () => {

  const [selected, setSelected] = useState(null);

  const projects = [
    { id: 1, title: "Nome do Projeto", year: 2024, image: null, href: "" },
    { id: 2, name: "Outro Projeto", date: "2023", thumbnail: null, onClick: () => alert("Clicked!") },
    { id: 1, title: "Nome do Projeto", year: 2024, image: null, href: "" },
    { id: 2, name: "Outro Projeto", date: "2023", thumbnail: null, onClick: () => alert("Clicked!") },
    { id: 1, title: "Nome do Projeto", year: 2024, image: null, href: "" },
    { id: 2, name: "Outro Projeto", date: "2023", thumbnail: null, onClick: () => alert("Clicked!") },
  ];


  const openModal = (item) => setSelected(item);
  const closeModal = () => setSelected(null);
  return (
    <Container id="projetos" bgPosition="right" img={bg} display="flex"  margin="5% 0 0 0" align="center" justify="flex-start" direction="column">
    
      <Ribbon $stripTile={stripTile}/>
      <FlatRibbon/>

      <Container display="grid" gap="2%" align="center" justify="center" padding="2%" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))"}}>

        {projects.map(p => (
          <ProjectCard key={p.id ?? p.title} item={{ ...p, onClick: () => openModal(p) }}  />
        ))}

        {selected && <ProjectModal item={selected} onClose={closeModal} />}
      </Container>

     
     
    </Container>
  );
};
