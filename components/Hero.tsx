import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center text-white bg-cover bg-center py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(28, 58, 90, 0.9), rgba(28, 58, 90, 0.85)), url('https://images.unsplash.com/photo-1507629221880-6570b47231e8?auto=format&fit=crop&w=1950&q=80')`
      }}
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="animate-in slide-in-from-bottom-10 fade-in duration-1000 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-xl">
            Transformando Espacios, <span className="text-brand-gold">Creando Hogares.</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md text-gray-200 font-light max-w-lg">
            Nuestra pasión es crear interiores que no solo se vean espectaculares, sino que también se sientan perfectos para ti.
          </p>
          <a 
            href="#portafolio" 
            className="inline-block bg-brand-accent text-white font-semibold py-4 px-10 rounded shadow-lg hover:bg-red-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
          >
            Explora Nuestros Proyectos
          </a>
        </div>

        {/* Right Image (Desktop only) */}
        <div className="hidden md:block relative animate-in slide-in-from-right-10 fade-in duration-1000 delay-300">
             <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500 group">
                <img 
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1000&q=80" 
                  alt="Oficinas comerciales modernas" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
             </div>
             {/* Decorative gold border behind */}
             <div className="absolute top-6 -right-6 w-full h-full border-2 border-brand-gold rounded-lg -z-10 opacity-60"></div>
             {/* Decorative glow */}
             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-gold/20 rounded-full blur-3xl -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;