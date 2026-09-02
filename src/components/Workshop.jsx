import { useLanguage } from '../i18n/useLanguage';
import { Link } from 'react-router-dom';

const Workshop = () => {
  const { t } = useLanguage();
  const features = t('workshopPage.features');

  return (
    <section>
      <img className='absolute top-0 right-0 opacity-60 -z-10' src='/gradient.png' alt='light' />
      <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg]'></div>

      <div className='mx-auto mb-10 max-w-7xl px-6 lg:px-8 lg:mt-20 flex justify-center'>
        <div className='mx-auto max-w-4xl lg:mx-0 text-center'>
          <h1 className='text-5xl font-semibold text-white sm:text-7xl'>{t('workshopPage.title')}</h1>
          <div className='flex justify-center mt-4'>
            <div className='relative w-[95%] sm:w-72 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
              <div className='absolute inset-[3px] bg-[#1A1A1F] rounded-full flex items-center justify-center gap-1'>
                <i className='bx bx-sushi' aria-hidden />
                {t('workshopPage.badge')}
              </div>
            </div>
          </div>
          <div className='mt-6'>
            <p className='mt-6 text-2xl'>{t('workshopPage.description')}</p>
            <button
              type='button'
              name='festin-button'
              data-festin-role="opener"
              className='mt-5 border border-[#a7a7a7] max-w-lg py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-medium tracking-wider transition-all duration-300 hover:bg-[#a7a7a7] text-transform: uppercase'
              onClick={() => openFestin('6a95409dc3f12645027773d7')}
            >
              {t('workshopPage.button')}
            </button>
          </div>
        </div>
      </div>
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
          <p className='text-base'>{t('workshopPage.paragraph1')}</p>
          <h3 className='mt-6 text-3xl font-semibold text-white sm:text-4xl'>{t('workshopPage.subtitle1')}</h3>
          <dl className='mt-5 space-y-2 text-base text-white'>
            {features.map((feature) => (
              <div key={feature} className='flex items-start space-x-3'>
                <i className='bx bx-check-double text-gray-500 text-xl flex-shrink-0'></i>
                <dd>{feature}</dd>
              </div>
            ))}
          </dl>
          <p className='text-base mt-3'>{t('workshopPage.paragraph2')}</p>
          <p className='text-base mt-3'>{t('workshopPage.paragraph3')}</p>
        </div>
      </div>

      <img className='absolute top-0 right-0 opacity-60 -z-10' src='/gradient.png' alt='Gradient-img' />
    </section>
  );
};

export default Workshop;
