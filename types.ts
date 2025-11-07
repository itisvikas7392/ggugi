
export type PhotoCategory = 'Portraits' | 'Weddings' | 'Fashion' | 'Events';

export interface Photo {
  id: number;
  src: string;
  alt: string;
  category: PhotoCategory;
  width: number;
  height: number;
}
