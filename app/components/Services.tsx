import React, { useState } from 'react';
import { motion } from 'framer-motion';

import icono1 from '/service1.png';
import icono2 from '/service2.png';
import icono3 from '/service3.png';
import icono4 from '/service4.png';
import icono5 from '/service5.png';
import flecha1 from '/flecha1.png';
import flecha2 from '/flecha2.png';
import { NavLink } from '@remix-run/react';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { 
      title: 'Outsourcing de Procesos', 
      content: [
        'Estructura Hr optimiza tus procesos internos con soluciones eficientes y personal especializado, mejorando la productividad y reduciendo costos operativos.',
        'Nos encargamos de analizar, rediseñar y gestionar procesos clave, permitiéndote concentrarte en el crecimiento estratégico de tu negocio.',
        'Con nuestra experiencia en gestión de procesos, garantizamos fluidez operativa y adaptabilidad a las necesidades cambiantes del mercado.'
      ], 
      image: icono1
    },
    { 
      title: 'Outsourcing en Tecnología', 
      content: [
        'Estructura Hr te impulsa hacia la innovación tecnológica con servicios de outsourcing especializados que optimizan tu infraestructura y sistemas.',
        'Gestionamos todo tu entorno tecnológico, desde soporte técnico hasta implementación de nuevas tecnologías, asegurando una operación sin interrupciones.',
        'Con nuestro equipo de expertos en TI, puedes enfocarte en tu negocio mientras nosotros mantenemos tus sistemas seguros y actualizados.'
      ], 
      image: icono2
    },
    { 
      title: 'Outsourcing Administrativo / Financiero', 
      content: [
        'Estructura Hr agiliza tus operaciones administrativas y financieras, proporcionando expertos que manejan eficientemente tus tareas diarias.',
        'Nos encargamos de la contabilidad, nómina y gestión financiera, asegurando precisión y cumplimiento normativo en todas tus operaciones.',
        'Liberamos a tu equipo interno de tareas rutinarias, permitiéndoles centrarse en decisiones estratégicas que impulsen tu negocio.'
      ], 
      image: icono3
    },
    { 
      title: 'Outsourcing Comercial', 
      content: [
        'Estructura Hr potencia tus esfuerzos comerciales con equipos especializados que se alinean con tus metas de crecimiento y expansión.',
        'Desde la gestión de relaciones con clientes hasta el desarrollo de estrategias de ventas, optimizamos cada aspecto de tu operación comercial.',
        'Te ayudamos a maximizar tu presencia en el mercado y a convertir oportunidades en resultados tangibles, mejorando tu competitividad.'
      ], 
      image: icono4
    },
    { 
      title: 'Outsourcing Industrial', 
      content: [
        'Estructura Hr asegura la continuidad y eficiencia de tus operaciones industriales con personal altamente capacitado y soluciones a medida.',
        'Nos ocupamos de la contratación y gestión de equipos operativos, garantizando una producción fluida y de alta calidad.',
        'Con nuestro enfoque en optimización y seguridad, mejoramos la productividad y reducimos riesgos en tus procesos industriales.'
      ], 
      image: icono5
    }
  ];

  return (
    <>
      <div  className='container-section h-32 bg-background relative -mt-24 hidden lg:flex overflow-hidden'>
        <img src={flecha1} alt={`Imagen del flecha1`} className="absolute z-50 hidden lg:block -left-8" />
        <img src={flecha2} alt={`Imagen del flecha2`} className="absolute z-50 hidden lg:block -right-8 -top-10" />
      </div>
    <div className="container-section pb-4  lg:py-24 bg-background ">
      <div className="content-section hidden lg:flex flex-col lg:flex-row">
        
        {/* Columna de tabs */}
        <div className="lg:w-1/3 w-full lg:flex lg:flex-col mb-6 lg:mb-0 lg:mr-6 lg:pr-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-full lg:flex-1 text-left p-4 lg:p-4 font-medium text-sm lg:text-base border-b-2 lg:border-b-2 border-secondary/65 pr-4 ${
                activeTab === index ? 'bg-secondary text-black rounded-lg' : 'bg-transparent text-black'
              } transition-all duration-300 ease-in-out mb-2 lg:mb-0`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Columna de contenido */}
        <div className="lg:w-2/3 w-full flex flex-col pl-0 ">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col lg:grid lg:grid-cols-[1.3fr_1fr] gap-6 h-full" // Ajuste aquí para el grid
          >
            {/* Columna del texto y botón */}
            <div className="flex flex-col justify-between h-full">
              <h2 className="hidden lg:block text-lg lg:text-2xl font-semibold mb-4">{tabs[activeTab].title}</h2>
              <img src={tabs[activeTab].image} alt={`Imagen del ${tabs[activeTab].title}`} className="w-full h-[250px] object-cover rounded-lg block lg:hidden mb-8" />
              <ul className="list-inside text-sm lg:text-base mb-6 pl-4">
                {tabs[activeTab].content.map((item, index) => (
                  <li key={index} className="mb-2 list-disc">{item}</li>
                ))}
              </ul>
              <NavLink to="/#contactanos">
              <button className="px-4 py-3 bg-primary/85 text-white rounded-lg hover:bg-primary transition-colors shadow-md hover:shadow-lg w-full text-sm lg:text-base">
                Contáctanos
              </button>
              </NavLink>
            </div>

            {/* Columna de la imagen */}
            <div className="hidden lg:flex justify-end items-center h-full pl-0 lg:pl-8">
              <img src={tabs[activeTab].image} alt={`Imagen del ${tabs[activeTab].title}`} className="h-[400px] object-cover rounded-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Tabs;
