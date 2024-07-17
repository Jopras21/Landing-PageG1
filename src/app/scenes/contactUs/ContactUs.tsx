import './contactUs.css';
import Button from '@/app/core-ui/button/Button';
import {Text} from '@/app/core-ui/text/Text';

export default function ContactUs() {
  return (
    <section className="contact-us" id="contact">
      <div className="cantact-us-content">
        <Text size="header" title="HUBUNGI KAMI" />
        <Button
          type="primary"
          title="&#9993; gtrone@grosir.one"
          className="contact-us-button"
        />
      </div>
    </section>
  );
}
