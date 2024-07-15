import VisibilityCard from './VisibilityCard';
import './visibilityProduct.css';
import {Text} from '@/app/core-ui/text/Text';

export default function visibilityProduct() {
  const visibilityData = [
    {
      id: '1',
      imageSrc:
        'https://cdn-web.ruangguru.com/landing-pages/assets/382235e1-0821-4819-a29e-6e029c97580e.jpg',
      subtitle: '30 Spot Penayangan Iklan Digital',
    },
    {
      id: '2',
      imageSrc:
        'https://marketingweek.imgix.net/content/uploads/2016/07/29160619/internet-ad.png?auto=compress,format&q=60&w=736&h=451',
      subtitle: '100 Kali Penayangan Setiap Hari(6 AM - 3 PM)',
    },
    {
      id: '3',
      imageSrc:
        'https://multimedia.beritajakarta.id/photo/2014_508c75c8507a2ae5223dfd2faeb98122/a31042929d6f8ec4bf4e9d6f2aa7d9ab.jpg',
      subtitle: '145.000 Pengunjung Pasar/Hari',
    },
  ];
  return (
    <section className="visibility-product" id="product">
      <Text size="header" title="WUJUDKAN VISIBILITAS BRAND ANDA" className="visibility-product-title" />
      <div className="visibility-product-container">
        {visibilityData.map((visibility) => (
          <VisibilityCard
            key={visibility.id}
            imageSrc={visibility.imageSrc}
            subtitle={visibility.subtitle}
          />
        ))}
      </div>
    </section>
  );
}
