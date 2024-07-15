'use client';

import React, {useEffect, useRef} from 'react';
import './ourTechnology.css';
import {Text} from '../../core-ui/text/Text';

const OurTechnology: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (imageRef.current) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const parallaxOffset = scrollTop * 0.2; 

      imageRef.current.style.transform = `translateY(${parallaxOffset}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial setup

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundImageUrl =
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg';

  return (
    <section className="our-technology" id="tech" ref={containerRef}>
      <div
        className="parallax-background"
        ref={imageRef}
        style={{backgroundImage: `url(${backgroundImageUrl})`}}
      ></div>
      {/* Content */}
      <Text
        size="header"
        title="TEKNOLOGI KAMI"
        className="our-technology-title"
      />
      <div className="our-technology-container">
        <div className="our-technology-img">
          <img
            src="https://imgv3.fotor.com/images/cover-photo-image/AI-illustration-of-a-dragon-by-Fotor-AI-text-to-image-generator.jpg"
            alt="Technology"
          />
        </div>
        <div className="our-technology-text">
          <Text size="normal" title="Spesifikasi" style={{height: '3rem'}} />
          <Text size="small" title="Ukuran Layar" />
          <Text size="small" title="Jenis Iklan" />
          <Text size="small" title="Jam Oprasional Spot" />
          <Text size="small" title="Market Exposure" />
          <Text size="small" title="Durasi per Iklan Orientasi" />
          <Text size="small" title="Rotasi Iklan" />
        </div>
      </div>
    </section>
  );
};

export default OurTechnology;
