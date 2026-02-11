export const optionDDesktopMenus = {
  series: {
    width: 900,
    columns: [
      {
        header: 'BROWSE',
        links: [
          { label: 'All Series A-Z' },
          { label: 'All Characters' },
        ],
      },
      {
        header: 'POPULAR',
        links: [
          { label: 'Demon Slayer' },
          { label: 'One Piece' },
          { label: 'Jujutsu Kaisen' },
          { label: 'My Hero Academia' },
          { label: 'Chainsaw Man' },
          { label: 'Attack on Titan' },
          { label: 'Naruto' },
          { label: 'Bleach' },
        ],
      },
      {
        featured: {
          imageLabel: 'Featured',
          title: 'Attack on Titan Complete Collection',
          ctaLabel: 'Shop Now',
        },
      },
    ],
  },
  shop: {
    width: 840,
    columns: [
      {
        header: 'APPAREL',
        links: [
          { label: 'All Apparel' },
          { label: "Men's" },
          { label: "Women's" },
          { label: 'Exclusives' },
        ],
      },
      {
        header: 'COLLECTIBLES',
        links: [
          { label: 'All Figures' },
          { label: 'Blind Boxes' },
          { label: 'Model Kits' },
          { label: 'Replicas' },
          { label: 'Plush' },
        ],
      },
      {
        header: 'ENTERTAINMENT',
        links: [
          { label: 'All Media' },
          { label: 'Blu-ray & DVD' },
          { label: 'Limited Editions' },
          { label: 'Steelbooks' },
        ],
      },
      {
        header: 'QUICK ACCESS',
        links: [
          { label: 'Best Sellers' },
          { label: 'Exclusives' },
        ],
      },
    ],
  },
  discover: {
    width: 240,
    columns: [
      {
        links: [
          { label: 'Collaborations' },
          { label: 'Lookbooks' },
          { label: 'Stories' },
          { label: 'Behind the Design' },
        ],
      },
    ],
  },
};

export const optionDNewMenuLinks = [
  { label: 'Drops This Week' },
  { label: 'New Arrivals (7 days)' },
  { label: 'Coming Soon' },
  { label: 'Restocks' },
];

export const optionDMobileSections = [
  {
    label: 'Series',
    children: [
      { label: 'All Series A-Z' },
      { label: 'All Characters' },
      {
        label: 'Popular',
        children: [
          { label: 'Demon Slayer' },
          { label: 'One Piece' },
          { label: 'Jujutsu Kaisen' },
          { label: 'My Hero Academia' },
          { label: 'Chainsaw Man' },
          { label: 'Attack on Titan' },
        ],
      },
    ],
  },
  {
    label: 'New',
    children: [
      { label: 'Drops This Week' },
      { label: 'New Arrivals (7 days)' },
      { label: 'Coming Soon' },
      { label: 'Restocks' },
      {
        type: 'callout',
        badge: 'DROPPING FRIDAY',
        title: 'Evangelion x Streetwear',
        timerText: '02d 14h 32m',
        ctaLabel: 'Notify Me',
      },
    ],
  },
  {
    label: 'Shop',
    children: [
      { label: 'Best Sellers' },
      {
        label: 'Apparel',
        children: [
          { label: 'All Apparel' },
          { label: "Men's" },
          { label: "Women's" },
          { label: 'Exclusives' },
        ],
      },
      {
        label: 'Collectibles',
        children: [
          { label: 'All Figures' },
          { label: 'Blind Boxes' },
          { label: 'Model Kits' },
          { label: 'Replicas' },
          { label: 'Plush' },
        ],
      },
      {
        label: 'Entertainment',
        children: [
          { label: 'All Media' },
          { label: 'Blu-ray & DVD' },
          { label: 'Limited Editions' },
          { label: 'Steelbooks' },
        ],
      },
    ],
  },
  {
    label: 'Discover',
    children: [
      { label: 'Collaborations' },
      { label: 'Lookbooks' },
      { label: 'Stories' },
      { label: 'Behind the Design' },
    ],
  },
];

export const optionDFooterLinks = [
  { label: 'Account' },
  { label: 'Help' },
];
