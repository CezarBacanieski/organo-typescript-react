import './Banner.css';
import React from 'react';

interface BannerProps {
  src: string;
  textoAlternativo?: string;
}

const Banner = ({ src, textoAlternativo }: BannerProps) => {
  return (
    <header className='banner'>
      <img
        src={src}
        alt={textoAlternativo}
      />
    </header>
  );
};
export default Banner;
