import { lazy, Suspense, useEffect, useState } from 'react';
import Hero from './components/Hero';
import Popular from './components/Popular';
import Wok from './components/Wok';
import Banner from './components/Banner';
import Catering from './components/Catering';

const AboutUs = lazy(() => import('./components/AboutUs'));

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div>
      <img className='absolute top-0 right-0 opacity-60 -z-10' src='/gradient.png' alt='Gradient-img' />
      <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg]'></div>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='fixed inset-0 bg-gray-500/75' onClick={() => setIsOpen(false)}></div>

          <div className='relative bg-opacity-60 bg-white border border-gray-200 rounded-lg shadow-xl max-w-lg w-full p-6 z-10'>
            <div className='flex justify-around gap-6'>
              {/* <div
                className='w-64 h-64 rounded-xl bg-center bg-cover bg-no-repeat'
                style={{ backgroundImage: "url('/Christmas_box.webp')" }}
              ></div> */}
              <div
                className='w-64 h-64 rounded-xl bg-center bg-cover bg-no-repeat'
                style={{ backgroundImage: "url('/webshop.png')" }}
              ></div>
            </div>
            <h3 className='text-lg text-center text-gray-900 mt-8 text-pretty sm:text-xl/8'>
              🍜 Szereted az ázsiai konyhát? 🥢
            </h3>
            <h5 className='text-lg text-center text-gray-900 mt-8 text-pretty sm:text-xl/8'>
              👩‍🍳 Szívesen kísérleteznél otthon, és kipróbálnál valami újat? 🌶️
            </h5>
            <div className='text-center'>
              <h3 className='text-lg text-center text-gray-900 mt-8 text-pretty sm:text-xl/8'>
                ✨ Fedezd fel az autentikus ízeket és izgalmas alapanyagokat webshopunkban! 🛒
              </h3>
            </div>
            
          
            <div className='mt-4 flex justify-end gap-2'>
              <a
              className='px-4 py-2 bg-gray-600 rounded hover:bg-gray-300'
              href='https://asianmarket.hu/'
              target='_blank'
              rel='noopener noreferrer'
            >
              WebShop
            </a>
              <button onClick={() => setIsOpen(false)} className='px-4 py-2 bg-gray-600 rounded hover:bg-gray-300'>
                Mégse
              </button>
            </div>
          </div>
        </div>
      )}
      <Hero />
      <Banner />
      <Popular />
      <Wok />
      <Catering />
      <Suspense fallback={null}>
        <AboutUs />
      </Suspense>
    </div>
  );
};

export default Home;
