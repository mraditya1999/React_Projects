import featured1 from '../../assets/img/featured1.png';
import featured2 from '../../assets/img/featured2.png';
import featured3 from '../../assets/img/featured3.png';

const Featured = () => {
  return (
    <section className='featured section container' id='featured'>
      <h2 className='section__title'>Featured</h2>
      <div className='featured__container grid'>
        <FeaturedCard img={featured1} name='Jazzmaster' price={1050} />
        <FeaturedCard img={featured2} name='Ingersoll' price={250} />
        <FeaturedCard img={featured3} name='Rose gold' price={890} />
      </div>
    </section>
  );
};

const FeaturedCard = ({ img, name, price }) => {
  return (
    <article className='featured__card'>
      <span className='featured__tag'>Sale</span>
      <img src={img} alt={name} className='featured__img' />
      <div className='featured__data'>
        <h3 className='featured__title'>{name}</h3>
        <span className='featured__price'>${price}</span>
      </div>
      <button className='button featured__button'>ADD TO CART</button>
    </article>
  );
};

export default Featured;
