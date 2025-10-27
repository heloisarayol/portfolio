// ProjectModal.jsx
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);
  display: grid;
  place-items: center;
  z-index: 999;
  padding: clamp(12px, 3vw, 24px);
`;

const Dialog = styled.div`
  width: min(1100px, 96vw);
  background: var(--surface, #0f0f13);
  color: var(--text, #eaeaea);
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,.08);
  box-shadow: 0 20px 60px rgba(0,0,0,.55);
  overflow: hidden;
`;

const Head = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  background: rgba(255,255,255,.02);
  border-bottom: 1px solid rgba(255,255,255,.08);
`;

const TitleWrap = styled.div`
  min-width: 0;
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 800;
  color: var(--primary, #B792FF);
  font-size: clamp(18px, 2.6vw, 28px);
  line-height: 1.1;
`;

const Subtitle = styled.div`
  opacity: .8;
  font-size: clamp(12px, 1.8vw, 14px);
`;

const Close = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  color: #cfc7ff;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
  line-height: 0;
  transition: background .15s ease, transform .15s ease;

  &:hover { background: rgba(183,146,255,.12); }
  &:active { transform: scale(.98); }

  svg { width: 22px; height: 22px; display: block; }
`;

const Body = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1.2fr 1fr;
  padding: clamp(16px, 3vw, 24px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Media = styled.div`
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,.08);
  background: #24232a;
  overflow: hidden;
  aspect-ratio: 16/9;
  display: grid;
  place-items: center;

  img, video, iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Description = styled.div`
  p {
    margin: 0 0 12px;
    line-height: 1.6;
    color: #dcdcdc;
    font-size: clamp(14px, 1.9vw, 16px);
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
`;

const Action = styled.a`
  --bg: rgba(183,146,255,.14);
  --border: rgba(183,146,255,.28);

  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 12px;
  color: #e9e3ff;
  background: var(--bg);
  border: 1px solid var(--border);
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;

  &:hover {
    background: rgba(183,146,255,.22);
  }
`;

export default function ProjectModal({ item, onClose }) {
  const ref = useRef(null);

  // pequenos fallbacks pra campos
  const title = item?.title ?? item?.name ?? "Projeto";
  const year =
    item?.year ??
    item?.date ??
    (typeof item?.publishedAt === "string" ? item.publishedAt.slice(0,4) : "");
  const description = item?.description ?? item?.desc ?? "";
  const video = item?.video ?? item?.videos?.[0] ?? null;
  const image = item?.image ?? item?.images?.[0] ?? item?.thumbnail ?? null;

  const projectUrl = item?.href ?? item?.projectUrl ?? item?.url ?? undefined;
  const repoUrl = item?.repo ?? item?.repository ?? undefined;
  const postUrl = item?.post ?? item?.linkedin ?? undefined;

  // fechar com ESC e click fora
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    // travar scroll do body
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  return (
    <Overlay onClick={onOverlayClick} role="dialog" aria-modal="true" aria-labelledby="proj-title">
      <Dialog ref={ref}>
        <Head>
          <TitleWrap>
            <Title id="proj-title">{title}</Title>
            {year && <Subtitle>{year}</Subtitle>}
          </TitleWrap>
          <Close onClick={onClose} aria-label="Fechar">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Close>
        </Head>

        <Body>
          <Media>
            {video ? (
              <video src={video} controls preload="metadata" />
            ) : image ? (
              <img src={image} alt={title} />
            ) : (
              <span style={{opacity:.7}}>Sem mídia</span>
            )}
          </Media>

          <Description>
            {description && <p>{description}</p>}
            <Actions>
              {projectUrl && <Action href={projectUrl} target="_blank" rel="noopener noreferrer">Acessar projeto</Action>}
              {repoUrl && <Action href={repoUrl} target="_blank" rel="noopener noreferrer">Acessar repositório</Action>}
              {postUrl && <Action href={postUrl} target="_blank" rel="noopener noreferrer">Ver post</Action>}
            </Actions>
          </Description>
        </Body>
      </Dialog>
    </Overlay>
  );
}
