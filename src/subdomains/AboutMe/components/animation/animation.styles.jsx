import styled, { keyframes } from "styled-components";
import bgPink from "@assets/images/bgPink2.png";

export const pulse = keyframes`
  0%,100% { filter: drop-shadow(0 0 1rem rgba(241,218,243,.6)) brightness(1); }
  50%     { filter: drop-shadow(0 0 1.6rem rgba(241,218,243,.95)) brightness(1.05); }
`;

export const floaty = keyframes`
  0%,100% { transform: translateY(0px) }
  50%     { transform: translateY(-6px) }
`;

export const drift = keyframes`
  0%   { transform: translateX(-5%) translateY(0%); opacity:.6; }
  50%  { transform: translateX(5%) translateY(2%);  opacity:.85;}
  100% { transform: translateX(-5%) translateY(0%); opacity:.6; }
`;

export const Stage = styled.div`
  position: relative;
  width: 97vw;

  /* usa 90svh quando suportado (telas mobile com barras de URL variáveis) */
  height: 90vh;
  @supports (height: 100svh) {
    height: 90svh;
  }

  border-radius: 0 0 4vh 4vh;
  background-image: url(${bgPink});
  background-position: center;
  background-size: cover;
  overflow: hidden;
  perspective: 800px;

  transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
  transition: transform .2s ease;

  padding-inline: clamp(8px, 2vw, 24px);
`;

export const GlowWrap = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  height: 100%;
  padding-block: clamp(12px, 3vh, 32px); 
  transform: translateZ(60px);
`;

export const HeroImg = styled.img`
  /* regra de ouro: largura manda, altura se adapta */
  width: clamp(220px, 60vw, 1000px);
  max-height: clamp(28svh, 52svh, 62svh);
  height: auto;               
  object-fit: contain;        
  user-select: none;
  pointer-events: none;

  animation: ${floaty} 6s ease-in-out infinite;

  &.glow {
    animation:
      ${floaty} 6s ease-in-out infinite,
      ${pulse} 3.8s ease-in-out infinite;
  }

  /* recorte suave nas bordas brilhantes */
  mask-image: radial-gradient(120% 120% at 50% 50%, #000 70%, transparent 100%);

  /* telas muito estreitas: prioriza largura, limita altura */
  @media (max-width: 480px) {
    width: 82vw;
    max-height: 48svh;
  }

  /* landscape com pouca altura (laptops/tablets deitados) */
  @media (orientation: landscape) and (max-height: 600px) {
    width: min(70vw, 900px);
    max-height: 60vh;
  }

  /* reduz efeitos se usuário prefere menos movimento */
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    filter: none !important;
  }
`;

export const Sparks = styled.div`
  position: absolute;
  inset: -10%;
  pointer-events: none;
  z-index: 2;
  mix-blend-mode: screen;
  background:
    radial-gradient(2px 2px at 20% 30%, rgba(241,218,243,.9), transparent 60%),
    radial-gradient(1.5px 1.5px at 70% 60%, rgba(241,218,243,.8), transparent 60%),
    radial-gradient(2px 2px at 85% 20%, rgba(241,218,243,.85), transparent 60%),
    radial-gradient(1.5px 1.5px at 40% 80%, rgba(241,218,243,.7), transparent 60%);
  animation: ${drift} 12s ease-in-out infinite;
`;

export const Grain = styled.div`
  position: absolute; inset: 0;
  pointer-events: none;
  opacity: .12;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,\
    <svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'>\
      <filter id='n'>\
        <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>\
        <feColorMatrix type='saturate' values='0'/>\
      </filter>\
      <rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/>\
    </svg>");
  background-size: 220px;
  animation: grainShift 1.6s steps(2) infinite;
  @keyframes grainShift { to { transform: translate3d(-10px, 10px, 0) } }
`;

export const Vignette = styled.div`
  position: absolute; inset: 0;
  background: radial-gradient(80% 70% at 50% 40%, transparent 55%, rgba(0,0,0,.35) 100%);
  pointer-events: none;
`;