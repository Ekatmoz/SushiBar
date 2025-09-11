const Footer = () => {
  return (
    <footer className='relative bg-[#25252d] z-10 pt-16 md:pt-20 lg:pt-24 '>
      <div>
        <div className='flex'>
          {/* Logo + Socials */}
          <div className='flex flex-col m-2 mr-10'>
            <a href='/' className='inline-block'>
              <img src='/Logo.png' alt='logo' className='w-20 sm:w-28 md:w-36 lg:w-40 h-auto' />
            </a>

            <div className='flex justify-center space-x-4'>
              <a
                href='https://www.facebook.com/sushibarsiofok/?locale=hu_HU'
                target='_blank'
                aria-label='social-link'
                className='flex items-center justify-center w-10 h-10 rounded-full border border-white  text-gray-300 hover:bg-white hover:text-[#25252d] transition'
              >
                <i className='bx bxl-facebook-circle text-xl'></i>
              </a>
              <a
                href='https://www.instagram.com/explore/locations/427188761394431/sushi-bar-siofok/'
                target='_blank'
                aria-label='social-link'
                className='flex items-center justify-center w-10 h-10 rounded-full border border-white  text-gray-300 hover:bg-white hover:text-[#25252d] transition'
              >
                <i class='bx bxl-instagram-alt text-xl'></i>
              </a>
            </div>
          </div>
          <div className='flex flex-col md:flex-row flex-2 grow items-start md:items-center justify-start md:justify-evenly gap-6 md:gap-12'>
            {/* Reservation */}
            <div className='flex items-start space-x-3 text-sm sm:text-base md:text-lg'>
              <i className='bx bxs-phone-call text-xl md:text-2xl'></i>
              <div>
                <h4 className='font-semibold'>Asztalfoglalás</h4>
                <p>
                  <strong>Telefon:</strong> +36 70 791 6990
                  <br />
                  <strong>Email:</strong> info@sushibarhungary.hu
                  <br />
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className='flex items-start space-x-3 text-sm sm:text-base md:text-lg'>
              <i className='bx bx-time-five text-xl md:text-2xl'></i>
              <div>
                <h4 className='font-semibold'>Nyitvatartás</h4>
                <p>
                  <strong>Hétfő-Vasárnap:</strong> 11:00 - 21:00
                  <br />
                </p>
              </div>
            </div>

            {/* Address */}
            <div className='flex items-start space-x-3 text-sm sm:text-base md:text-lg'>
              <i className='bx bx-map text-xl md:text-2xl'></i>
              <div>
                <h4 className='font-semibold'>Cím</h4>
                <p>Siófok, Vitorlás u. 1.-3, 8600</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]'></div>
        {/* Bottom Text */}
        <div className='py-8'>
          <p className='text-center text-base text-body-color dark:text-white'>
            © Copyright Sushi Bar Hungary. All Rights Reserved
          </p>
          <p className='text-center text-base text-body-color dark:text-white'>
            Designed by{' '}
            <a href='https://siocreativeit.hu/' rel='nofollow noopener'>
              Sio Creative IT 2025.
            </a>
          </p>
        </div>
      </div>
      {/* Decorative SVG */}
      <div className='absolute right-0 top-14 z-[-1]'>
        <svg width='55' height='99' viewBox='0 0 55 99' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle opacity='0.8' cx='49.5' cy='49.5' r='49.5' fill='#959CB1' />
          <mask
            id='mask0_94:899'
            style={{ maskType: 'alpha' }}
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='99'
            height='99'
          >
            <circle opacity='0.8' cx='49.5' cy='49.5' r='49.5' fill='#4A6CF7' />
          </mask>
          <g mask='url(#mask0_94:899)'>
            <circle opacity='0.8' cx='49.5' cy='49.5' r='49.5' fill='url(#paint0_radial_94:899)' />
            <g opacity='0.8' filter='url(#filter0_f_94:899)'>
              <circle cx='53.8676' cy='26.2061' r='20.3824' fill='white' />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_f_94:899'
              x='12.4852'
              y='-15.1763'
              width='82.7646'
              height='82.7646'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='10.5' result='effect1_foregroundBlur_94:899' />
            </filter>
            <radialGradient
              id='paint0_radial_94:899'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(49.5 49.5) rotate(90) scale(53.1397)'
            >
              <stop stopOpacity='0.47' />
              <stop offset='1' stopOpacity='0' />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
