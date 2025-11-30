import React from 'react';
import { useReveal } from '../hooks/useReveal.ts';

const ServiceItem: React.FC<{ image: string; title: string; description: string }> = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-brand-accent transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl group">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-brand-primary text-xl font-bold mb-3">{title}</h3>
        <p className="text-brand-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section id="servicios" className="py-20 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block text-white">
          Nuestros Servicios
          <span className="block h-1 w-20 bg-brand-gold mx-auto mt-4 rounded-full"></span>
        </h2>
        
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <ServiceItem 
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1050&q=80"
            title="Diseño Residencial"
            description="Creamos espacios que reflejan tu estilo de vida. Desde la selección de muebles hasta la paleta de colores perfecta."
          />
          <ServiceItem 
            image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1050&q=80"
            title="Diseño Comercial"
            description="Soluciones creativas para espacios de trabajo y negocios que potencian la productividad y la imagen de marca."
          />
          <ServiceItem 
            image="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=1050&q=80"
            title="Consultoría de Estilo"
            description="Asesoría experta para renovar tus espacios con confianza, optimizando lo que ya tienes o planeando nuevos cambios."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;