import './header.css';
import {Text} from '../../core-ui/text/Text';
import Button from '../../core-ui/button/Button';

export default function Header() {
  return (
    <header>
      <div className="container">
        <img src="https://asset.gecdesigns.com/img/wallpapers/aesthetic-landscape-reflection-background-hd-wallpaper-sr10012410-1706502139247-cover.webp" />
        <div className="overlay">
          <Text
            size="header"
            title="Kami siap meningkatkan visibilitas Branda anda"
            style={{color: '#2a2a2a'}}
          />
          <Button type="primary" title="Pesan Sekarang" />
        </div>
      </div>
    </header>
  );
}
