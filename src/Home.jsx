import Hero from './components/Hero';
import Popular from './components/Popular';
import AboutUs from './components/AboutUs';
import Wok from './components/Wok';
import { useState, useEffect } from 'react';
import Banner from './components/Banner';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // open on page load
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
              <div
                className='w-64 h-64 rounded-xl bg-center bg-cover bg-no-repeat'
                style={{ backgroundImage: "url('/Christmas_box.jpeg')" }}
              ></div>
              <div
                className='w-64 h-64 rounded-xl bg-center bg-cover bg-no-repeat'
                style={{ backgroundImage: "url('/Christmas_plate.jpeg')" }}
              ></div>
            </div>
            <h3 className='text-lg text-center font-semibold text-gray-900 mt-8 text-pretty sm:text-xl/8'>
              🎄 Már leadhatjátok karácsonyi előrendeléseiteket december 24-re! 🎄
            </h3>
            <div className='text-center'>
              <p className='mt-2 text-sm text-gray-500'>📍 Siófoki átvétel: 11:00–12:00</p>
              <p className='mt-2 text-sm text-gray-500'>
                🚚 Vidék kiszállítás az alábbi városokba: Balatonlelle, Keszthely, Hévíz, Zalaegerszeg, Nagykanizsa,
                Zalakaros, Kaposvár, Tamási, Dombóvár
              </p>
              <p className='mt-2 text-sm text-gray-500'>Kiszállítás időpontja: 11:00–13:00 🕘</p>
              <p className='mt-2 text-sm text-gray-500'>Rendelési határidő: december 22. 21:00</p>
              <p className='mt-2 text-sm text-gray-500'>
                📞 Rendelés leadása weboldalon vagy telefonon: 06 70 791 6990
              </p>
            </div>
            <div className='mt-4 flex justify-end gap-2'>
              <button onClick={() => setIsOpen(false)} className='px-4 py-2 bg-gray-600 rounded hover:bg-gray-300'>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Hero />
      <Banner/>
      <Popular />
      <Wok />
      <AboutUs />
    </div>
  );
};

export default Home;
