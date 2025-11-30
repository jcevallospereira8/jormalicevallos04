import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section id="contacto" className="py-20 px-6 md:px-12 bg-white text-brand-dark">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block text-brand-primary">
          Hablemos
          <span className="block h-1 w-20 bg-brand-accent mx-auto mt-4 rounded-full"></span>
        </h2>

        <div 
          ref={ref}
          className={`bg-white rounded-lg shadow-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Información de Contacto</h3>
            <p className="text-brand-secondary leading-relaxed">
              ¿Listo para empezar tu proyecto? Contáctanos y demos el primer paso para transformar tu espacio.
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold text-brand-primary">Email</p>
                  <p className="text-brand-secondary">info@jormalicevallos.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold text-brand-primary">Teléfono</p>
                  <p className="text-brand-secondary">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-brand-primary">Ubicación</p>
                  <p className="text-brand-secondary">Caracas, Venezuela</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-brand-primary mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="nombre" className="block text-sm font-bold text-brand-secondary mb-1">Nombre</label>
                <input 
                  type="text" 
                  id="nombre" 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-brand-secondary mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                  placeholder="Tu correo electrónico"
                  required
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-bold text-brand-secondary mb-1">Mensaje</label>
                <textarea 
                  id="mensaje" 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand-accent text-white font-bold py-3 rounded hover:bg-red-800 transition-colors shadow-lg mt-2"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;