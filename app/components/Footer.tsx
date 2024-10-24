import React from 'react';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import logo from '/logo.png'; // Importa tu logo
import { NavLink } from '@remix-run/react';

function Footer() {
  return (
    <>
      <footer className="bg-footer text-white py-12 lg:py-16 container-section">
        <div className="content-section flex flex-col lg:flex-row justify-between items-start">
          <div className="flex flex-col items-start mb-4 lg:mb-0 w-full lg:w-1/4">
            <img src={logo} alt="Logo" className="mb-4" /> {/* Ajusta la altura del logo según sea necesario */}

            <div className="flex space-x-4 mt-2 mb-8 w-full lg:w-1/4">
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start mb-8 lg:mb-0 w-full lg:w-1/4  gap-4 ">
            <h2 className="font-semibold text-lg lg:text-xl text-white">Horario de atención:</h2>
            <p className="text-sm lg:text-base text-white">Lunes - Viernes</p>
            <p className="text-sm lg:text-base text-white">9am - 6pm</p>
          </div>

          <div className="flex flex-col items-start mb-8 lg:mb-0 w-full lg:w-1/4  gap-4 ">
          <h2 className="font-semibold text-lg lg:text-xl text-white">Menú</h2>
          <NavLink to="/#servicios" ><h2 className="text-sm lg:text-base font-normal text-white">Servicios</h2></NavLink>
          <NavLink to="/#estructura" ><h2 className="text-sm lg:text-base font-normal text-white">¿Cómo sé que Estructura<br /> HR es para mí?</h2></NavLink>
          </div>

          <div className="flex flex-col items-start lg:mb-0 w-full lg:w-1/4 gap-4 ">
            <h2 className="font-semibold text-lg lg:text-xl text-white">Legales</h2>
            <p className="text-sm lg:text-base ml-4 text-white">· Políticas de privacidad</p>
            <p className="text-sm lg:text-base ml-4 text-white">· Términos y condiciones</p>
            <h2 className="font-semibold text-lg lg:text-xl text-white">Libro de reclamaciones</h2>
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a 
        href="https://wa.me/123456789" // Reemplaza con tu número de WhatsApp
        className="fixed bottom-6 right-6 z-[9999] bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={40} />
      </a>


      
    </>
  );
}

export default Footer;
