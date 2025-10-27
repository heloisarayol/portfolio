
import styled, { keyframes } from "styled-components";
const scrollBG = keyframes`
  from { background-position-x: 0; }
  to   { background-position-x: -1000px; } 
`;

export const Ribbon = styled.div`
z-index: 2;  
  --speed: 20s;         
  --tilt: -2deg;         
  position: relative;
  height: clamp(36px, 7vh, 150px);
  width: 100%;
  overflow: hidden;
  transform: rotate(var(--tilt));
  background:
    linear-gradient(180deg, rgba(0,0,0,0) 15%, rgba(0,0,0,.12) 85%),
    url(${({ $stripTile }) => $stripTile}) repeat-x,
    linear-gradient(var(--primary), var(--primary));
  animation: ${scrollBG} var(--speed) linear infinite;
  will-change: background-position;
  background-size: contain;
  padding: 1rem;


  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;