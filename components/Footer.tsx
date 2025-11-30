import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white/70 py-10 px-6 text-center border-t border-white/10">
      <div className="container mx-auto">
        <p className="mb-4 text-sm">&copy; {new Date().getFullYear()} Jormali Cevallos. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6">
          <a href="#" aria-label="Visita nuestro Facebook" className="hover:text-brand-gold transition-colors transform hover:scale-110">
            <Facebook size={24} />
          </a>
          <a href="#" aria-label="Visita nuestro Instagram" className="hover:text-brand-gold transition-colors transform hover:scale-110">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;