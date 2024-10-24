import React, { useEffect, useState, useRef } from 'react';
import icono1 from '/check.png';
import icono2 from '/wheel.png';
import icono3 from '/work.png';

interface CounterProps {
  end: number;
  duration: number; // Duración total para alcanzar el valor final
  step: number; // Paso para incrementar el contador
  prefix?: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, step, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const totalSteps = Math.ceil(end / step); // Total de pasos necesarios
    const incrementTime = Math.floor((duration * 1000) / totalSteps); // Tiempo por incremento

    const timer = setInterval(() => {
      start += step; // Incrementar por el paso definido
      setCount(Math.min(start, end)); // Asegurarnos de no superar el valor final
      if (start >= end) clearInterval(timer); // Detenemos el contador
    }, incrementTime);

    return () => clearInterval(timer); // Limpiamos el interval cuando se desmonta el componente
  }, [end, duration, step]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

function Facts() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconectamos el observador una vez que el elemento es visible
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current); // Observar la sección
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current); // Limpiar el observador
    };
  }, []);

  const fadeInClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4';
  const transitionBase = 'transition-opacity duration-700 ease-in-out';

  // Establecemos la misma duración para todos los contadores
  const duration = 3; // Duración total en segundos

  return (
    <div className="container-section bg-background flex justify-center pt-16 pb-8">
      <div
        className={`w-[100%] max-w-[700px] -mt-[100px] lg:-mt-[180px] z-20 bg-white rounded-3xl shadow-xl p-8 grid grid-cols-3 gap-4 md:gap-8 ${fadeInClass} ${transitionBase}`}
        ref={sectionRef}
      >
        {/* Sección 1 */}
        <div className="flex flex-col items-center text-center">
          <img src={icono1} alt="Icono 1" className="h-8 md:h-12 mb-2" />
          <h3 className="font-medium text-lg md:text-3xl mb-1 md:mb-2 text-primary">
            <Counter end={14} duration={duration} step={1} prefix="+" suffix=" años" />
          </h3>
          <p className="text-xs md:text-sm text-neutral-600">Experiencia</p>
        </div>

        {/* Sección 2 */}
        <div className="flex flex-col items-center text-center">
          <img src={icono2} alt="Icono 2" className="h-8 md:h-12 mb-2" />
          <h3 className="font-medium text-lg md:text-3xl mb-1 md:mb-2 text-primary">
            <Counter end={95} duration={duration} step={1} suffix="%" />
          </h3>
          <p className="text-xs md:text-sm text-neutral-600">NPS</p>
        </div>

        {/* Sección 3 */}
        <div className="flex flex-col items-center text-center">
          <img src={icono3} alt="Icono 3" className="h-8 md:h-12 mb-2" />
          <h3 className="font-medium text-lg md:text-3xl mb-1 md:mb-2 text-primary">
            <Counter end={3000} duration={duration} step={100} prefix="+" />
          </h3>
          <p className="text-xs md:text-sm text-neutral-600">Puestos de trabajo</p>
        </div>
      </div>
    </div>
  );
}

export default Facts;
