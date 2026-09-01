const productTranslations = {
  en: [
    {
      id: 1,
      name: 'Sushi Box',
      description: '2 pcs sake maki, 2 pcs vegan maki, 2 pcs Arizona maki, 2 pcs California maki, 1 pc ebi nigiri, 1 pc chuka nigiri.',
      price: '3990 Ft',
      image: '/sushibox_10.webp',
      imageAlt: 'Sushi Box',
    },
    {
      id: 2,
      name: 'Sushi Box Plus',
      description: '4 pcs sake maki, 4 pcs vegan maki, 2 pcs Arizona maki, 2 pcs California maki, 1 pc ebi nigiri, 1 pc chuka nigiri.',
      price: '4990 Ft',
      image: '/boxplus.webp',
      imageAlt: 'Sushi Box Plus',
    },
    {
      id: 3,
      name: 'Sushi Boat',
      description: '8 pcs sake maki, 8 pcs cucumber maki, 4 pcs Arizona maki, 4 pcs California maki, 2 pcs ebi nigiri, 2 pcs chuka nigiri, blanched edamame.',
      price: '9990 Ft',
      image: '/ship.webp',
      imageAlt: 'Sushi Boat',
    },
    {
      id: 4,
      name: 'Family Platter',
      description: '16 pcs sake maki, 16 pcs cucumber maki, 8 pcs Arizona maki, 8 pcs California maki, 4 pcs ebi nigiri, 4 pcs chuka nigiri, blanched edamame.',
      price: '17990 Ft',
      image: '/familybox.webp',
      imageAlt: 'Family Platter',
    },
    {
      id: 5,
      name: 'Premium Sushi Boat',
      description:
        '8 pcs sake maki, 4 pcs California maki, 8 pcs futomaki, 8 pcs Philadelphia maki, 1 pc chuka nigiri, 1 pc tobiko gunkan nigiri, 1 pc ikura gunkan nigiri, 2 pcs unagi nigiri, 1 pc sake sashimi, blanched edamame.',
      price: '21990 Ft',
      image: '/premium.webp',
      imageAlt: 'Premium Sushi Boat',
    },
    {
      id: 6,
      name: 'Bento Box 3',
      description:
        'Tempura shrimp with sweet chili, 8 pcs sushi (sake maki, kappa maki, Arizona maki, California maki), 2 pcs nigiri (chuka, ebi), and Japanese mochi with seasonal fruits.',
      price: '5990 Ft',
      image: '/Bento.jpeg',
      imageAlt: 'Bento Box',
    },
  ],
  hu: [
    {
      id: 1,
      name: 'Sushi Box',
      description: '2 db sake maki, 2 db vegán maki, 2 db Arizona maki, 2 db California maki, 1 db ebi nigiri, 1 db chuka nigiri.',
      price: '3990 Ft',
      image: '/box.webp',
      imageAlt: 'Sushi Box',
    },
    {
      id: 2,
      name: 'Sushi Box Plus',
      description: '4 db sake maki, 4 db vegán maki, 2 db Arizona maki, 2 db California maki, 1 db ebi nigiri, 1 db chuka nigiri.',
      price: '4990 Ft',
      image: '/boxplus.webp',
      imageAlt: 'Sushi Box Plus',
    },
    {
      id: 3,
      name: 'Sushi Hajó',
      description: '8 db sake maki, 8 db uborkás maki, 4 db Arizona maki, 4 db California maki, 2 db ebi nigiri, 2 db chuka nigiri, forrázott szójabab.',
      price: '9990 Ft',
      image: '/ship.webp',
      imageAlt: 'Sushi Hajó',
    },
    {
      id: 4,
      name: 'Családi tál',
      description: '16 db sake maki, 16 db uborkás maki, 8 db Arizona maki, 8 db California maki, 4 db ebi nigiri, 4 db chuka nigiri, forrázott szójabab.',
      price: '17990 Ft',
      image: '/familybox.webp',
      imageAlt: 'Családi tál',
    },
    {
      id: 5,
      name: 'Prémium Sushi Hajó',
      description:
        '8 db sake maki, 4 db California maki, 8 db futomaki, 8 db Philadelphia maki, 1 db chuka nigiri, 1 db tobiko gunkan nigiri, 1 db ikura gunkan nigiri, 2 db unagi nigiri, 1 db sake sashimi, forrázott szójabab.',
      price: '22990 Ft',
      image: '/premium.webp',
      imageAlt: 'Prémium Sushi Hajó',
    },
    {
      id: 6,
      name: 'Bento Box 3',
      description:
        'Tempura rák édes chilivel, 8 db sushi (sake maki, kappa maki, Arizona maki, California maki), 2 db nigiri (chuka, ebi), japán mochi szezonális gyümölcsökkel.',
      price: '5990 Ft',
      image: '/Bento.jpeg',
      imageAlt: 'Bento Box',
    },
  ],
};

export function getProducts(lang) {
  return productTranslations[lang] ?? productTranslations.en;
}