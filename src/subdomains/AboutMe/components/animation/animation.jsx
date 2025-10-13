import { useRef } from "react";
import name from "@assets/images/name2.gif";
import { GlowWrap, Grain, HeroImg, Sparks, Stage, Vignette } from "./animation.styles";

export const Animation = () => {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;   // -0.5..0.5
    const dy = (e.clientY - cy) / rect.height;  // -0.5..0.5
    // limita e converte pra graus
    const rx = (dy * -6).toFixed(2) + "deg";
    const ry = (dx * 8).toFixed(2) + "deg";
    el.style.setProperty("--rx", rx);
    el.style.setProperty("--ry", ry);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <Stage ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
        <Sparks />
        <Grain />
        <GlowWrap>
          <HeroImg src={name} alt="Logo com estrelas orbitando" className="glow" />
        </GlowWrap>
        <Vignette />
    </Stage>
  );
};
