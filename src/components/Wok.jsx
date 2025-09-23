import { Link } from 'react-router-dom';

const Wok = () => {
  return (
    <section className='py-24 sm:py-32'>
      <div className='mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-center'>
          <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
            <div className='absolute inset-[3px] bg-[#1A1A1F] rounded-full flex items-center justify-center gap-1'>
              What's new?
            </div>
          </div>
        </div>
        <p className='mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl rounded-full'>
          Check Our Wok Menu
        </p>
        {/* KAO PAD */}
        <div className='mt-10 grid gap-4 sm:mt-16 lg:grid-cols-4 lg:grid-rows-2'>
          <div className='lg:col-span-2 bg-[url(/wok.jpeg)] bg-center bg-cover rounded-lg flex'>
            <div className='px-8 pt-4 pb-3 sm:px-10 sm:pt-10 sm:pb-0 w-full lg:h-1/2 bg-gradient-to-t from-black/70 to-black/20'>
              <p className='text-lg font-medium text-shadow-lg/20 tracking-tight text-[#fefefc] max-lg:text-center '>
                Kao Pad
              </p>
              <p className='mt-2 max-w-lg text-sm/6 text-[#fefefc] max-lg:text-center text-shadow-lg/20 '>
                Thai tojásos sült jázmin rizs, roppanós zöldségekkel
              </p>
              <p className='text-shadow-lg/20 max-lg:text-center'>4990Ft</p>
            </div>
          </div>

          <div className='max-lg:row-start-1 bg-[url(/epic-food.jpg)] bg-center bg-cover rounded-lg'></div>

          {/* PAD THAI */}
          <div className='relative lg:row-span-2 bg-[#25252d] rounded-xl flex flex-col overflow-hidden'>
            {/* Mobile background image + gradient */}
            <div className="absolute inset-0 lg:hidden bg-[url('/wok2.jpg')] bg-cover bg-center">
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-black/20'></div>
            </div>

            {/* Text content */}
            <div className='relative z-10 px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0'>
              <p className='text-lg font-medium text-white max-lg:text-center'>Pad Thai</p>
              <p className='mt-2 text-sm text-gray-300 max-lg:text-center'>
                Rizstészta, thai szószok, koriander, mogyoró, szezám, tojás, roppanós zöldségek, csírák
              </p>
              <p className='mt-2 text-white font-semibold max-lg:text-center mb-4'>4990 Ft</p>
            </div>

            {/* Desktop image */}
            <div className="hidden lg:flex relative w-full flex-1 items-center justify-center p-4 bg-[url('/wok2.jpg')] bg-center bg-cover rounded-lg"></div>
          </div>

          <div className='max-lg:row-start-3 lg:col-start-1 lg:row-start-2 bg-[url(/fryingpan.jpg)] bg-center bg-cover rounded-lg'></div>

          {/* Tonkatsu */}
          <div className='relative lg:col-span-2 flex overflow-hidden rounded-lg'>
            {/* Mobile background image + gradient */}
            <div className="absolute inset-0 lg:hidden bg-[url('/tonkatsu.jpeg')] bg-cover bg-center">
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-black/20'></div>
            </div>

            {/* Background box (desktop shading) */}
            <div className='absolute inset-px rounded-lg bg-[#25252d] max-lg:hidden max-lg:rounded-b-4xl lg:rounded-r-4xl' />

            {/* Text content */}
            <div className='relative z-10 p-4 flex flex-col justify-center'>
              <p className='mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center'>Tonkatsu</p>
              <p className='mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center'>
                Panko morzsában rántott sertéskaraj tojásos rizzsel, tonkatsu szósszal, roppanós csírákkal és lime-mal
                tálalva.
              </p>
              <p className='mt-2 text-white font-semibold max-lg:text-center'>4990 Ft</p>
            </div>

            {/* Desktop image */}
            <div className='hidden lg:flex relative w-full items-center justify-center'>
              <img
                src='/tonkatsu.jpeg'
                alt='Tonkatsu'
                className='w-full h-auto max-h-[28rem] object-contain rounded-lg'
              />
            </div>
          </div>
        </div>
         <div className='flex justify-end items-center mt-4 gap-6'>
          <a
            href='https://rendeles.sushibarsiofok.com/rendeles'
            className='bg-[#a7a7a7] text-black py-2 px-8 rounded-full font-medium transition-colors duration-200 hover:bg-white cursor-pointer z-50'
          >
            Rendelj most <i className='bx bx-right-arrow-alt'></i>
          </a>

          <Link to='/menu' className='text-sm font-semibold text-white hover:underline'>
            Nézd meg az Étlapunkat<span aria-hidden='true'>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Wok;
