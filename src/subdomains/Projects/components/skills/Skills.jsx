import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@components/ui";
import { SkillBar } from "../skillBar/skillbar";
import btns from "@assets/images/buttons.png";
import { skills } from "@core/enums/skills.enums";

/**
 * Calcula grid sem scroll:
 * - tenta de 1..N colunas
 * - estima altura do item com base em uma largura base (layout horizontal)
 * - escolhe a configuração que cabe no pai e usa a maior escala possível
 */
function useFitGrid(refEl, itemCount, opts = {}) {
  const {
    baseItemWidth = 320,     // largura "de referência" de um SkillBar
    baseItemHeight = 120,    // altura "de referência" de um SkillBar
    gap = 16,                // gap entre cards (px)
    maxCols = 8,             // limite de colunas (segurança)
  } = opts;

  const [state, setState] = useState({ cols: 1, scale: 1 });

  useEffect(() => {
    if (!refEl?.current) return;

    const el = refEl.current;
    const ro = new ResizeObserver(() => {
      const cw = el.clientWidth;
      const ch = el.clientHeight;
      if (cw <= 0 || ch <= 0) return;

      const maxColumns = Math.min(itemCount, maxCols);
      let best = { cols: 1, scale: 0 };

      // tenta 1..maxColumns colunas e pega a MAIOR scale que caiba sem scroll
      for (let cols = 1; cols <= maxColumns; cols++) {
        const totalGapX = gap * Math.max(0, cols - 1);
        const itemWidth = (cw - totalGapX) / cols;

        const rows = Math.ceil(itemCount / cols);
        const totalGapY = gap * Math.max(0, rows - 1);

        // escala relativa ao “tamanho base”
        const scale = itemWidth / baseItemWidth;
        const itemHeight = baseItemHeight * scale;

        const totalHeight = rows * itemHeight + totalGapY;

        if (totalHeight <= ch && scale > best.scale) {
          best = { cols, scale };
        }
      }

      // se nenhuma config coube, usamos a maior quantidade de colunas possível
      if (best.scale === 0) {
        const cols = maxColumns;
        const totalGapX = gap * Math.max(0, cols - 1);
        const itemWidth = (cw - totalGapX) / cols;
        const scale = Math.max(0.5, itemWidth / baseItemWidth); // garante que não colapse demais
        best = { cols, scale };
      }

      setState(best);
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, [refEl, itemCount, baseItemWidth, baseItemHeight, gap, maxCols]);

  return state;
}

export const Skills = () => {
  const gridRef = useRef(null);
  const { cols, scale } = useFitGrid(gridRef, skills.length, {
    baseItemWidth: 320,
    baseItemHeight: 120,
    gap: 16,
    maxCols: 10,
  });

  return (
    <Container width="50%">
      <Container
        height="90%"
        width="80%"
        bg="white"
        borderRadius="2rem"
        style={{
          border: "0.5rem solid var(--secondary)",
          overflow: "hidden",              // sem scroll no card
          transform: "rotate(-5deg)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header fixo */}
        <Container
          display="flex"
          bg="var(--secondary)"
          margin="0"
          padding="0 0.5rem"
          align="center"
          justify="space-between"
          height="56px"
          style={{ flex: "0 0 auto" }}
        >
          <h3>hard_skills.exe</h3>
          <img height="100%" width="auto" src={btns} />
        </Container>

        {/* Grid que SEMPRE cabe na altura restante */}
        <Container
          as="section"
          margin="0"
          padding="1rem"
          display="grid"
          height="auto"
          style={{
            flex: "1 1 auto",
            minHeight: 0,
            // sem overflow: o cálculo garante que caiba
            overflow: "hidden",
            // colunas calculadas
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: "16px",
            // expõe escala via CSS var para o SkillBar
            ["--item-scale"]: scale,
          }}
          ref={gridRef}
        >
          {skills.map((it, idx) => (
            <SkillBar
              key={idx}
              label={it.name}
              level={it.level}
              icon={it.iconUrl}
            />
          ))}
        </Container>
      </Container>
    </Container>
  );
};
