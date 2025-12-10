const Banner = () => {
  return (
    <div
      className='flex items-center justify-center h-80 bg-fixed bg-cover'
      style={{ backgroundImage: "url('/Christmas_banner.webp')" }}
    >
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-700 font-semibold tracking-wider my-8 shadow-sm bg-white p-5 border border-gray-200  bg-opacity-70 rounded-xl'>
        Boldog Karácsonyt!
      </h1>
    </div>
  );
};

export default Banner;
