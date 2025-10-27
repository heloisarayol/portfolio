import styled, { keyframes } from "styled-components";

const vars = {
  surface: "#000000",
  line: "rgba(255,255,255,0.7)",
  arrow: "#ffffff",
  badgeFill: "#9B6FAF",
  badgeRing: "rgba(255,255,255,0.18)",
  cardBg: "var(--primary)",
  cardText: "#0B0B0B",
  dateText: "#FFFFFF",
  titleText: "#0B0B0B",
  radius: "18px",
};

export const Wrapper = styled.section`
  --gap: clamp(16px, 3vw, 32px);
  --track-h: 8px;
  --badge-size: 52px;

  width: 100%;
  box-sizing: border-box;

  color: ${vars.dateText};
  padding: clamp(16px, 3vw, 24px);
  border-radius: ${vars.radius};
`;

export const TrackContainer = styled.div`
  position: relative;

  @media (min-width: 860px) {
    --track-y: 64px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: var(--track-y);
      height: var(--track-h);
      background: ${vars.line};
      border-radius: 999px;
      z-index: 1;
    }

  }

  @media (max-width: 859px) {
    padding-left: calc(16px + var(--gap)); 
    &::before {
      content: "";
      position: absolute;
      left: 16px;           
      top: 0;
      bottom: 0;
      width: 16px;
      transform: translateX(-50%);
      background: ${vars.line};
      border-radius: 999px;
      z-index: 1;
    }
  }
`;

export const Items = styled.div`
  position: relative;

  @media (min-width: 860px) {
    display: grid;
    justify-content: center;
    grid-auto-flow: column;
    grid-auto-columns: minmax(320px, 560px);
    gap: var(--gap);
    padding: calc(var(--track-y) + 24px) 8px 8px; 
    scrollbar-width: thin;
  }

  @media (max-width: 859px) {
    display: grid;
    gap: calc(var(--gap) * 1.25);
     justify-content: center;
    padding-top: 8px; /* pequenas folgas */
  }
`;

export const pulseStar = keyframes`
  0%   { transform: scale(1); }
  50%  { transform: scale(1.08); }
  100% { transform: scale(1); }
`;

/* Badge (estrela) */
export const Badge = styled.div`
  position: absolute;
  z-index: 3; 
  @media (min-width: 860px) {
    left: 50%;
    transform: translate(-50%, -90%);
  }

  @media (max-width: 859px) {
    left: 16px; /* centro do trilho vertical */
    top: calc(var(--badge-size) / 2); /* centro da badge = topo do item */
    transform: translate(-4.25rem, -50%);
  }

  & > .wrap {
    position: relative;
    width: var(--badge-size);
    height: var(--badge-size);
    border-radius: 999px;
    background: radial-gradient(60% 60% at 50% 45%, ${vars.badgeFill}, var(--secondary));
    outline: 10px solid ${vars.badgeRing};
  }

  & svg {
    position: absolute;
    inset: 0;
    margin: auto;
    width: 26px;
    height: 26px;
    display: block;
    filter: drop-shadow(0 0 2px rgba(255,255,255,0.35));
    transform-origin: center;
    animation: ${pulseStar} 1.6s ease-in-out infinite;
  }
`;

export const Item = styled.article`
  position: relative;
  scroll-snap-align: start;

  @media (max-width: 859px) {
    padding-top: calc(var(--badge-size) + 8px);
  }
`;

export const DateText = styled.div`
  font-size: clamp(12px, 1.6vw, 16px);
  letter-spacing: 0.02em;
  margin-bottom: 10px;
  color: ${vars.dateText};
  z-index: 2;

  @media (min-width: 860px) {
    margin-left: 12px;
  }
`;

export const Card = styled.div`
  background: ${vars.cardBg};
  color: ${vars.cardText};
  border-radius: 16px;
  border: 2px solid rgba(255,255,255,0.12);
  padding: clamp(14px, 2.4vw, 20px);
  box-shadow:
    0 8px 18px rgba(0,0,0,0.32),
    inset 0 0 0 1px rgba(255,255,255,0.12);
  max-width: 56ch;
  z-index: 2;

  @media (min-width: 860px) {
    min-height: 148px;
  }
`;

export const Title = styled.h3`
  font-family: "Orbitron", system-ui, sans-serif;
  font-weight: 800;
  margin: 0 0 10px;
  font-size: clamp(18px, 2.2vw, 22px);
  color: ${vars.titleText};
`;

export const Desc = styled.p`
  margin: 0;
  line-height: 1.45;
  font-size: clamp(13px, 1.8vw, 15px);
  font-weight: 600;
`;