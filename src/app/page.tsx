import Navbar from './core-ui/navbar/Navbar';
import Footer from './core-ui/footer/Footer';
import Header from './component/header/Header';
import OurServices from './scenes/ourServices/OurServices';
import Pricing from './scenes/plan&Pricing/Plan&Pricing';
import VisibilityProduct from './scenes/visibilityProduct/VisibilityProduct';
import OurTechnology from './scenes/ourTechnology/OurTechnology';
import ContactUs from './scenes/contactUs/ContactUs';
export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <OurServices />
      <Pricing />
      <VisibilityProduct />
      <OurTechnology />
      <ContactUs />
      <Footer />
    </main>
  );
}
