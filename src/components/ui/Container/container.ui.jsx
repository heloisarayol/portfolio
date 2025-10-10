import styled from 'styled-components';

export const Container = styled.div`
  width: ${(({width}) => width || "100%")};
  margin-left: auto;
  margin-right: auto;
  flex-wrap: ${({ wrap }) => wrap};
  position: ${(({position}) => position)};
  margin: ${(({margin}) => margin)};
  height: ${(({height}) => height || "100%")};
  background-image:${({ img }) => img != null || img != undefined ? `url(${img})` : ""};
  background-size: ${({ bgSize }) => bgSize ?? 'contain'};
  background-position: ${({bgPosition}) => bgPosition};
  background-repeat: no-repeat;
  border-radius: ${(({borderRadius})=> borderRadius)};
  background-color: ${({ bg }) => bg};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  align-content: ${({ alignContent }) => alignContent};
  gap: ${({ gap }) => gap};
  flex: ${({flex}) => flex };

  @media (orientation: landscape) and (min-width: 900px)
  {
    ${({mediaMin900}) => mediaMin900}
  }

`;
