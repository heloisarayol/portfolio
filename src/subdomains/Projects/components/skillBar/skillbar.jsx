import React from "react";
import styled from "styled-components";

const SkillContainer = styled.div`
  --s: var(--item-scale, 1);         /* escala vinda do grid */
  display: flex;
  align-items: center;
  gap: calc(16px * var(--s));
  width: 100%;
  min-width: 0;
  /* altura “base” (120px) escalada: garante que a conta do hook funcione */
  height: calc(120px * var(--s));
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
  flex: 1;
  min-width: 0;

  h4 {
    color: #000;
    margin: 0;
    font-size: calc(18px * var(--s));
    line-height: 1.1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const ProgressBarContainer = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid var(--secondary);
  border-radius: calc(8px * var(--s));
  padding: calc(8px * var(--s));
  gap: calc(4px * var(--s));
`;

const ProgressSegment = styled.div`
  width: 100%;
  min-width: calc(8px * var(--s));
  height: calc(16px * var(--s));
  border-radius: calc(4px * var(--s));
  background-color: ${(p) => (p.isFilled ? "var(--secondary)" : "transparent")};
  border: 2px solid ${(p) => (p.isFilled ? "var(--secondary)" : "#E6D9F2")};
`;

export const SkillBar = ({ icon, label, level }) => {
  const totalSegments = 10;
  return (
    <SkillContainer>
      <SkillBadge>
        <img src={icon} alt="" />
      </SkillBadge>

      <RightSide>
        <h4>{label}</h4>
        <ProgressBarContainer>
          {Array.from({ length: totalSegments }).map((_, i) => (
            <ProgressSegment key={i} isFilled={i < level} />
          ))}
        </ProgressBarContainer>
      </RightSide>
    </SkillContainer>
  );
};
