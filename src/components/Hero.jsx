import 'boxicons/css/boxicons.min.css';

const Hero = () => {
  return (
    <main className='flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]'>
      <div className='max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'>
        {/* Tag box-with gradient border */}
        <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
          <div className='absolute inset-[3px] bg-[#1A1A1F] rounded-full flex items-center justify-center gap-1'>
            <i class='bx bx-diamond'></i>
            Mindig Friss.
          </div>
        </div>

        {/* Main Heading */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#fefefc] font-semibold tracking-wider my-8'>
          If You Love Sushi Then
          <br />
          You’ll Love Us.
        </h1>
        {/* Description
        <p className='text-lg sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>Mindig Friss.</p> */}
        {/* Buttons */}
        <div className='flex gap-4 mt-8 mb-10'>
          <a
            className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]'
            href='https://reservours.com/sushibarsiofok/tablereservation?s=website'
            target='_blank'
          >
            <i class='bx bx-calendar-star'></i>
            Book a table
          </a>
          <a
            className='border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white'
            href='#'
          >
            <i class='bx bxs-food-menu'></i>
            Check the menu
          </a>
        </div>
      </div>

      {/* Image */}
      <div className='absolute w-full lg:top-0 lg:left-[50%]'>
        <img src='/sushi.png' alt='Sushi image' className='w-full max-w-[650px] h-auto object-contain' />
      </div>
    </main>
  );
};

export default Hero;
