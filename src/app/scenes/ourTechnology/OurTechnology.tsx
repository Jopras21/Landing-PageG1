import './ourTechnology.css';
import {Text} from '@/app/core-ui/text/Text';

export default function ourTechnology() {
  return (
    <section className="our-technology" id='Tech'>
      <Text
        size="header"
        title="TEKNOLOGI KAMI"
        className="our-technology-title"
      />
      <div className="our-technology-container">
        <div className="our-technology-img">
          <img src="https://imgv3.fotor.com/images/cover-photo-image/AI-illustration-of-a-dragon-by-Fotor-AI-text-to-image-generator.jpg" />
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
}
