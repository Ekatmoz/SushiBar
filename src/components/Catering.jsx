import { useLanguage } from '../i18n/useLanguage';
import { Link } from 'react-router-dom';

const Catering = () => {
  const { t } = useLanguage();
  const features = t('about.features');

  return (
    <section className='relative bg-[#25252d] z-10 py-16 md:py-20 overflow-hidden'>
      <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-8 mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-center relative max-w-[650px] h-auto object-contain'>
          <div className='absolute inset-0 z-[-1] bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full blur-2xl opacity-50'></div>
          <img
            className='w-full max-h-[560px] rounded-[40px] max-md:px-3 md:mr-10 max-w-xs sm:max-w-sm lg:max-w-md transition-all duration-300'
            src='/Live_sushi.png'
            alt='Sushi Live'
          />
        </div>

        <div className='col-span-2 mx-auto max-w-2xl px-6 lg:max-w-7xl'>
          <div className='flex justify-center'>
            <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
              <div className='absolute inset-[3px] bg-[#1A1A1F] rounded-full flex items-center justify-center gap-1'>
              <i className="bx bx-diamond" aria-hidden />
                {t('catering.badge')}
              </div>
            </div>
          </div>
          <p className='mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl rounded-full'>
            {t('catering.title')}
          </p>

          <p className='mt-6 text-base'>{t('catering.description')}</p>
          <p className='mt-6 text-base'>{t('catering.paragraph')}</p>
          <div className='flex flex-col justify-center text-center mt-4 gap-6'>
          <Link
            to='/catering'
            className='bg-[#a7a7a7] max-w-56 text-black py-2 px-8 rounded-full font-medium transition-colors duration-200 hover:bg-white cursor-pointer z-50 text-transform: uppercase'
          >
            {t('catering.request')} 
          </Link>

          <Link to='/menu' className='border border-[#a7a7a7] max-w-lg py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-medium tracking-wider transition-all duration-300 hover:bg-[#a7a7a7] text-transform: uppercase'>
            {t('catering.download')}
          </Link>
        </div>
        </div>
      </div>

      <img className='absolute top-0 right-0 opacity-60 -z-10' src='/gradient.png' alt='Gradient-img' />
    </section>
  );
};

export default Catering;
