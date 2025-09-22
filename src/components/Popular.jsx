import { products } from './data';
import { Link } from 'react-router-dom';

const Popular = () => {
  return (
    <section className='relative bg-[#25252d] z-10 py-16 md:py-20 lg:py-28'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <p className='mt-6 text-m text-pretty sm:text-xl/8'>Népszerű Termékek</p>
        </div>
        <div className='mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8'>
          {products.map((product) => (
            <div key={product.id} className='group relative'>
              <img
                alt={product.imageAlt}
                src={product.image}
                className='aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-60'
              />
              <div className='mt-4 flex justify-between'>
                <div>
                  <h3 className='text-sm text-gray-300'>
                    <a href={product.href}>
                      <span aria-hidden='true' className='absolute inset-0' />
                      {product.name}
                    </a>
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>{product.description}</p>
                </div>
                <p className='text-sm font-medium text-gray-300'>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-end items-center mt-4 gap-6'>
          <a
            href='https://rendeles.sushibarsiofok.com/rendeles'
            className='bg-[#a7a7a7] text-black py-2 px-8 rounded-full font-medium transition-colors duration-200 hover:bg-white cursor-pointer z-50'
          >
            Rendel most <i className='bx bx-right-arrow-alt'></i>
          </a>

          <Link to='/menu' className='text-sm font-semibold text-white hover:underline'>
            Nézd meg az Étlapunkat <span aria-hidden='true'>→</span>
          </Link>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/shape.png)] bg-cover bg-center bg-no-repeat'></div>
    </section>
  );
};

export default Popular;
