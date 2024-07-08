import React from 'react';
import './ourServices.css';
import {Text} from '@/app/core-ui/text/Text';

interface CardProps {
  imageSrc: string;
  subtitle: string;
  description: string;
}

const Card: React.FC<CardProps> = ({imageSrc, subtitle, description}) => {
  return (
    <div className="service">
      <div className="services-img">
        <img src={imageSrc} alt="Service" />
      </div>
      <div className="service-text">
        <Text size="normal" title={subtitle} />
        <Text size="small" title={description} style={{marginTop: '.3rem'}} />
      </div>
    </div>
  );
};

export default Card;
