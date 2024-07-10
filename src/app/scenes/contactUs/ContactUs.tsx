import './contactUs.css';
import Button from '@/app/core-ui/button/Button';
import {Text} from '@/app/core-ui/text/Text';

export default function ContactUs() {
  return (
    <section className="contact-us" id='contact'>
      <Text size="header" title="HUBUNGI KAMI" style={{height: '4rem'}} />
      <Button
        type="primary"
        title="&#9993; gtrone@grosir.one"
        className="contact-us-button"
      />
    </section>
  );
}
