
import { Photo, PhotoCategory } from './types';

export const NAV_LINKS = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export const PHOTO_CATEGORIES: PhotoCategory[] = ['Portraits', 'Weddings', 'Fashion', 'Events'];

export const PHOTOS: Photo[] = [
  // Portraits
  { id: 1, src: 'https://picsum.photos/id/1005/800/1200', alt: 'Woman in a hat', category: 'Portraits', width: 800, height: 1200 },
  { id: 2, src: 'https://picsum.photos/id/1012/800/1200', alt: 'Man with a beard', category: 'Portraits', width: 800, height: 1200 },
  { id: 3, src: 'https://picsum.photos/id/1027/800/1200', alt: 'Child playing', category: 'Portraits', width: 800, height: 1200 },
  { id: 4, src: 'https://picsum.photos/id/342/800/1200', alt: 'Woman smiling', category: 'Portraits', width: 800, height: 1200 },

  // Weddings
  { id: 14, src: 'https://picsum.photos/id/1080/1200/800', alt: 'Bride and groom', category: 'Weddings', width: 1200, height: 800 },
  { id: 15, src: 'https://picsum.photos/id/21/1200/800', alt: 'Wedding rings', category: 'Weddings', width: 1200, height: 800 },
  { id: 16, src: 'https://picsum.photos/id/431/1200/800', alt: 'Wedding cake', category: 'Weddings', width: 1200, height: 800 },
  { id: 17, src: 'https://picsum.photos/id/355/1200/800', alt: 'Couple dancing', category: 'Weddings', width: 1200, height: 800 },
  
  // Fashion
  { id: 10, src: 'https://picsum.photos/id/433/800/1200', alt: 'Fashion model posing', category: 'Fashion', width: 800, height: 1200 },
  { id: 11, src: 'https://picsum.photos/id/645/800/1200', alt: 'Stylish outfit', category: 'Fashion', width: 800, height: 1200 },
  { id: 12, src: 'https://picsum.photos/id/177/800/1200', alt: 'Urban fashion shot', category: 'Fashion', width: 800, height: 1200 },
  { id: 13, src: 'https://picsum.photos/id/836/800/1200', alt: 'High fashion portrait', category: 'Fashion', width: 800, height: 1200 },
  
  // Events
  { id: 5, src: 'https://picsum.photos/id/1073/1200/800', alt: 'Concert photography', category: 'Events', width: 1200, height: 800 },
  { id: 6, src: 'https://picsum.photos/id/1050/1200/800', alt: 'Corporate event', category: 'Events', width: 1200, height: 800 },
  { id: 7, src: 'https://picsum.photos/id/102/1200/800', alt: 'Birthday party', category: 'Events', width: 1200, height: 800 },
  { id: 8, src: 'https://picsum.photos/id/119/1200/800', alt: 'Live performance', category: 'Events', width: 1200, height: 800 },
];
