import React from 'react';
import './ourServices.css';
import {Text} from '@/app/core-ui/text/Text';
import CardServices from './CardServices';

const OurServices: React.FC = () => {
  const servicesData = [
    {
      id: '1',
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/4961/4961639.png',
      subtitle: 'Instalasi & Pemasangan',
      description:
        'Kami menawarkan instalasi dan pemasangan yang mudah dan cepat.',
    },
    {
      id: '2',
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
      subtitle: 'Pemeliharaan & Dukungan Teknis',
      description:
        'Kami menyediakan pemeliharaan dan dukungan teknis agar sistem berjalan optimal',
    },
    {
      id: '3',
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/2936/2936704.png',
      subtitle: 'Layanan Pembuatan Video Iklan',
      description:
        'Kami membantu Anda membuat iklan yang menarik untuk mencapai target audiens.',
    },
    {
      id: '4',
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/2867/2867142.png',
      subtitle: 'Penargetan lokasi Yang Tepat',
      description:
        'Kami menyediakan layanan penargetan lokasi yang dapat membantu Anda mencapai target audiens.',
    },
  ];

  return (
    <section className="our-services" id="services">
      <Text size="header" title="LAYANAN KAMI" className="our-services-title" />
      <div className="service-container">
        {servicesData.map((service) => (
          <CardServices
            key={service.id}
            imageSrc={service.imageSrc}
            subtitle={service.subtitle}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
