const features = [
  {
    name: 'Push to deploy.',
    description:
      'Szomszédos városokban átvételi pontokat üzemeltetünk szezonálisan, vagy egész évben, emellett hoteleknek és éttermeknek is szállítjuk frissen készült sushijainkat viszont eladásra.',
  },
  {
    name: 'SSL certificates.',
    description: 'Folyamatosan bővítjük kínálatunkat, hogy mindig újdonságokkal tudjunk Nektek szolgálni!',
  },
  {
    name: 'Database backups.',
    description: 'A téli időszakban már hagyomány, hogy sushi készítő tanfolyamokat tartunk hobbi szakácsoknak.',
  },
];

const AboutUs = () => {
  return (
    <section className='relative z-10 bg-gray-300 py-24 sm:py-32 overflow-hidden'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
          {/* Text Section */}
          <div className='lg:pt-4'>
            <p className='text-4xl sm:text-5xl font-semibold tracking-tight text-[#1A1A1F]'>Rólunk</p>
            <p className='mt-6 text-base text-[#1A1A1F]'>
              A Sushi Bár egész évben várja a japán és ázsiai konyha szerelmeseit, télen-nyáron immár hetedik éve.
              Legyen szó baráti találkozóról, családi vacsoráról vagy különleges alkalomról, nálunk mindig otthonos,
              barátságos környezetben élvezhetitek a sushi és más ázsiai fogások varázsát.
            </p>

            <dl className='mt-6 space-y-4 text-base text-gray-900'>
              {features.map((feature) => (
                <div key={feature.name} className='flex items-start space-x-3'>
                  <i className='bx bx-check-double text-gray-500 text-xl flex-shrink-0'></i>
                  <dd>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className='relative flex justify-center lg:justify-start mt-10 lg:mt-0'>
            {/* Main/front image */}
            <img
              alt='Sushi Bar'
              src='/Sushi-bar_001.webp'
              className='relative z-20 w-72 sm:w-80 md:w-96 rounded-xl shadow-xl ring-1 ring-white/10'
            />
            {/* Overlay/back image */}
            <img
              src='/Sushi-bar_006.webp'
              alt='Our team'
              className='absolute top-4 right-[-20px] w-64 sm:w-72 md:w-80 rounded-xl shadow-lg z-10'
            />
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <div className='absolute bottom-0 z-[-1] h-full w-full bg-[url(/shape.png)] bg-cover bg-center bg-no-repeat'></div>
    </section>
  );
};

export default AboutUs;
