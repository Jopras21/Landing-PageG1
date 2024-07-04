import './footer.css';
import {Text} from '../text/Text';

export default function Footer() {
  return (
    <footer>
      <div className="lower-footer">
        <div className="lower-footer-copy">
          <span className="copyright-symbol">&#169;</span>
          <Text
            size="normal"
            title="2024, G1 Brand Advertising."
            style={{marginLeft: '.2rem'}}
          />
        </div>
      </div>
    </footer>
  );
}
