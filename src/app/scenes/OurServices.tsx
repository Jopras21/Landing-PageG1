import './ourServices.css';
import {Text} from '../core-ui/text/Text';

export default function OurServices() {
  return (
    <section className="our-services">
      <Text size="header" title="LAYANAN KAMI" className="our-services-title" />
      <div className="service-container">
        <div className="service">
          <div className="services-img">
            <img src="" alt="services" />
          </div>
          <div className="service-text">
            <Text size="normal" title="Service" />
            <Text size="small" title="Deskripsi Service 1" />
          </div>
        </div>
        <div className="service">
          <div className="services-img">
            <img src="" alt="services" />
          </div>
          <div className="service-text">
            <Text size="normal" title="Service" />
            <Text size="small" title="Deskripsi Service 2" />
          </div>
        </div>
        <div className="service">
          <div className="services-img">
            <img src="" alt="services" />
          </div>
          <div className="service-text">
            <Text size="normal" title="Service" />
            <Text size="small" title="Deskripsi Service 3" />
          </div>
        </div>
        <div className="service">
          <div className="services-img">
            <img src="" alt="services" />
          </div>
          <div className="service-text">
            <Text size="normal" title="Service" />
            <Text size="small" title="Deskripsi Service 4" />
          </div>
        </div>
      </div>
    </section>
  );
}
