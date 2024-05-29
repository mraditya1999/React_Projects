import {
  Hero,
  PopularProducts,
  CustomerReviews,
  SuperQuality,
  SpecialOffer,
  Services,
  Subscribe,
  Footer,
} from './sections';
import { Navbar } from './components';

const App = () => {
  return (
    <main className='relative'>
      <Navbar />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='padding-x padding-t pb-8 bg-black '>
        <Footer />
      </section>
    </main>
  );
};
export default App;
