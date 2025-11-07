
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import CTA from './components/CTA';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Gallery onImageClick={openModal} />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      {selectedImage && (
        <Modal 
          imageUrl={selectedImage} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}

export default App;
