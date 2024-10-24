import { useEffect, useRef, useState } from 'react';
import cta1 from '/cta1.png';
import flecha from '/flecha3.png';

function CTA1() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Deja de observar una vez que es visible
        }
      },
      {
        threshold: 0.2, // Cambia este valor si deseas ajustar cuándo se activa la animación
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="container-section lg:pt-8 bg-background relative">
      <img 
        src={flecha} 
        alt="Imagen Flecha" 
        className="absolute hidden lg:block top-24 left-0" 
      />
      <div className={`content-section flex flex-wrap items-center transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Contenedor de texto y cargo */}
        <div className="w-full lg:w-1/2 flex flex-col lg:pr-16 xl:pr-32 mb-0 lg:mb-0 pt-4">
          <h3 className="text-sm lg:text-3xl font-medium -mb-32 lg:mb-4 pr-48 lg:pr-0 ">
            "Transformamos desafíos en soluciones eficientes, concentrate <br />en lo que realmente importa:<br /> hacer crecer tu negocio."
          </h3>
          
          {/* Para pantallas pequeñas, texto y imagen en el mismo div */}
          <div className="flex items-center justify-between lg:block">
            {/* Contenedor del texto en pantallas pequeñas */}
            <div className="w-[30%] flex flex-col">
              <h3 className="font-bold hidden text-lg lg:text-lg">Nombre</h3>
              <h3 className="text-md hidden lg:text-md">Cargo</h3>
            </div>

            {/* Imagen en pantallas pequeñas */}
            <img 
              src={cta1} 
              alt="Imagen Call to Action" 
              className="w-[65%] h-auto object-cover ml-4 lg:hidden" // Oculta en lg y mayores
            />
          </div>
        </div>

        {/* Imagen para pantallas grandes */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-end items-end">
          <img 
            src={cta1} 
            alt="Imagen Call to Action" 
            className="w-full" 
          />
        </div>
      </div>
    </div>
  );
}

export default CTA1;
