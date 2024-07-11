import './header.css';
import {Text} from '../../core-ui/text/Text';
import Button from '../../core-ui/button/Button';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-img">
          <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg" />
        </div>
        <div className="overlay">
          <Text
            size="header"
            title="Kami siap meningkatkan visibilitas Branda anda"
            style={{color: '#ffffff'}}
          />
          <Button type="primary" title="Pesan Sekarang" />
        </div>
      </div>
    </header>
  );
}
