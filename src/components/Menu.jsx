import allergen from '../assets/Allergens.pdf';

const CLOUDINARY = 'https://res.cloudinary.com/dtj7rhgwl/image/upload';

/** Optimized delivery: format/quality auto, capped width for viewport. */
function menuImageUrl(publicIdWithVersion) {
  return `${CLOUDINARY}/f_auto,q_auto,w_1400/${publicIdWithVersion}`;
}

const MENU_IMAGES = [
  'v1754744185/menu_1_copy_rfbxp4.jpg',
  'v1754746540/menu_2_copy_xt2oai.jpg',
  'v1754749645/menu_3_copy_ns7dsn.jpg',
  'v1754755306/menu_4_copy_vrycuh.jpg',
  'v1754758225/menu_5_1_copy_xpzkcr.jpg',
  'v1754834546/menu_6_copy_ttobt1.jpg',
  'v1754835076/menu_7_copy_fcqhls.jpg',
];

const Menu = () => {
  return (
    <section>
      <img className='absolute top-0 right-0 opacity-60 -z-10' src='/gradient.png' alt='' />
      <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg]'></div>

      <div className='mx-auto max-w-7xl px-6 lg:px-8 lg:mt-20 flex justify-center'>
        <div className='mx-auto max-w-2xl lg:mx-0 text-center'>
          <h1 className='text-5xl font-semibold text-white sm:text-7xl'>Étlap</h1>
          <p className='mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8'>
            Széles választékkal, amiben mindenki megtalálja a saját ízlésének megfelelőt.
          </p>

          <div className='flex justify-center items-center m-6 gap-6'>
            <a
              href='https://rendeles.sushibarsiofok.com/rendeles'
              className='bg-[#a7a7a7] text-black py-2 px-8 rounded-full font-medium transition-colors duration-200 hover:bg-white cursor-pointer z-50'
            >
              Rendelj most <i className='bx bx-right-arrow-alt' aria-hidden />
            </a>

            <button
              type='button'
              onClick={() => window.open(allergen, '_blank')}
              className='text-sm font-semibold text-white hover:underline'
            >
              Allergén <span aria-hidden='true'>→</span>
            </button>
          </div>
        </div>
      </div>
      {MENU_IMAGES.map((id, index) => (
        <img
          key={id}
          src={menuImageUrl(id)}
          alt={`Étlap oldal ${index + 1}.`}
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
