'use client';

import React, {useEffect} from 'react';
import './ourServices.css';
import {Text} from '@/app/core-ui/text/Text';

interface CardProps {
  imageSrc: string;
  subtitle: string;
  description: string;
}

const CardServices: React.FC<CardProps> = ({
  imageSrc,
  subtitle,
  description,
}) => {
  useEffect(() => {
    const cards = document.querySelectorAll('.service');
    cards.forEach((card) => {
      const bubbles = card.querySelectorAll('.bubble');
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        bubbles.forEach((bubble) => {
          bubble.style.left = `${x}px`;
          bubble.style.top = `${y}px`;
        });
        card.classList.add('hovered');
        card.classList.remove('blur');
        cards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.classList.add('blur');
          }
        });
      });

      card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
        cards.forEach((otherCard) => {
          otherCard.classList.remove('blur');
        });
      });
    });
  }, []);

  return (
    <div className="service">
      {[...Array(1)].map((_, i) => (
        <div
          key={i}
          className={`bubble bubble-${i}`}
          style={{animationDuration: `${3 + i * 2}s`}}
        ></div>
      ))}
      <div className="services-img">
        <img src={imageSrc} alt="Service" />
      </div>
      <div className="service-text">
        <Text size="normal" title={subtitle} />
        <hr className="divider" />
        <Text
          className="description"
          size="small"
          title={description}
          style={{marginTop: '.3rem'}}
        />
      </div>
    </div>
  );
};

export default CardServices;
