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
]

const AboutUs = () => {
  return (
    <section className='relative z-10 first-letter:overflow-hidden bg-gray-300 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pt-4 lg:pr-8'>
            <div className='lg:max-w-lg'>
              {/* <h2 className="text-base/7 font-semibold text-indigo-400">Deploy faster</h2> */}
              <p className='mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#1A1A1F] sm:text-5xl'>
                Rólunk
              </p>
              <p className='mt-6 text-base/8 text-[#1A1A1F]'>
                A Sushi Bár egész évben várja a japán és ázsiai konyha szerelmeseit, télen-nyáron immár hetedik éve. Legyen szó baráti találkozóról, családi vacsoráról vagy különleges alkalomról, nálunk mindig otthonos, barátságos környezetben élvezhetitek a sushi és más ázsiai fogások varázsát.
              </p>
               <dl className="mt-6 max-w-xl space-y-6 text-base/7 text-gray-900 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <i className='bx bx-check-double text-gray-500'></i>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        <div className="relative">
  <img
    alt="Sushi Bar"
    src="/Sushi-bar_001.jpg"
    className="relative z-20 max-w-96 rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
  />
  <img
    src="/Sushi-bar_006.jpg"
    alt="Our team"
    className="absolute top-8 right-[-40px] w-80 rounded-xl shadow-lg z-10"
  />
</div>
        </div>
      </div>
      <div className='absolute bottom-0 z-[-1] h-full w-full bg-[url(/shape.png)] bg-cover bg-center bg-no-repeat'></div>
    </section>
  );
};

export default AboutUs;
