import { useEffect, useState } from "react";
import { NavLink } from "@remix-run/react";
import logo from "/logo.png";
import logo2 from "/logo2.png";
import HamburguerMenu from "./HamburguerMenu";

// Configuración de los elementos de navegación.
const navItems = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#estructura", label: "¿Cómo sé que Estructura HR es para mí?" },
];

// Estilos de texto y animación comunes
const textStyles = {
  link: "flex items-center justify-center rounded-full px-3 transition-colors duration-500",
  navLink: "text-gray-400 hover:text-white",
  activeLink: "text-white",
  button: "bg-secondary text-neutral px-5 py-2 rounded-xl hover:text-white transition-all duration-500 ease-in-out flex items-center",
  fadeIn: "transition-opacity duration-500", // Clase para la animación de fade-in
};

function Navbar() {
  // Estado para controlar la visibilidad del texto
  const [isVisible, setIsVisible] = useState(false);

  // Efecto para hacer visible el texto al montar el componente
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Ajusta el tiempo según sea necesario

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Navbar fijo */}
      <div className="fixed top-0 left-0 w-full py-4 container-section bg-background lg:bg-custom-gradient z-[9999]">
        <div className="content-section flex justify-between items-center gap-0">
          {/* Columna del logo */}
          <div className="flex items-center justify-start w-1/3 lg:w-1/6">
            <NavLink to="/" className="hidden lg:block">
              <img
                src={logo}
                alt="Logo EHR"
                className={`w-[110px] lg:w-[84px] h-auto ${textStyles.fadeIn} ${isVisible ? "opacity-100" : "opacity-0"}`}
              />
            </NavLink>
            <NavLink to="/" className="block lg:hidden">
              <img
                src={logo2}
                alt="Logo EHR 2"
                className={`w-[75px]  ${textStyles.fadeIn} ${isVisible ? "opacity-100" : "opacity-0"}`}
              />
            </NavLink>
          </div>

          {/* Columna del menú de navegación */}
          <div className="hidden lg:flex w-4/6 justify-center">
            <nav className="flex items-center justify-center gap-[72px] space-x-8 p-2 font-normal">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `${textStyles.link} ${textStyles.navLink} ${
                        isActive ? textStyles.activeLink : ""
                      }`
                    }
                  >
                    <span className={`${textStyles.fadeIn} ${isVisible ? "opacity-100" : "opacity-0"}`}>
                      {item.label}
                    </span>
                  </NavLink>
                </li>
              ))}
            </nav>
          </div>

          {/* Columna del botón de contacto */}
          <div className="w-1/6 lg:flex justify-end items-center hidden ">
            <NavLink to="/#contactanos" className={`${textStyles.button} ${textStyles.fadeIn} ${isVisible  ? "opacity-100" : "opacity-0"}`}>
              Contáctanos
            </NavLink>
          </div>

          {/* Menú hamburguesa para dispositivos móviles */}
          <div className="flex w-full justify-end items-center lg:hidden">
            <HamburguerMenu navItems={navItems} />
          </div>
        </div>
      </div>

      {/* Margen superior para el contenido */}
      <div className="mt-16"> {/* Ajusta la altura según el tamaño del navbar */}
        {/* Aquí va el contenido de tu página */}
      </div>
    </>
  );
}

export default Navbar;
