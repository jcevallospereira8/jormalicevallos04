import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { MessageSquare, PenTool, Hammer } from 'lucide-react';

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

export default Process;