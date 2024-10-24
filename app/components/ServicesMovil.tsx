import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from '@remix-run/react';
import { IoIosArrowUp } from "react-icons/io"
// Iconos de servicios
const icons = [
  '/service1.png',
  '/service2.png',
  '/service3.png',
  '/service4.png',
  '/service5.png',
];

// Definimos los tabs
const tabs = [
  {
    title: 'Outsourcing de Procesos',
    content: [
      'Estructura Hr optimiza tus procesos internos con soluciones eficientes y personal especializado, mejorando la productividad y reduciendo costos operativos.',
      'Nos encargamos de analizar, rediseñar y gestionar procesos clave, permitiéndote concentrarte en el crecimiento estratégico de tu negocio.',
      'Con nuestra experiencia en gestión de procesos, garantizamos fluidez operativa y adaptabilidad a las necesidades cambiantes del mercado.'
    ],
  },
  {
    title: 'Outsourcing en Tecnología',
    content: [
      'Estructura Hr te impulsa hacia la innovación tecnológica con servicios de outsourcing especializados que optimizan tu infraestructura y sistemas.',
      'Gestionamos todo tu entorno tecnológico, desde soporte técnico hasta implementación de nuevas tecnologías, asegurando una operación sin interrupciones.',
      'Con nuestro equipo de expertos en TI, puedes enfocarte en tu negocio mientras nosotros mantenemos tus sistemas seguros y actualizados.'
    ],
  },
  {
    title: 'Outsourcing Administrativo / Financiero',
    content: [
      'Estructura Hr agiliza tus operaciones administrativas y financieras, proporcionando expertos que manejan eficientemente tus tareas diarias.',
      'Nos encargamos de la contabilidad, nómina y gestión financiera, asegurando precisión y cumplimiento normativo en todas tus operaciones.',
      'Liberamos a tu equipo interno de tareas rutinarias, permitiéndoles centrarse en decisiones estratégicas que impulsen tu negocio.'
    ],
  },
  {
    title: 'Outsourcing Comercial',
    content: [
      'Estructura Hr potencia tus esfuerzos comerciales con equipos especializados que se alinean con tus metas de crecimiento y expansión.',
      'Desde la gestión de relaciones con clientes hasta el desarrollo de estrategias de ventas, optimizamos cada aspecto de tu operación comercial.',
      'Te ayudamos a maximizar tu presencia en el mercado y a convertir oportunidades en resultados tangibles, mejorando tu competitividad.'
    ],
  },
  {
    title: 'Outsourcing Industrial',
    content: [
      'Estructura Hr asegura la continuidad y eficiencia de tus operaciones industriales con personal altamente capacitado y soluciones a medida.',
      'Nos ocupamos de la contratación y gestión de equipos operativos, garantizando una producción fluida y de alta calidad.',
      'Con nuestro enfoque en optimización y seguridad, mejoramos la productividad y reducimos riesgos en tus procesos industriales.'
    ],
  },
];

const TabsMovil: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | undefined>(undefined);
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (contentRef.current) observer.observe(contentRef.current);
    
    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(activeTab === index ? undefined : index);
  };

  return (
    <>

      <div id='servicios' className="container-section pb-4 lg:py-0 bg-background  ">
        <div className="content-section flex flex-col lg:hidden">
          <div className="lg:w-1/3 w-full lg:flex lg:flex-col mb-6 lg:mb-0 lg:mr-6 lg:pr-12">
            {tabs.map((tab, index) => (
              <div key={index}>
                <button
                  onClick={() => handleTabClick(index)}
                  className={`w-full flex justify-between items-center p-4 font-medium text-sm lg:text-base border-b-2 border-secondary/65 transition-all duration-300 ease-in-out mb-2 lg:mb-0 ${activeTab === index ? 'bg-secondary text-black rounded-lg' : 'bg-transparent text-black'}`}
                >
                  {tab.title}
                  <span className={`transition-transform duration-300 ${activeTab === index ? 'rotate-180' : ''}`}><IoIosArrowUp /></span>
                </button>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={activeTab === index ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-background p-4">
                    <img src={icons[index]} alt={`Imagen del ${tab.title}`} className="w-full h-[200px] object-cover rounded-lg mb-4" />
                    <ul className="list-inside text-sm lg:text-base mb-6 pl-4">
                      {tab.content.map((item, idx) => (
                        <li key={idx} className="mb-2 list-disc">{item}</li>
                      ))}
                    </ul>
                    <NavLink to="/#contactanos">
                      <button className="px-4 py-2 bg-primary/85 text-white rounded-lg hover:bg-primary transition-colors shadow-md hover:shadow-lg w-full text-sm lg:text-base">
                        Contáctanos
                      </button>
                    </NavLink>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </>
  );
}

export default TabsMovil;
