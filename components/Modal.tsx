
import React, { useEffect } from 'react';
import { XIcon } from './IconComponents';

interface ModalProps {
  imageUrl: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl max-h-[90vh] bg-zinc-900 rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={imageUrl} 
          alt="Enlarged view" 
          className="object-contain w-full h-full max-h-[90vh] rounded-lg" 
        />
        <button 
          onClick={onClose} 
          className="absolute -top-4 -right-4 md:top-2 md:right-2 text-white bg-zinc-800/50 rounded-full p-2 hover:bg-brand-gold hover:text-black transition-all duration-300"
          aria-label="Close image viewer"
        >
          <XIcon className="w-6 h-6" />
        </button>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Modal;
