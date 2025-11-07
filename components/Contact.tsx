
import React from 'react';
import { InstagramIcon, TwitterIcon, FacebookIcon } from './IconComponents';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100">Let's Create Together</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-slate-100 mb-4">Contact Info</h3>
            <address className="text-slate-300 mb-4 leading-relaxed not-italic">
              First Floor, 108 Parvati Bhawan,<br />
              Pustakalaya Road, Lohanipur,<br />
              Patna, 800001
            </address>
            <a href="mailto:hello@lenslegacy.com" className="text-brand-gold hover:underline text-lg">hello@lenslegacy.com</a>
            <div className="flex space-x-6 mt-8">
              <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors"><InstagramIcon className="w-7 h-7" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors"><TwitterIcon className="w-7 h-7" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-gold transition-colors"><FacebookIcon className="w-7 h-7" /></a>
            </div>
          </div>
          <div className="md:w-1/2">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" placeholder="Your Name" className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-3 px-4 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" placeholder="Your Email" className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-3 px-4 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" rows={5} placeholder="Your Message" className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-3 px-4 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-gold text-zinc-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
