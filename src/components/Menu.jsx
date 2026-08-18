import allergen from '../assets/Allergens.pdf';
import { useLanguage } from '../i18n/useLanguage';

const MENU_IMAGES = [
  '/page1.webp',
  '/page2.webp',
  '/page3.webp',
  '/page4.webp',
  '/page5.webp',
  '/page6.webp',
  '/page7.webp',
  '/page8.webp',
  '/page9.webp',
  '/page10.webp',
  '/page11.webp',
];

const Menu = () => {
  const { t } = useLanguage();

  return (
    <section>
      <img className='absolute top-0 right-0 opacity-60 -z-10' src='/gradient.png' alt='' />
      <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg]'></div>

      <div className='mx-auto max-w-7xl px-6 lg:px-8 lg:mt-20 flex justify-center'>
        <div className='mx-auto max-w-2xl lg:mx-0 text-center'>
          <h1 className='text-5xl font-semibold text-white sm:text-7xl'>{t('menuPage.title')}</h1>
          <p className='mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8'>
            {t('menuPage.description')}
          </p>

          <div className='flex justify-center items-center m-6 gap-6'>
            <a
              href='https://rendeles.sushibarsiofok.com/rendeles'
              className='bg-[#a7a7a7] text-black py-2 px-8 rounded-full font-medium transition-colors duration-200 hover:bg-white cursor-pointer z-50'
            >
              {t('menuPage.orderNow')} <i className='bx bx-right-arrow-alt' aria-hidden />
            </a>

            <button
              type='button'
              onClick={() => window.open(allergen, '_blank')}
              className='text-sm font-semibold text-white hover:underline'
            >
              {t('menuPage.allergens')} <span aria-hidden='true'>→</span>
            </button>
          </div>
        </div>
      </div>
      {MENU_IMAGES.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`${t('menuPage.pageAlt')} ${index + 1}.`}
          width={1400}
          sizes='(max-width: 768px) 100vw, min(1400px, 100vw)'
          loading={index === 0 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'low'}
          decoding='async'
          className='w-full h-auto'
        />
      ))}
    </section>
  );
};

export default Menu;
