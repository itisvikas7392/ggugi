
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="md:w-1/2 lg:w-2/5">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/id/237/800/1000" 
                alt="Photographer's portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-3/5 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 mb-6">About Me</h2>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              Hello! I'm Alex Doe, a passionate photographer with a love for capturing the beauty in everyday moments. My journey began over a decade ago with a simple film camera, and since then, I've been dedicated to honing my craft and developing a unique artistic voice.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I believe that a great photograph is more than just an image; it's a story, an emotion, a fragment of time preserved forever. Whether I'm shooting majestic landscapes or candid portraits, my goal is always to create authentic, compelling images that resonate with the viewer.
            </p>
            <a href="#contact" className="inline-block bg-transparent border-2 border-brand-gold text-brand-gold font-bold py-3 px-8 rounded-full text-lg hover:bg-brand-gold hover:text-zinc-900 transition-colors duration-300">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
