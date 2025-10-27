import { Badge, Card, DateText, Desc, Item, Items, Title, TrackContainer, Wrapper } from "./timeline.styles";

export function Timeline({ items = [] }) {
    return (
      <Wrapper>
        <TrackContainer>
          <Items>
            {items.map((it, idx) => (
              <Item key={idx}>
                {/* Badge: fica sobre o trilho (desktop e mobile) */}
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
                  <Desc>{it.description}</Desc>
                </Card>
              </Item>
            ))}
          </Items>
        </TrackContainer>
      </Wrapper>
    );
  }