import prologis from '../../assets/prologis.png';
import tower from '../../assets/tower.png';
import equinix from '../../assets/equinix.png';
import realty from '../../assets/realty.png';

import './Companies.css';

const Companies = () => {
  return (
    <section className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'>
        <img src={prologis} alt='prologis' />
        <img src={tower} alt='tower' />
        <img src={equinix} alt='equinix' />
        <img src={realty} alt='realty' />
      </div>
    </section>
  );
};

export default Companies;
