import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@components/ui";
import { SkillBar } from "../skillBar/skillbar";
import btns from "@assets/images/buttons.png";
import { skills } from "@core/enums/skills.enums";


export const Skills = () => {


  return (
    <Container style={{ flex: "1 1 30%"}}>
      <Container
        width="80%"
        bg="white"
        borderRadius="2rem"
        style={{
          border: "0.5rem solid var(--secondary)",
          overflow: "hidden",             
          transform: "rotate(-5deg)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container
          display="flex"
          bg="var(--secondary)"
          margin="0"
          padding="0 0.5rem"
          align="center"
          justify="space-between"
          height="56px"
          style={{ flex: "0 0 auto" }}
        >
          <h3>hard_skills.exe</h3>
          <img height="100%" width="auto" src={btns} />
        </Container>

        <Container
          padding="1rem"
          display='flex'
          wrap="wrap"
          gap="2rem"
        >
          {skills.map((it, idx) => (
            <SkillBar
              key={idx}
              label={it.name}
              level={it.level}
              icon={it.iconUrl}
            />
          ))}
        </Container>
      </Container>
    </Container>
  );
};
