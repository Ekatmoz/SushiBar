import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className='relative flex justify-between item-center py-4 px-4 lg:px-20'>
      <h1 className='text-1xl md:text-2xl lg:text-3xl font-light m-0 ml-16'>SUSHI & WOK BAR</h1>
      <img src='/Logo.png' alt='Logo' className='h-auto w-20 absolute' />
      <nav className='hidden md:flex items-center gap-12'>
        <Link className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' to='/'>
          Home
        </Link>
        <Link className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' to='/about'>
          Rólunk
        </Link>
        <Link className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' to='/menu'>
          Étlap
        </Link>
        <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='#'>
          Kapcsolat
        </a>
        <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='tel:+36707916990'>
          +3670 791 6990
        </a>
        {/* <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='#'>
          en
        </a> */}
      </nav>
      <a
        href='https://rendeles.sushibarsiofok.com/rendeles'
        className='hidden md:block bg-[#a7a7a7] text-black py-2 px-8 rounded-full border-none font-medium transition-all dura hover:bg-white cursor-pointer z-50'
      >
        Rendelj most <i class='bx bx-right-arrow-alt'></i>
      </a>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50"
        aria-label="Toggle mobile menu"
      >
        <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
      </button>
      {/* Mobile Menu - Hidden by default */}
        {menuOpen && (
      <div
        className='fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md'
      >
        <nav className='flex flex-col gap-6 items-center'>
          <Link to='/' onClick={closeMenu} className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' >
            Home
          </Link>
          <Link to='/about' onClick={closeMenu} className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'>
            Rólunk
          </Link>
          <Link to='/menu' onClick={closeMenu} className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'>
            Étlap
          </Link>
          <a href="#" onClick={closeMenu} className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'>
            Kapcsolat
          </a>
          <a
            href='tel:+36707916990'
            onClick={closeMenu}
            target='_self'
            rel='noopener noreferrer'
            className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
          >
            +3670 791 6990
          </a>
          {/* <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='#'>
            en
          </a> */}
          <a
            href='https://rendeles.sushibarsiofok.com/rendeles'
            onClick={closeMenu}
            className='md:block bg-[#a7a7a7] text-black py-2 px-8 rounded-full border-none font-medium transition-all dura hover:bg-white cursor-pointer z-50'
          >
            Rendelj most <i class='bx bx-right-arrow-alt'></i>
          </a>
        </nav>
      </div>
        )}
    </header>
  );
};

export default Header;
