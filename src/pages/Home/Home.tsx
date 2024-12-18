import { Banners, Labels, MobileAppBanner } from '../../components';
import Categories from './Categories';
import Hero from './Hero';

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Banners />
      <MobileAppBanner />
      <Labels />
    </>
  );
}

export default Home;
