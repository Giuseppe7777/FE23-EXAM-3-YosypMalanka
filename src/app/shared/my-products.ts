
import { ProductModel } from "./my-products.model";

export const ELECTRONICS_PRODUCTS: ProductModel[] = [
  {
    productName: 'Samsung Smart TV',
    brand: 'Samsung',
    model: 'QLED Q60T',
    category: 'Television',
    price: 1200,
    available: true,
    description:
      'Samsung QLED TV with Quantum Dot technology for rich colors and high image clarity. Supports 4K resolution.',
    features: [
      'Screen size: 55 inches',
      'Resolution: 4K',
      'Smart TV (Tizen OS)',
      'HDR support',
      'Quantum Dot technology',
    ],
    profileImageUrl: '/img/samsung-tv.webp',
    originCountry: 'South Korea',
    warrantyYears: 2,
    qtty: 1,
  },
  {
    productName: 'LG Washing Machine',
    brand: 'LG',
    model: 'FH4G1JCH2N',
    category: 'Washing Machine',
    price: 850,
    available: true,
    description:
      'LG washing machine with Steam Wash and Inverter Direct Drive technology for energy-efficient and quiet washing.',
    features: [
      'Load capacity: 10 kg',
      'Spin speed: 1400 rpm',
      'Inverter Direct Drive technology',
      'Steam washing function',
      'Smart control via smartphone',
    ],
    profileImageUrl: '/img/lg-washing-machine.webp',
    originCountry: 'South Korea',
    warrantyYears: 3,
    qtty: 1,
  },
  {
    productName: 'Bosch Refrigerator',
    brand: 'Bosch',
    model: 'KGN36XI42',
    category: 'Refrigerator',
    price: 1100,
    available: false,
    description:
      'Energy-efficient Bosch refrigerator with A+++ rating and NoFrost technology, making food storage easier without the need for defrosting.',
    features: [
      'Capacity: 324 liters',
      'NoFrost technology',
      'Energy efficiency class: A+++',
      'Electronic control',
      'Noise level: 39 dB',
    ],
    profileImageUrl: '/img/bosch-fridge.webp',
    originCountry: 'Germany',
    warrantyYears: 2,
    qtty: 1,
  },
  {
    productName: 'Dyson Vacuum Cleaner',
    brand: 'Dyson',
    model: 'V11 Absolute',
    category: 'Vacuum Cleaner',
    price: 600,
    available: true,
    description:
      'The Dyson V11 cordless vacuum cleaner with a powerful digital motor and filtration system for maximum cleaning efficiency.',
    features: [
      'Suction power: 185 AW',
      'Battery life: up to 60 minutes',
      'HEPA filter',
      '3 operating modes',
      'Bagless',
    ],
    profileImageUrl: '/img/dyson-vacuum.webp',
    originCountry: 'United Kingdom',
    warrantyYears: 2,
    qtty: 1,
  },
  {
    productName: 'Apple MacBook Pro',
    brand: 'Apple',
    model: 'M1 Pro',
    category: 'Laptop',
    price: 2200,
    available: true,
    description:
      'Powerful Apple MacBook Pro with M1 Pro chip, ideal for professional tasks, offering high performance and long battery life.',
    features: [
      'Display: 14-inch Retina',
      'Processor: M1 Pro',
      'RAM: 16GB',
      'SSD storage: 512GB',
      'Battery life: up to 17 hours',
    ],
    profileImageUrl: '/img/macbook-pro.webp',
    originCountry: 'USA',
    warrantyYears: 1,
    qtty: 1,
  },
  {
    productName: 'Sony PlayStation 5',
    brand: 'Sony',
    model: 'PS5',
    category: 'Game Console',
    price: 500,
    available: true,
    description:
      'Next-generation console from Sony supporting 4K games and fast loading times thanks to the built-in SSD.',
    features: [
      'Supports 4K gaming',
      'Built-in 825GB SSD',
      'Fast loading mode',
      'Backward compatibility with PS4 games',
      'DualSense controller',
    ],
    profileImageUrl: '/img/ps5.webp',
    originCountry: 'Japan',
    warrantyYears: 1,
    qtty: 1,
  },
];