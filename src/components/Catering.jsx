const Catering = () => {
  return (
    <section className='relative bg-[#25252d] z-10 py-16 md:py-20'>
      <div className='mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-center'>
          <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
            <div className='absolute inset-[3px] bg-[#1A1A1F] rounded-full flex items-center justify-center gap-1'>
             
            </div>
          </div>
        </div>
        </div>
         <div className='flex justify-end items-center mt-4 gap-6'>
         Rendezvények
          <a
            href='https://rendeles.sushibarsiofok.com/rendeles'
            className='bg-[#a7a7a7] text-black py-2 px-8 rounded-full font-medium transition-colors duration-200 hover:bg-white cursor-pointer z-50'
          >
           <i className='bx bx-right-arrow-alt' aria-hidden />
          </a>

        
        </div>
        <div className='absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/shape.webp)] bg-cover bg-center bg-no-repeat'></div>
    </section>
  )
}

export default Catering;