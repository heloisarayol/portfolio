import { useState, useEffect } from 'react';

const getOrientation = () => {
  if (typeof window === 'undefined') {
    return 'portrait'; // Valor padrão para renderização no servidor (SSR)
  }
  return window.matchMedia("(orientation: landscape)").matches
    ? 'landscape'
    : 'portrait';
};

export const useOrientation = () => {
  const [orientation, setOrientation] = useState(getOrientation());

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(getOrientation());
    };

    // Adiciona um ouvinte para o evento de redimensionamento da janela,
    // que é uma maneira confiável de detectar mudanças de orientação.
    window.addEventListener('resize', handleOrientationChange);

    // Limpa o ouvinte quando o componente é desmontado para evitar vazamentos de memória.
    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return orientation;
};