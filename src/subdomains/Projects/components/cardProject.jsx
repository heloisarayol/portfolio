// ProjectCard.jsx
import React from "react";
import styled, { keyframes } from "styled-components";

/* ===== Tokens ===== */
const vars = {
  surface: "#EED3F3",
  text: "#0B0B0B",
  mediaBg: "#4b4446",
  ring: "rgba(0,0,0,0.12)",
  radius: "18px",
  badgeFill1: "#9B6FAF",
  badgeFill2: "#814A95",
  badgeRing: "rgba(255,255,255,0.25)",
};

/* ===== Layout ===== */
const Card = styled.article`
  --pad: clamp(10px, 1.6vw, 14px);

  position: relative;
  width: min(450px, 92vw);
  border-radius: ${vars.radius};
  background: var(--primary);
  border: 1rem solid var(--primary);
  box-shadow: 0 8px 18px rgba(0,0,0,0.28);
  overflow: hidden;
  transition: transform .18s ease, box-shadow .18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 22px rgba(0,0,0,0.34);
  }

  @media (max-width: 859px) {
    width: clamp(300px, 92vw, 450px);
   
  }
`;

const Media = styled.div`
  aspect-ratio: 16 / 11;
  background: ${vars.mediaBg};
  display: grid;
  place-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto; /* texto | badge */
  align-items: center;
  gap: 12px;
  padding: var(--pad) calc(var(--pad) + 2px) calc(var(--pad) + 4px) var(--pad);
`;

const TitleWrap = styled.div`
  min-width: 0;
`;

const Title = styled.div`
  font-weight: 800;
  color: ${vars.text};
  text-align: left;
  font-size: clamp(14px, 2.2vw, 16px);
  line-height: 1.1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Year = styled.div`
  color: ${vars.text};
  text-align: left;
  opacity: 0.9;
  font-size: clamp(12px, 1.9vw, 14px);
`;

/* ===== Badge ===== */
const pulse = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.06) rotate(3deg); }
  100% { transform: scale(1) rotate(0deg); }
`;

const Badge = styled.div`
  --size: 48px;

  width: var(--size);
  height: var(--size);
  border-radius: 999px;
  position: relative;
  background: radial-gradient(60% 60% at 50% 45%, ${vars.badgeFill1}, ${vars.badgeFill2});
  outline: 8px solid ${vars.badgeRing};
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  animation: ${pulse} 2s ease-in-out infinite;

  svg {
    width: 22px;
    height: 22px;
    display: block;
    filter: drop-shadow(0 0 2px rgba(255,255,255,0.35));
  }
`;

/* Tornar o card clicável quando href/onClick existirem */
const Clickable = styled.a`
  color: inherit;
  text-decoration: none;
  outline: none;
  display: block;

  &:focus-visible ${Card} {
    box-shadow: 0 0 0 3px #fff, 0 0 0 6px rgba(155,111,175,0.65);
  }
`;

/* ===== Componente ===== */
export function ProjectCard({ item }) {
  // Fallbacks amigáveis para diferentes estruturas de objeto
  const title = item?.title ?? item?.name ?? "Sem título";
  const year =
    item?.year ??
    item?.date ??
    (typeof item?.publishedAt === "string" ? item.publishedAt.slice(0, 4) : undefined) ??
    "";
  const image = item?.image ?? item?.thumb ?? item?.thumbnail ?? null;
  const href = item?.href ?? item?.url ?? item?.link ?? undefined;
  const alt = item?.alt ?? title;
  const onClick = item?.onClick; // se vier uma função no objeto
  const target = item?.target ?? (item?.newTab ? "_blank" : undefined);
  const rel = target === "_blank" ? "noopener noreferrer" : undefined;

  const content = (
    <Card role="group" aria-label={title}>
      <Media>
        {image ? <img src={image} alt={alt} /> : null}
      </Media>

      <Footer>
        <TitleWrap>
          <Title>{title}</Title>
          <Year>{year}</Year>
        </TitleWrap>

        <Badge aria-hidden>
          {/* estrela */}
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3.5l1.9 4.26 4.6.38-3.5 3.02 1.05 4.45L12 13.9 7.95 15.6 9 11.15 5.5 8.14l4.6-.38L12 3.5z"
              stroke="#F1DAF3"
              strokeWidth="1.6"
              fill="none"
              strokeLinejoin="round"
            />
          </svg>
        </Badge>
      </Footer>
    </Card>
  );

  if (href) {
    return (
      <Clickable href={href} target={target} rel={rel} onClick={onClick}>
        {content}
      </Clickable>
    );
  }
  if (typeof onClick === "function") {
    return (
      <Clickable
        as="button"
        onClick={onClick}
        style={{ all: "unset", display: "block", cursor: "pointer" }}
      >
        {content}
      </Clickable>
    );
  }
  return content;
}

/* ===== Exemplo de uso (map) =====
import thumb from "@assets/images/thumb.jpg";



export default function Grid() {
  return (
    <div style={{ padding: 24, display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
      {projects.map(p => (
        <ProjectCard key={p.id ?? p.title} item={p} />
      ))}
    </div>
  );
}
*/
