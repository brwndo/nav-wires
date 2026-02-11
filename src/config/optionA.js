export const optionADesktopMenus = {
  discover: {
    width: 980,
    columns: [
      {
        header: 'DISCOVER',
        links: [
          { label: 'New Arrivals' },
          { label: 'Collaborations' },
          { label: 'Lookbooks' },
        ],
      },
      {
        featured: {
          imageLabel: 'Featured',
          badgeLabel: 'DROPPING FRIDAY',
          title: 'Spring Collection: Jujutsu Kaisen',
          subtitle: 'Drops Friday 3PM EST',
          ctaLabel: 'View Lookbook',
          countdownMinutes: 24 * 60,
          imageW: 400,
          imageH: 240,
        },
      },
      {
        featured: {
          imageLabel: 'Featured',
          title: 'Demon Slayer X 100 Thieves',
          ctaLabel: 'Shop Now',
        },
      },
    ],
  },
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
        header: 'FEATURED SERIES',
        links: [
          { label: 'Demon Slayer' },
          { label: 'My Hero Academia' },
          { label: 'One Piece' },
          { label: 'Jujutsu Kaisen' },
          { label: 'Chainsaw Man' },
          { label: 'Attack on Titan' },
          { label: 'Naruto' },
          { label: 'Bleach' },
        ],
      },
      {
        featured: {
          imageLabel: 'Featured',
          title: 'New: Attack on Titan Final Season',
        },
      },
    ],
  },
  shop: {
    width: 720,
    columns: [
      {
        header: 'APPAREL',
        links: [
          { label: "Men's" },
          { label: "Women's" },
          { label: 'Exclusives' },
        ],
      },
      {
        header: 'COLLECTIBLES',
        links: [
          { label: 'Figures' },
          { label: 'Blind Boxes' },
          { label: 'Model Kits' },
          { label: 'Replicas' },
          { label: 'Plush' },
        ],
      },
      {
        header: 'ENTERTAINMENT',
        links: [
          { label: 'Blu-ray & DVD' },
          { label: 'Limited Editions' },
          { label: 'Steelbooks' },
        ],
      },
      {
        header: 'MORE',
        links: [
          { label: 'Restocks' },
          { label: 'Gift Cards' },
        ],
      },
    ],
  },
};

export const optionAMobileSections = [
  {
    label: 'Discover',
    children: [
      { label: 'New Arrivals' },
      { label: 'Collaborations' },
      { label: 'Lookbooks' },
    ],
  },
  {
    label: 'Series',
    children: [
      { label: 'All Series A-Z' },
      {
        label: 'Featured',
        children: [
          { label: 'Demon Slayer' },
          { label: 'My Hero Academia' },
          { label: 'One Piece' },
          { label: 'Jujutsu Kaisen' },
          { label: 'Chainsaw Man' },
        ],
      },
    ],
  },
  {
    label: 'Shop',
    children: [
      {
        label: 'Apparel',
        children: [
          { label: "Men's" },
          { label: "Women's" },
          { label: 'Exclusives' },
        ],
      },
      {
        label: 'Collectibles',
        children: [
          { label: 'Figures' },
          { label: 'Blind Boxes' },
          { label: 'Model Kits' },
          { label: 'Replicas' },
          { label: 'Plush' },
        ],
      },
      {
        label: 'Entertainment',
        children: [
          { label: 'Blu-ray & DVD' },
          { label: 'Limited Editions' },
          { label: 'Steelbooks' },
        ],
      },
    ],
  },
];

export const optionAFooterLinks = [
  { label: 'Account' },
  { label: 'Help' },
];
