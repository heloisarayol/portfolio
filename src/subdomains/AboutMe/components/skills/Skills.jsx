import React from "react";
import styled from "styled-components";

const SkillContainer = styled.div`
  --s: var(--item-scale, 1);
  display: flex;
  flex: 1 1 40%;
  align-items: center;
  gap: 1rem;
  width: 100%;
  min-width: 0;         
  height: fit-content;
`;

const SkillBadge = styled.div`
  background-color: #e6d9f2;
  border: 2px solid #c7b1d5;
  border-radius: calc(16px * var(--s));
  width: calc(90px * var(--s));
  height: calc(90px * var(--s));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(4px * var(--s));
  font-weight: bold;
  color: #333;
  flex-shrink: 0;

  img {
    max-width: 70%;
    max-height: 70%;
    height: auto;
    object-fit: contain;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: calc(8px * var(--s));
  flex: 1 1 auto;
  min-width: 0; 
  text-align: left;         

  h4 {
    color: #000;
    margin: 0;
    font-size: calc(18px * var(--s));
    line-height: 1.2;

    white-space: normal;
    overflow-wrap: anywhere;  
    word-break: break-word;   
    hyphens: auto;            

    overflow: visible;
    text-overflow: clip;
  }
`;

export const SkillBar = ({ icon, label, level }) => {
  return (
    <SkillContainer>
      <SkillBadge>
        <img src={icon} alt="" />
      </SkillBadge>

      <RightSide>
        <h4>{label}</h4>
      </RightSide>
    </SkillContainer>
  );
};
