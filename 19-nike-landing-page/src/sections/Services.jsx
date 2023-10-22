import { services } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <section className='max-container flex flex-col md:flex-row items-center justify-center flex-wrap gap-9'>
      {services.map((service) => {
        return <ServiceCard key={service.label} {...service} />;
      })}
    </section>
  );
};
export default Services;
