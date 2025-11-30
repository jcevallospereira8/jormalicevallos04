import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { Menu, X, MessageSquare, PenTool, Hammer, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

/* --- HOOKS --- */

const useReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  return { ref, isVisible };
};

/* --- COMPONENTS --- */

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
                {/* 
                  INTELIGENTE: Intentamos cargar tu foto 'foto1.jpeg'. 
                  Si no la has subido aún, se activará 'onError' y mostrará la foto de internet.
                */}
                <img 
                  src="foto1.jpeg" 
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1000&q=80";
                    e.currentTarget.onerror = null; // Previene bucles infinitos
                  }}
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
          {/* Updated Image for Diseño Comercial */}
          <ServiceItem 
            image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1050&q=80"
            title="Diseño Comercial"
            description="Soluciones creativas para espacios de trabajo y negocios que potencian la productividad y la imagen de marca."
          />
          {/* Updated Image for Consultoría de Estilo */}
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

const Process: React.FC = () => {
  const { ref, isVisible } = useReveal();

  const steps = [
    {
      icon: <MessageSquare size={24} />,
      title: "Consulta y Visión",
      description: "Comenzamos con una conversación para entender tus sueños, necesidades y el potencial de tu espacio."
    },
    {
      icon: <PenTool size={24} />,
      title: "Diseño y Propuesta",
      description: "Desarrollo un concepto de diseño a medida, presentando planos, materiales y visualizaciones."
    },
    {
      icon: <Hammer size={24} />,
      title: "Ejecución y Magia",
      description: "Coordinamos cada detalle de la implementación para transformar la visión en una realidad impecable."
    }
  ];

  return (
    <section id="proceso" className="py-20 px-6 md:px-12 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block text-white">
          Nuestro Proceso
          <span className="block h-1 w-20 bg-brand-gold mx-auto mt-4 rounded-full"></span>
        </h2>

        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 text-left transition-all duration-1000 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {steps.map((step, index) => (
            <div key={index} className="bg-white/5 p-8 rounded-lg border-l-4 border-brand-gold hover:bg-white/10 transition-colors duration-300">
              <div className="w-12 h-12 bg-brand-gold text-brand-primary rounded-full flex items-center justify-center font-bold mb-6 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-brand-gold text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-200 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);