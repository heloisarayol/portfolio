import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const PRIMARY = "var(--primary, #F1DAF3)";
const BG = "var(--surface, #000)";

const pulse = keyframes`
  0% { text-shadow: 0 0 6px ${PRIMARY}, 0 0 12px rgba(241,218,243,.4); }
  50%{ text-shadow: 0 0 10px ${PRIMARY}, 0 0 18px rgba(241,218,243,.6); }
  100%{ text-shadow: 0 0 6px ${PRIMARY}, 0 0 12px rgba(241,218,243,.4); }
`;

const Wrapper = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${BG};
  border-bottom: 1px solid rgba(255,255,255,0.06);
`;

const Bar = styled.nav`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0.8rem 1rem;
  display: grid;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr auto;
  }
`;


const Links = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(1.2rem, 4vw, 4.5rem);

  @media (max-width: 768px) {
    /* menu mobile colapsável */
    position: relative;
    grid-column: 1 / -1;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: .5rem;

    max-height: ${({ open }) => (open ? "400px" : "0")};
    overflow: hidden;
    transition: max-height .35s ease;
    padding: ${({ open }) => (open ? "0.6rem 0" : "0")};
  }
`;

const LinkItem = styled.li``;

const LinkA = styled.a`
  --underline-h: 2px;
  letter-spacing: 0.18em;
  font-weight: 600;
  text-decoration: none;

  color: rgba(255,255,255,0.88);
  position: relative;
  display: inline-block;
  padding: .35rem .1rem;

  transition: transform .2s ease, color .2s ease;
  will-change: transform;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -0.25rem;
    height: var(--underline-h);
    width: 0%;
    transform: translateX(-50%);
    background: ${PRIMARY};
    box-shadow:
      0 0 6px ${PRIMARY},
      0 0 14px rgba(241,218,243,.7),
      0 0 22px rgba(241,218,243,.35);
    border-radius: 999px;
    transition: width .25s ease;
    opacity: .9;
  }

  /* efeito neon no hover/focus */
  &:hover,
  &:focus-visible {
    color: ${PRIMARY};
    transform: translateY(-1px);
    text-shadow:
      0 0 6px ${PRIMARY},
      0 0 14px rgba(241,218,243,.8),
      0 0 28px rgba(241,218,243,.45);
    animation: ${pulse} 1.8s ease-in-out infinite;
  }

  &:hover::after,
  &:focus-visible::after {
    width: 100%;
  }

  @media (pointer: coarse) {
    /* mais cliqueável no mobile */
    padding: .7rem .2rem;
  }
`;

const Burger = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: inline-flex;
  }

  border: 1px solid rgba(255,255,255,.15);
  background: transparent;
  color: ${PRIMARY};
  padding: .45rem .6rem;
  border-radius: .75rem;
  cursor: pointer;

  font-family: "Orbitron", system-ui, sans-serif;
  letter-spacing: .12em;
  font-size: .8rem;

  &:hover {
    box-shadow: 0 0 8px rgba(241,218,243,.35);
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Bar>
        <Links open={open} aria-expanded={open}>
          <LinkItem><LinkA href="#sobre">SOBRE MIM</LinkA></LinkItem>
          <LinkItem><LinkA href="#projetos">PROJETOS</LinkA></LinkItem>
          <LinkItem><LinkA href="#contato">CONTATO</LinkA></LinkItem>
        </Links>

        <Burger onClick={() => setOpen(v => !v)}>
          {open ? "FECHAR" : "MENU"}
        </Burger>
      </Bar>
    </Wrapper>
  );
}
