import {
  Hero,
  Header,
  Companies,
  Residencies,
  Value,
  Contact,
  GetStarted,
  Footer,
} from './components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div>
        <div className='white-gradient' />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
