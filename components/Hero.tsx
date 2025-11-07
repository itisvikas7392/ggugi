
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img 
        src="https://picsum.photos/id/1018/1920/1080" 
        alt="Breathtaking landscape" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 tracking-wide leading-tight">
          Capturing Moments, Creating Memories
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light text-slate-200">
          Timeless photography that tells your unique story. Specializing in weddings, fashion, events, and portraits.
        </p>
        <a 
          href="#gallery" 
          className="bg-brand-gold text-zinc-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
