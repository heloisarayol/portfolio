import styled, { keyframes } from "styled-components";

const glow = keyframes`
  from { text-shadow: 0 0 0 rgba(168,111,209,0.0); }
  to   { text-shadow: 0 0 6px rgba(168,111,209,0.6); }
`;

export const Card = styled.section`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 24px;
  align-items: center;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(215,183,246,0.4);
  border-radius: 24px;
  padding: 28px;
  backdrop-filter: blur(6px);
  box-shadow: 0 6px 0 #8746b6;
  max-width: 860px;
  margin: 16px 0;
  
  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const AvatarWrap = styled.div`
  position: relative;
  width: 220px; height: 220px;
  margin: 0 auto;
  @media (max-width: 920px) { width: 180px; height: 180px; }
`;

export const Stars = styled.span`
  position: absolute;
  top: -14px; left: -14px;
  font-size: 28px;
  color: #d7b7f6;
  filter: drop-shadow(0 0 6px rgba(215,183,246,.8));
`;

export const Avatar = styled.img`
  width: 100%; height: 100%;
  object-fit: cover;
  border-radius: 28px;
  border: 2px solid #d7b7f6;
  box-shadow: 0 8px 0 #a86fd1;
`;

export const Title = styled.h2`
  font-size: clamp(28px, 3.2vw, 36px);
  margin: 0 0 4px 0;
  color: #f6eaff;
  animation: ${glow} 1s ease-out forwards;
`;

export const SubTitle = styled.p`
  margin: 0 0 12px 0;
  font-size: 16px;
  opacity: .9;
  color: #d7b7f6;
  letter-spacing: .3px;
`;

export const Copy = styled.p`
  color: #f0e7ff;
  line-height: 1.55;
  font-size: 16px;
  margin: 0 0 14px 0;
  strong { color: #a8ffcf; }
`;

export const ChipRow = styled.div`
  display: flex; gap: 8px; flex-wrap: wrap;
  margin-bottom: 16px;
  justify-content: flex-start;
  @media (max-width: 920px) { justify-content: center; }
`;

export const Chip = styled.span`
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(215,183,246,.6);
  background:
    linear-gradient(180deg, rgba(247,168,227,.22), rgba(168,111,209,.18));
  backdrop-filter: blur(4px);
`;

export const Actions = styled.div`
  display: flex; align-items: center; gap: 16px;
  justify-content: flex-start;
  @media (max-width: 920px) { justify-content: center; }
`;

export const GelButton = styled.button`
  appearance: none;
  border: 0;
  padding: 10px 18px;
  border-radius: 14px;
  font-weight: 700;
  cursor: pointer;
  color: #1a0927;
  background:
    linear-gradient(180deg, #f7a8e3 0%, #d7b7f6 60%, #a86fd1 100%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.7),
    inset 0 -6px 12px rgba(0,0,0,.15),
    0 6px 0 #8746b6;
  transition: transform .12s ease, box-shadow .12s ease, filter .12s ease;
  text-decoration: none;
  &:hover { transform: translateY(-1px); filter: brightness(1.05); }
  &:active { transform: translateY(2px); box-shadow: 0 3px 0 #8746b6; }
  &:focus-visible { outline: 2px solid #a8ffcf; outline-offset: 3px; }
`;

export const Socials = styled.div`
  display: flex; gap: 10px;
`;

export const SocialLink = styled.a`
  width: 42px; height: 42px;
  display: grid; place-items: center;
  border-radius: 12px;
  border: 1px solid rgba(215,183,246,.6);
  background: rgba(255,255,255,.06);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.25);
  transition: transform .15s ease, box-shadow .15s ease, filter .15s ease;

  svg { font-size: 18px; color: #f6eaff; }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 12px rgba(168,111,209,.65);
    filter: saturate(1.2);
  }
  &:focus-visible { outline: 2px solid #a8ffcf; outline-offset: 3px; }
`;
