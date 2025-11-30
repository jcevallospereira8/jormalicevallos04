import React from 'react';
import { useReveal } from '../hooks/useReveal';

const About: React.FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section id="nosotros" className="py-20 px-6 md:px-12">
      <div 
        ref={ref}
        className={`container mx-auto flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex-1 text-left">
           <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block text-white">
            Nuestra Filosofía
            <span className="block h-1 w-20 bg-brand-gold mt-4 rounded-full"></span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-200 mb-6 font-light">
            Nuestra filosofía se basa en que un buen diseño tiene el poder de mejorar la vida de las personas. 
          </p>
          <p className="text-lg leading-relaxed text-gray-200 font-light">
            Con un enfoque en la estética funcional y una pasión por los detalles, nos dedicamos a crear ambientes que no solo son hermosos, sino que también cuentan tu historia y se adaptan perfectamente a tu día a día.
          </p>
        </div>
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&w=1050&q=80" 
            alt="Interior design philosophy" 
            className="w-full rounded-lg shadow-2xl border-4 border-white/10"
          />
        </div>
      </div>
    </section>
  );
};

export default About;