import React from 'react';
import styled from 'styled-components';

// 1. Definição do estilo do botão utilizando styled.a
// Usamos a tag <a> pois o botão servirá como um link.
const StyledButtonLink = styled.a`
  display: inline-flex; 
  align-items: center;   
  justify-content: center; 
  width: clamp(4rem, 10vh, 10rem);          
  height: clamp(4rem, 10vh, 10rem);        
  background-color: var(--secondary); 
  border-radius: 12px;     
  text-decoration: none;    
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #9370a3; 
    transform: scale(1.05);     
  }
`;

export const ContactButton = ({ href, label, children }) => {
  return (
    <StyledButtonLink 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={label}
    >
      {children}
    </StyledButtonLink>
  );
};
