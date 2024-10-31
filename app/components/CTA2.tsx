import { useEffect, useRef, useState } from 'react';
import cta2 from '/cta2.png';
import flecha from '/flecha3.png';

function CTA2() {
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
    <div ref={ref} className="container-section py-12 lg:py-28 bg-secondary">
      <div className={`content-section flex flex-wrap items-center transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Imagen para pantallas grandes */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-end items-end pr-8">
          <img 
            src={cta2} 
            alt="Imagen Call to Action" 
            className="w-full object-cover" 
          />
        </div>

        {/* Texto de la sección */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-8 font-medium">
            ¿Cómo sé que Estructura HR es la opción ideal para mí?
          </h1>
          
          <ul className="pl-4 lg:pl-8 text-base md:text-lg lg:text-xl">
            <li className="mb-4 text-sm md:text-base lg:text-lg !list-disc">
              Soy una empresa local que busca optimizar la eficiencia en la gestión de nóminas y procesos contables.
            </li>
            <li className="mb-4 text-sm md:text-base lg:text-lg !list-disc">
              Soy una compañía extranjera que quiere comenzar operaciones en el Perú y necesita un acompañamiento integral desde la constitución hasta la administración de nóminas y contabilidad.
            </li>
            <li className="mb-4 text-sm md:text-base lg:text-lg !list-disc">
              Soy una empresa multinacional que requiere apoyo operativo especializado en la normativa peruana para poder concentrarme en mi actividad principal.
            </li>
            <li className="mb-4 text-sm md:text-base lg:text-lg !list-disc">
              Busco un socio estratégico que me garantice precisión en la información contable, un procesamiento de nómina sin errores y la correcta atención a los temas legales.
            </li>
          </ul>
        </div>
      </div>

      {/* Fun Facts solo para versión móvil */}
      <div className="hidden mt-12">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg text-center">
            <p className="text-4xl font-bold text-primary">100+</p>
            <p className="text-base text-primary">Empresas satisfechas</p>
          </div>
          <div className="p-4 rounded-lg text-center">
            <p className="text-4xl font-bold text-primary">50+</p>
            <p className="text-base text-primary">Proyectos completados</p>
          </div>
          <div className="p-4 rounded-lg text-center">
            <p className="text-4xl font-bold text-primary">25</p>
            <p className="text-base text-primary">Años de experiencia</p>
          </div>
          <div className="p-4 rounded-lg text-center">
            <p className="text-4xl font-bold text-primary">99%</p>
            <p className="text-base text-primary">Tasa de precisión</p>
          </div>
        </div>
      </div>
      <div id='contactanos'  className='bg-secondary'>
        
      </div>
    </div>
  );
}

export default CTA2;
