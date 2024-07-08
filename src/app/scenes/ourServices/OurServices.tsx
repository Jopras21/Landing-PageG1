import './ourServices.css';
import {Text} from '../../core-ui/text/Text';

export default function OurServices() {
  return (
    <section className="our-services" id="services">
      <Text size="header" title="LAYANAN KAMI" className="our-services-title" />
      <div className="service-container">
        <div className="service">
          <div className="services-img">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4961/4961639.png"
              alt="Instalasi & Pemasangan"
            />
          </div>
          <div className="service-text">
            <Text size="normal" title="Instalasi & Pemasangan" />
            <Text
              size="small"
              title="Kami menawarkan instalasi dan pemasangan yang mudah dan cepat."
              style={{marginTop: '.3rem'}}
            />
          </div>
        </div>
        <div className="service">
          <div className="services-img">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
              alt="Pemeliharaan & Dukungan Teknis"
            />
          </div>
          <div className="service-text">
            <Text size="normal" title="Pemeliharaan & Dukungan Teknis" />
            <Text
              size="small"
              title="Kami menyediakan pemeliharaan dan dukungan teknis agar sistem berjalan optimal"
              style={{marginTop: '.3rem'}}
            />
          </div>
        </div>
        <div className="service">
          <div className="services-img">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2936/2936704.png"
              alt="Layanan Pembuatan Iklan"
            />
          </div>
          <div className="service-text">
            <Text size="normal" title="Layanan Pembuatan Iklan" />
            <Text
              size="small"
              title="Kami membantu Anda membuat iklan yang menarik untuk mencapai target audiens."
              style={{marginTop: '.3rem'}}
            />
          </div>
        </div>
        <div className="service">
          <div className="services-img">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2867/2867142.png"
              alt="Penargetan Lokasi"
            />
          </div>
          <div className="service-text">
            <Text size="normal" title="Penargetan Lokasi" />
            <Text
              size="small"
              title="Kami menyediakan layanan penargetan lokasi untuk memastikan produk anda tersalurkan secara tepat"
              style={{marginTop: '.3rem'}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
