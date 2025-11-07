
import React, { useState, useMemo } from 'react';
import { PHOTOS, PHOTO_CATEGORIES } from '../constants';
import { PhotoCategory } from '../types';

interface GalleryProps {
  onImageClick: (imageUrl: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory | 'All'>('All');

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'All') {
      return PHOTOS;
    }
    return PHOTOS.filter(photo => photo.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100">My Portfolio</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">A curated collection of my favorite shots across various styles and subjects.</p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          <button 
            onClick={() => setActiveCategory('All')} 
            className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${activeCategory === 'All' ? 'bg-brand-gold text-zinc-900' : 'bg-zinc-800 text-slate-300 hover:bg-zinc-700'}`}
          >
            All
          </button>
          {PHOTO_CATEGORIES.map(category => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)} 
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${activeCategory === category ? 'bg-brand-gold text-zinc-900' : 'bg-zinc-800 text-slate-300 hover:bg-zinc-700'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="overflow-hidden rounded-lg break-inside-avoid group cursor-pointer" onClick={() => onImageClick(photo.src)}>
              <img 
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
