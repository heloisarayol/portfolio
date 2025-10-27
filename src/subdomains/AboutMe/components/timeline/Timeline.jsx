import { Badge, Card, DateText, Desc, Item, Items, Title, TrackContainer, Wrapper } from "./timeline.styles";

export function Timeline({ items = [] }) {
  return (
    <Wrapper>
      <TrackContainer>
        <Items>
          {items.map((it, idx) => {
            const key = it.id ?? `${it.title ?? "item"}-${idx}`;
            const hasDesc = typeof it.description === "string" && it.description.trim().length > 0;
            const hasHighlights = Array.isArray(it.highlights) && it.highlights.length > 0;

            return (
              <Item key={key}>
                <Badge aria-hidden>
                  <div className="wrap">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 3.5l1.9 4.26 4.6.38-3.5 3.02 1.05 4.45L12 13.9 7.95 15.6 9 11.15 5.5 8.14l4.6-.38L12 3.5z"
                        stroke="#F1DAF3"
                        strokeWidth="1.6"
                        fill="none"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Badge>

                <DateText>{it.date}</DateText>

                <Card>
                  <Title>{it.title}</Title>
          
                  {hasDesc && <Desc>{it.description}</Desc>}
          
                  {hasHighlights && (
                    <ul
                      style={{
                        margin: hasDesc ? "10px 0 0" : "0",
                        padding: "0 0 0 1.1rem",
                      }}
                    >
                      {it.highlights.map((h, i) => (
                        <Desc as="li" key={i} style={{ margin: "6px 0" }}>
                          {h}
                        </Desc>
                      ))}
                    </ul>
                  )}
                </Card>
              </Item>
            );
          })}
        </Items>
      </TrackContainer>
    </Wrapper>
  );
}