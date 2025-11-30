import React from 'react';
import { useReveal } from '../hooks/useReveal.ts';

interface Project {
  image: string;
  title: string;
  category: string;
}

const projects: Project[] = [
  {
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1051&q=80",
    title: "Apartamento Moderno",
    category: "Diseño Residencial"
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1050&q=80",
    title: "Oficinas Tech",
    category: "Diseño Comercial"
  },
  {
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1050&q=80",
    title: "Cafetería Local",
    category: "Identidad de Marca"
  },
  {
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1050&q=80",
    title: "Cocina Minimalista",
    category: "Residencial"
  },
  {
    image: "https://images.unsplash.com/photo-1571508601936-6ca847b47ae4?auto=format&fit=crop&w=1050&q=80",
    title: "Dormitorio Sereno",
    category: "Residencial"
  },
  {
    image: "https://images.unsplash.com/photo-1603992228454-4a6c95a145a8?auto=format&fit=crop&w=1050&q=80",
    title: "Baño de Lujo",
    category: "Residencial"
  }
];

const Portfolio: React.FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section id="portafolio" className="py-20 px-6 md:px-12 bg-white text-brand-dark">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block text-brand-primary">
          Portafolio Destacado
          <span className="block h-1 w-20 bg-brand-accent mx-auto mt-4 rounded-full"></span>
        </h2>

        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {projects.map((project, index) => (
            <div key={index} className="group rounded-lg overflow-hidden shadow-lg cursor-pointer bg-white">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="p-6 text-left border-b-4 border-transparent group-hover:border-brand-accent transition-colors duration-300">
                <h4 className="text-brand-primary font-bold text-lg mb-1">{project.category}</h4>
                <p className="text-brand-secondary text-sm">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;