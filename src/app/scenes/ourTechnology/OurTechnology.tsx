import './ourTechnology.css';
import {Text} from '@/app/core-ui/text/Text';

export default function ourTechnology() {
  return (
    <div className="our-technology">
      <Text size="header" title="TEKNOLOGI KAMI" className='our-technology-title'/>
      <div className="our-technology-container">
        <div className="our-technology-img">
          <img
            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            className=""
          />
        </div>
        <div className="our-technology-text">
          <Text size="normal" title="Spesifikasi" style={{height:'3rem'}} />
          <Text size="small" title="Ukuran Layar" />
          <Text size="small" title="Jenis Iklan" />
          <Text size="small" title="Jam Oprasional Spot" />
          <Text size="small" title="Market Exposure" />
          <Text size="small" title="Durasi per Iklan Orientasi" />
          <Text size="small" title="Rotasi Iklan" />
        </div>
      </div>
    </div>
  );
}
