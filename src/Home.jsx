import Hero from './components/Hero';
import Popular from './components/Popular';
import AboutUs from './components/AboutUs';
import Wok from './components/Wok';

const Home = () => {
  return (
    <div>
      <img className='absolute top-0 right-0 opacity-60 -z-10' src='/gradient.png' alt='Gradient-img' />
      <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg]'></div>
      <Hero />
      <Popular />
      <Wok />
      <AboutUs />
    </div>
  );
};

export default Home;
