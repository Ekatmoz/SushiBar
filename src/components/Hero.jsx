import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/useLanguage';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <main className='relative flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] overflow-hidden'>
      <div className='max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'>
        {/* Tag box-with gradient border */}
        <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
          <div className='absolute inset-[3px] bg-[#1A1A1F] rounded-full flex items-center justify-center gap-1'>
          <i className="bx bx-basket" aria-hidden />
          <a
        href='https://rendeles.sushibarsiofok.com/rendeles'
      >
        {t('hero.orderNow')}
      </a>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#fefefc] font-semibold tracking-wider my-8'>
          {t('hero.title1')}
          <br />
          {t('hero.title2')}
        </h1>
        {/* Description

        {/* Buttons */}
        <div className='flex gap-4 mt-8 mb-10'>
          <a
            className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#a7a7a7]'
            href='https://reservours.com/sushibarsiofok/tablereservation?s=website'
            target='_blank'
          >
            <i className='bx bx-calendar-star' aria-hidden />
              {t('hero.reserveTable')}
          </a>
          <Link
            className='border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white'
            to='/menu'
          >
            <i className='bx bxs-food-menu' aria-hidden />
              {t('hero.menu')}
          </Link>
        </div>
      </div>
      {/* Image */}
      <div className='absolute inset-x-0 top-0 w-full lg:left-[50%] pointer-events-none z-0'>
        <img
          src='/sushi.webp'
          alt='Sushi image'
          width={650}
          height={650}
          fetchPriority='high'
          decoding='async'
          className='w-full max-w-[650px] h-auto object-contain'
        />
      </div>
    </main>
  );
};

export default Hero;
