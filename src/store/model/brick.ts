import {Store} from './store';

export const TheBrick: Store = {
  currency: '$',
  labels: {
    inStock: [
      {
        container: '.product-sidebar #addToCartForm input.addToCart',
        text: ['Add to Cart'],
      },
    ],
    maxPrice: {
      container: '.product-sidebar #addToCartForm #productPrice span.langEN',
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.thebrick.com/products/arcade-riser-stfriser',
    },
    {
      brand: 'midway',
      model: 'mortal kombat',
      series: 'arcade',
      url:
        'https://www.thebrick.com/products/arcade1up-midway-legacy-cabinet-with-riser',
    },
  ],
  name: 'brick',
};
