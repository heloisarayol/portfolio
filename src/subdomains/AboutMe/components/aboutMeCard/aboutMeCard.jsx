import { Container } from "@components/ui"
import foto from "@assets/images/Foto.png"
import { ContactButton } from "@components/ui/ButtonContact"
import linkedin from "@assets/icons/linkedin.svg"
import email from "@assets/icons/email.svg"
import github from "@assets/icons/github.svg"




export const AboutMeCard = () => {
    return (
        <Container display="flex" wrap="wrap" gap="2rem"  justify="center" align="center">
   
           
            <Container display="flex" align="center" justify="flex-end" height="50%">
                <img src={foto} style={{maxWidth: "30%"}}></img>

                <Container display="flex" direction="column" gap="2rem" align="flex-start">
                   
                    <h2>Olá, eu sou Heloisa!</h2>

                    <Container bg="var(--primary)"  margin="0" borderRadius="2rem">
                        <Container  padding="2rem">
                        <h4 style={{color: "black", textAlign: "justify", textIndent: "1rem"}}>
                        Sou desenvolvedora que atua na interseção entre design e tecnologia, com evolução rápida de estagiária para júnior. 
                        Colaborei em projetos para grandes clientes da indústria, ajudando a resolver desafios reais de qualidade e produção, 
                        com foco em experiências rápidas, acessíveis e intuitivas. 
                        Também realizo testes com usuários e treinamentos, mantendo a ponte entre requisito de negócio e uso real.
            
                        </h4>
                        <h4 style={{color: "black", textAlign: "justify", textIndent: "1rem"}}>
                        Gosto de simplificar fluxos reais: entender o problema, prototipar, iterar com feedbacks e medir resultado. 
                        Estou sempre buscando evoluir e pronta para novos desafios!
                        </h4>

                        </Container>
                    
                    </Container>

                    <Container  height="21%" display="flex" gap="2%" >
                        <ContactButton label="linkedin" href="https://www.linkedin.com/in/heloisa-rayol">
                            <img src={linkedin}/>
                        </ContactButton>
                        <ContactButton  href="mailto:helo.rayol@gmail.com" label="Enviar um e-mail">
                            <img src={email}/>
                        </ContactButton>
                        <ContactButton label="linkedin" href="https://github.com/heloisarayol">
                            <img src={github}/>
                        </ContactButton>
                    </Container>
              
                </Container>
      
            </Container>
            
    

        </Container>
    )
}