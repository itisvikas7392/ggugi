
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-brand-gold">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-4">
          Ready to Capture Your Story?
        </h2>
        <p className="text-lg text-zinc-800 max-w-2xl mx-auto mb-8">
          Every moment is precious. Let's work together to create stunning, timeless images that you'll cherish forever. Book a consultation today to discuss your vision.
        </p>
        <a 
          href="#contact" 
          className="bg-zinc-900 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-zinc-800 transition-all duration-300 transform hover:scale-105 inline-block"
        >
          Book a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default CTA;
