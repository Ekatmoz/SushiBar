import 'boxicons/css/boxicons.min.css';

const Header = () => {
  //Simple function to toggle the mobile menu
  const toggleMobileMenu = () => {
    //Get the Mobile Menu Element
    const mobileMenu = document.getElementById('mobileMenu');
    // If it has the 'hidden' class, remove it otherwise, add it
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  };

  return (
    <header className='relative flex justify-between item-center py-4 px-4 lg:px-20'>
      <h1 className='text-1xl md:text-2xl lg:text-3xl font-light m-0 ml-16'>SUSHI & WOK BAR</h1>
      <img src='/Logo.png' alt='Logo' className='h-auto w-20 absolute' />
      <nav className='hidden md:flex items-center gap-12'>
        <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='#'>
          Home
        </a>
        <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='#'>
          Rólunk
        </a>
        <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='#'>
          Étlap
        </a>
        <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='#'>
          Kapcsolat
        </a>
        <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='#'>
          +3670 791 6990
        </a>
        <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='#'>
          en
        </a>
      </nav>
      <a
        href='https://rendeles.sushibarsiofok.com/rendeles'
        className='hidden md:block bg-[#a7a7a7] text-black py-2 px-8 rounded-full border-none font-medium transition-all dura hover:bg-white cursor-pointer z-50'
      >
        Rendel most <i class='bx bx-right-arrow-alt'></i>
      </a>

      {/* Mobile Menu Button - Visible only on Mobile */}
      <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
        <i className='bx bx-menu'></i>
      </button>

      {/* Mobile Menu - Hidden by default */}
      <div
        id='mobileMenu'
        className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md'
      >
        <nav className='flex flex-col gap-6 items-center'>
          <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='#'>
            Home
          </a>
          <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='#'>
            Rólunk
          </a>
          <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='#'>
            Étlap
          </a>
          <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='#'>
            Gallery
          </a>
          <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='#'>
            Kapcsolat
          </a>
          <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='#'>
            en
          </a>
           <a
        href='https://rendeles.sushibarsiofok.com/rendeles'
        className='md:block bg-[#a7a7a7] text-black py-2 px-8 rounded-full border-none font-medium transition-all dura hover:bg-white cursor-pointer z-50'
      >
        Rendel most <i class='bx bx-right-arrow-alt'></i>
      </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
