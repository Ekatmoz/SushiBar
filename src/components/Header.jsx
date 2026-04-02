import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const toggleMobileMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className='relative z-50 flex justify-between items-center py-4 px-4 lg:px-20'>
      <div className='flex items-center'>
      <h1 className='text-1xl md:text-2xl lg:text-3xl font-light m-0 ml-20'>SUSHI & WOK BAR</h1>
      <img src='/logo_vector.webp' alt='Logo' loading='eager' decoding='async' className='h-auto w-20 absolute' />
      </div>
      <nav className='hidden md:flex lg:flex items-center gap-12'>
        <Link className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' to='/'>
          {t('nav.home')}
        </Link>
        <Link className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' to='/about'>
          {t('nav.about')}
        </Link>
        <Link className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' to='/menu'>
          {t('nav.menu')}
        </Link>
        <a
          className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
          href='https://asianmarket.hu/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('nav.webShop')}
        </a>
        <div className='flex items-center gap-2'>
          <button
            type='button'
            onClick={() => setLang('en')}
            className={`text-xs px-2 py-1 rounded ${lang === 'en' ? 'bg-white text-black' : 'bg-[#2a2a2a]'}`}
          >
            EN
          </button>
          <button
            type='button'
            onClick={() => setLang('hu')}
            className={`text-xs px-2 py-1 rounded ${lang === 'hu' ? 'bg-white text-black' : 'bg-[#2a2a2a]'}`}
          >
            HU
          </button>
        </div>
      </nav>
      <a
        className='hidden md:block text-base tracking-wider transition-colors hover:text-gray-300 z-50'
        href='tel:+36707916990'
      >
        +3670 791 6990
      </a>
      {/* <a
        href='https://rendeles.sushibarsiofok.com/rendeles'
        className='hidden md:block bg-[#a7a7a7] text-black py-2 px-8 rounded-full border-none font-medium transition-all dura hover:bg-white cursor-pointer z-50'
      >
        Rendelj most <i class='bx bx-right-arrow-alt'></i>
      </a> */}
      {/* Mobile Menu Toggle Button */}
      <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50' aria-label='Toggle mobile menu'>
        <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
      </button>
      {/* Mobile Menu - Hidden by default */}
      {menuOpen && (
        <div className='fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md'>
          <nav className='flex flex-col gap-6 items-center'>
            <Link
              to='/'
              onClick={closeMenu}
              className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
            >
              {t('nav.home')}
            </Link>
            <Link
              to='/about'
              onClick={closeMenu}
              className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
            >
              {t('nav.about')}
            </Link>
            <Link
              to='/menu'
              onClick={closeMenu}
              className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
            >
              {t('nav.menu')}
            </Link>
            <a
              href='https://asianmarket.hu/'
              target='_blank'
              onClick={closeMenu}
              className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
            >
              {t('nav.webShop')}
            </a>
            <div className='flex items-center gap-2'>
              <button
                type='button'
                onClick={() => setLang('en')}
                className={`text-xs px-2 py-1 rounded ${lang === 'en' ? 'bg-white text-black' : 'bg-[#2a2a2a]'}`}
              >
                EN
              </button>
              <button
                type='button'
                onClick={() => setLang('hu')}
                className={`text-xs px-2 py-1 rounded ${lang === 'hu' ? 'bg-white text-black' : 'bg-[#2a2a2a]'}`}
              >
                HU
              </button>
            </div>
            <a
              href='tel:+36707916990'
              onClick={closeMenu}
              target='_self'
              rel='noopener noreferrer'
              className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
            >
              +3670 791 6990
            </a>
            <a
              href='https://rendeles.sushibarsiofok.com/rendeles'
              onClick={closeMenu}
              className='md:block bg-[#a7a7a7] text-black py-2 px-8 rounded-full border-none font-medium transition-all dura hover:bg-white cursor-pointer z-50'
            >
              {t('nav.orderNow')} <i className='bx bx-right-arrow-alt' aria-hidden />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
