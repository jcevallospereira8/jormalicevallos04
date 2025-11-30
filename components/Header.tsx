import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 5L95 50L50 95L5 50L50 5Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
    <path d="M50 25L75 50L50 75L25 50L50 25Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
    <path d="M50 40L60 50L50 60L40 50L50 40Z" fill="currentColor" />
  </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-brand-primary text-white sticky top-0 z-50 shadow-md py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
      <div className="flex items-center gap-2">
        <a href="#home" className="flex items-center gap-3 group">
           <Logo className="w-10 h-10 text-brand-gold group-hover:text-white transition-colors duration-300" />
           <span className="text-xl md:text-2xl font-bold tracking-widest uppercase">Jormali Cevallos</span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 items-center font-semibold text-sm tracking-wide">
          <li><a href="#servicios" className="hover:text-brand-gold transition-colors duration-300">SERVICIOS</a></li>
          <li><a href="#proceso" className="hover:text-brand-gold transition-colors duration-300">PROCESO</a></li>
          <li><a href="#portafolio" className="hover:text-brand-gold transition-colors duration-300">PORTAFOLIO</a></li>
          <li><a href="#nosotros" className="hover:text-brand-gold transition-colors duration-300">NOSOTROS</a></li>
          <li>
            <a href="#contacto" className="text-brand-accent hover:text-red-400 transition-colors duration-300 font-bold border border-brand-accent px-4 py-2 rounded hover:bg-brand-accent hover:text-white">
              CONTACTO
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-brand-primary border-t border-brand-secondary/30 md:hidden shadow-xl animate-in fade-in slide-in-from-top-5 duration-300">
          <ul className="flex flex-col p-6 gap-4 font-semibold text-center">
            <li><a href="#servicios" onClick={toggleMenu} className="block py-2 hover:text-brand-gold">SERVICIOS</a></li>
            <li><a href="#proceso" onClick={toggleMenu} className="block py-2 hover:text-brand-gold">PROCESO</a></li>
            <li><a href="#portafolio" onClick={toggleMenu} className="block py-2 hover:text-brand-gold">PORTAFOLIO</a></li>
            <li><a href="#nosotros" onClick={toggleMenu} className="block py-2 hover:text-brand-gold">NOSOTROS</a></li>
            <li><a href="#contacto" onClick={toggleMenu} className="block py-2 text-brand-accent font-bold">CONTACTO</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;