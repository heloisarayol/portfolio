import styled from "styled-components";
export const FlatRibbon = styled.div`
  top: -3rem;
  position: absolute;
  z-index: 1;       
  position: relative;
  height: clamp(36px, 6vh, 150px);
  width: 100%;
  overflow: hidden;
  transform: rotate(var(--tilt));
  background:
    linear-gradient(180deg, rgba(0,0,0,0) 15%, rgba(0,0,0,.12) 85%),
    linear-gradient(var(--secondary), var(--secondary));
  background-size: contain;
  padding: 1rem;

`;