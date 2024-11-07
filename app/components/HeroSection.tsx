import { NavLink } from '@remix-run/react';
import fondo1 from '/Fondo_borde.png';
import mujer from '/mujerfondo.png';
import mujercel from '/mujerfondocel.png';
import elipse1 from '/Ellipse1.png';
import elipse2 from '/Ellipse2.png';
import elipse3 from '/Ellipse3.png';
import elipse4 from '/Ellipse4.png';
import elipse5 from '/Ellipse5.png';
import { useEffect, useState, useRef } from 'react';

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const fadeInClass = isVisible ? 'opacity-100' : 'opacity-0';
  const transitionBase = 'transition-opacity duration-700';

  return (
    <div className='bg-background' ref={sectionRef}>
      <div className='container-section bg-custom-gradient pt-16 hero'>
        <div className='content-section flex flex-row flex-wrap'>
          <div className='flex w-full lg:w-5/12 flex-col gap-4 pb-8 lg:pb-32'>
            <p className={`${transitionBase} ${fadeInClass} text-[14px] md:text-[16px] font-normal text-background`}>
              Bienvenido a Estructura HR
            </p>
            <p className={`${transitionBase} ${fadeInClass} text-[36px] md:text-[38px] lg:text-[43px] xl:text-[49px] font-normal leading-[43px] md:leading-[60px] lg:leading-[73.5px] text-background mb-1`}>
              Tu socio estratégico
              <br />
              en soluciones de
              <br />
              <strong>Outsourcing</strong>
            </p>
            <p className={`${transitionBase} ${fadeInClass} text-base leading-[25px] font-normal text-background mb-6 md:mb-8`}>
              Nos especializamos en ofrecer servicios de tercerización a empresas líderes,
              ayudándolas a implementar soluciones innovadoras y maximizar el valor de sus
              operaciones.
            </p>
            <div className='flex justify-center md:justify-start'>
              <NavLink
                to="/#contactanos"
                className={`${transitionBase} bg-opacity-0 text-secondary border-2 shadow-md shadow-secondary/10 border-secondary px-16 py-2 rounded-xl font-semibold hover:text-white hover:shadow-secondary/30 transition-all ease-in-out flex items-center w-fit text-base ${fadeInClass}`}
              >
                Contáctanos
              </NavLink>
            </div>
          </div>
          <div className='relative flex w-full lg:w-7/12 justify-center items-end overflow-hidden'>
            <img
              src={elipse1}
              className={`absolute top-8 -left-6 lg:top-10 lg:left-32 scale-[0.6] md:scale-[0.85] lg:scale-100 ${transitionBase} ${fadeInClass}`}
              alt='foto elipse1'
            />
            <img
              src={elipse2}
              className={`absolute -top-8 -right-2 lg:top-0 lg:right-24 scale-[0.6] md:scale-[0.85] lg:scale-100 ${transitionBase} ${fadeInClass}`}
              alt='foto elipse2'
            />
            <img
              src={elipse5}
              className={`absolute bottom-2 -left-8 lg:bottom-20 lg:left-12 scale-[0.6] md:scale-[0.85] lg:scale-100 ${transitionBase} ${fadeInClass}`}
              alt='foto elipse3'
            />
            <img
              src={elipse4}
              className={`absolute bottom-20 -right-10 lg:bottom-40 lg:right-12 scale-[0.6] md:scale-[0.85] lg:scale-100 ${transitionBase} ${fadeInClass}`}
              alt='foto elipse4'
            />
            <img
              src={elipse3}
              className={`absolute -bottom-8 -right-4 lg:bottom-2 lg:right-8 scale-[0.6] md:scale-[0.85] lg:scale-100 ${transitionBase} ${fadeInClass}`}
              alt='foto elipse5'
            />
            <img src={mujer} className={`h-[400px] lg:h-[600px] hidden lg:flex ${transitionBase} ${fadeInClass}`} alt="mujer hero section" />
            <img src={mujercel} className={`h-[400px] lg:h-[600px] flex lg:hidden ${transitionBase} ${fadeInClass}`} alt="mujer hero section" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
