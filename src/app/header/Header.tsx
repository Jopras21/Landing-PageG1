import './header.css';
import {Text} from '../core-ui/text/Text';
import Button from '../core-ui/button/Button';

export default function Header() {
  return (
    <header>
      <div className="container">
        <img src="https://asset.gecdesigns.com/img/wallpapers/aesthetic-landscape-reflection-background-hd-wallpaper-sr10012410-1706502139247-cover.webp" />
        <div className="overlay">
          <Text
            size="normal"
            title="Kami siap meningkatkan visibilitas Branda anda"
            style={{color: '#2a2a2a'}}
          />
          <Button type="primary" title="Pesan Sekarang" />
        </div>
      </div>
      <img src="https://images.pexels.com/photos/1046606/pexels-photo-1046606.jpeg?cs=srgb&dl=pexels-jc-estrada-341132-1046606.jpg&fm=jpg" />
    </header>
  );
}
