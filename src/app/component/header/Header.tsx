'use client';

import React, { useEffect, useRef } from 'react';
import './header.css';
import { Text } from '../../core-ui/text/Text';
import Button from '../../core-ui/button/Button';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (
      headerRef.current &&
      imageRef.current &&
      textRef.current &&
      buttonRef.current
    ) {
      const bannerHeight = headerRef.current.offsetHeight;
      const parallaxRate = 0.5;
      const opacityRate = 1.2;

      imageRef.current.style.transform = `translateY(${scrollY * parallaxRate}px)`;
      textRef.current.style.transform = `translateY(${scrollY * parallaxRate * 0.8}px)`;
      buttonRef.current.style.transform = `translateY(${scrollY * parallaxRate * 0.8}px)`;

      textRef.current.style.opacity = `${1 - (scrollY / bannerHeight) * opacityRate}`;
      buttonRef.current.style.opacity = `${1 - (scrollY / bannerHeight) * opacityRate}`;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className="banner">
      <div className="container">
        <div className="header-img" ref={imageRef}>
          <img
            src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
            alt="Header"
          />
        </div>
        <div className="overlay">
          <div className="overlay-text" ref={textRef}>
            <Text
              size="header"
              title="Kami siap meningkatkan visibilitas Brand anda"
              style={{ color: '#ffffff' }}
            />
          </div>
          <div className="overlay-button" ref={buttonRef}>
            <Button type="primary" title="Pesan Sekarang" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
