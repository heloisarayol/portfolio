import { Container } from "@components/ui"
import foto from "@assets/images/Foto.png"
import { ContactButton } from "@components/ui/ButtonContact"
import linkedin from "@assets/icons/linkedin.svg"
import email from "@assets/icons/email.svg"
import github from "@assets/icons/github.svg"
import { useOrientation } from "@hooks/useOrientation"



export const AboutMeCard = () => {
    const orientation = useOrientation()
    return (
        <Container  display="flex" wrap="wrap" gap="2rem" width={orientation == "landscape" ? "40%" : "90%"} justify="center" align="center">
            <Container width="75%" height="8%" margin="0 auto 0 0">
                <h2>Olá, eu sou Heloisa!</h2>
            </Container>
           
            <Container display="flex" align="center" justify="flex-end" height="50%">
                <img src={foto} style={{position: "absolute", left: 0, maxHeight: "40%"}}></img>
                <Container bg="var(--primary)" width="75%" margin="0" borderRadius="2rem">
                    <Container width="85%" margin="0 0 0 auto" padding="2rem">
                    <h4 style={{color: "black"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                    </h4>

                    </Container>
                  
                </Container>
            </Container>
            
            <Container  height="21%"  width="75%" display="flex" gap="2%"  margin="0 0 0 auto">
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
    )
}