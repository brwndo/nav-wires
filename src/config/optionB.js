export const optionBDesktopMenus = {
  discover: {
    width: 600,
    columns: [
      {
        header: 'CONTENT',
        links: [
          { label: 'Coming Soon' },
          { label: 'New Arrivals' },
          { label: 'Collaborations' },
          { label: 'Lookbooks' },
          { label: 'Exclusives' },
        ],
      },
      {
        featured: {
          imageLabel: 'Featured',
          title: 'New Collab: Studio Ghibli x Streetwear',
          subtitle: 'Explore the collection',
        },
      },
    ],
  },
  mens: {
    width: 900,
    columns: [
      {
        header: 'BY TYPE',
        links: [
          { label: 'T-Shirts' },
          { label: 'Hoodies & Sweatshirts' },
          { label: 'Jackets' },
          { label: 'Pants & Shorts' },
          { label: 'Accessories' },
          { label: 'Figures' },
        ],
      },
      {
        header: 'BY SERIES',
        links: [
          { label: 'Demon Slayer' },
          { label: 'One Piece' },
          { label: 'Naruto' },
          { label: 'Attack on Titan' },
          { label: 'Dragon Ball Z' },
          { label: 'All Series' },
        ],
      },
      {
        featured: {
          imageLabel: 'Featured',
          title: 'New: Oversized Graphic Tees',
          ctaLabel: 'Shop Now',
        },
      },
    ],
  },
  womens: {
    width: 900,
    columns: [
      {
        header: 'BY TYPE',
        links: [
          { label: 'T-Shirts' },
          { label: 'Hoodies & Sweatshirts' },
          { label: 'Jackets' },
          { label: 'Onesies' },
          { label: 'Pants & Shorts' },
          { label: 'Accessories' },
          { label: 'Figures' },
        ],
      },
      {
        header: 'BY SERIES',
        links: [
          { label: 'Sailor Moon' },
          { label: 'Cardcaptor Sakura' },
          { label: 'My Melody' },
          { label: 'Fruits Basket' },
          { label: 'Studio Ghibli' },
          { label: 'All Series' },
        ],
      },
      {
        featured: {
          imageLabel: 'Featured',
          title: 'Cozy Collection: Kawaii Comfort',
          ctaLabel: 'Shop Collection',
        },
      },
    ],
  },
  collectibles: {
    width: 900,
    columns: [
      {
        header: 'COLLECTIBLES',
        links: [
          { label: 'All Figures' },
          { label: 'Model Kits' },
          { label: 'Replicas' },
          { label: 'Plush' },
        ],
      },
      {
        header: 'MEDIA',
        links: [
          { label: 'Blu-ray & DVD' },
          { label: 'Limited Editions' },
          { label: 'Music' },
          { label: 'Steelbooks' },
        ],
      },
      {
        header: 'BROWSE',
        links: [
          { label: 'By Series' },
          { label: 'By Character' },
          { label: 'Featured' },
        ],
        featured: {
          imageLabel: 'New Arrival',
          title: 'New Arrival',
          imageW: 280,
          imageH: 140,
        },
      },
    ],
  },
};

export const optionBMobileSections = [
  {
    label: 'Discover',
    children: [
      { label: 'Coming Soon' },
      { label: 'New Arrivals' },
      { label: 'Collaborations' },
      { label: 'Lookbooks' },
      { label: 'Exclusives' },
    ],
  },
  {
    label: "Men's",
    children: [
      {
        label: 'By Type',
        children: [
          { label: 'T-Shirts' },
          { label: 'Hoodies & Sweatshirts' },
          { label: 'Jackets' },
          { label: 'Pants & Shorts' },
          { label: 'Accessories' },
          { label: 'Figures' },
        ],
      },
      {
        label: 'By Series',
        children: [
          { label: 'All Series' },
          {
            label: 'Featured Series',
            children: [
              { label: 'Demon Slayer' },
              { label: 'One Piece' },
              { label: 'Naruto' },
              { label: 'Attack on Titan' },
              { label: 'Dragon Ball Z' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Women's",
    children: [
      {
        label: 'By Type',
        children: [
          { label: 'T-Shirts' },
          { label: 'Hoodies & Sweatshirts' },
          { label: 'Jackets' },
          { label: 'Onesies' },
          { label: 'Pants & Shorts' },
          { label: 'Accessories' },
          { label: 'Figures' },
        ],
      },
      {
        label: 'By Series',
        children: [
          { label: 'All Series' },
          {
            label: 'Featured Series',
            children: [
              { label: 'Sailor Moon' },
              { label: 'Cardcaptor Sakura' },
              { label: 'My Melody' },
              { label: 'Fruits Basket' },
              { label: 'Studio Ghibli' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Collectibles & Media',
    children: [
      {
        label: 'Collectibles',
        children: [
          { label: 'All Figures' },
          { label: 'Model Kits' },
          { label: 'Replicas' },
          { label: 'Plush' },
        ],
      },
      {
        label: 'Media',
        children: [
          { label: 'Blu-ray & DVD' },
          { label: 'Limited Editions' },
          { label: 'Music' },
          { label: 'Steelbooks' },
        ],
      },
    ],
  },
];

export const optionBFooterLinks = [
  { label: 'Account' },
  { label: 'Help' },
];
