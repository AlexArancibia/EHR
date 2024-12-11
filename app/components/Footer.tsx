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

            <div className="flex space-x-4 mt-2 mb-4 w-full lg:w-1/4">
              <a href="https://www.facebook.com/estructurahr" className="text-white hover:text-gray-300 transition duration-300">
                <FaFacebook size={18} />
              </a>
              <a href="https://www.linkedin.com/company/estructura-hr/?originalSubdomain=pe" className="text-white hover:text-gray-300 transition duration-300">
                <FaLinkedin size={18} />
              </a>
              <a href="https://wa.me/51994037392" className="text-white hover:text-gray-300 transition duration-300">
                <FaWhatsapp size={18} />
              </a>
            </div>

            <a  href="https://www.google.com.pe/maps/place/Av.+Circunvalaci%C3%B3n+del+Golf+los+Incas+206,+Santiago+de+Surco+15023/@-12.0777695,-76.9588513,17z/data=!4m16!1m9!3m8!1s0x9105c6fea1c24223:0x5227f0ef13ab3c44!2sAv.+Circunvalaci%C3%B3n+del+Golf+los+Incas+206,+Santiago+de+Surco+15023!3b1!8m2!3d-12.0778496!4d-76.958809!10e5!16s%2Fg%2F11fn4l344z!3m5!1s0x9105c6fea1c24223:0x5227f0ef13ab3c44!8m2!3d-12.0778496!4d-76.958809!16s%2Fg%2F11fn4l344z?hl=es-419&entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D" className="text-white hover:text-gray-300 transition duration-300 pr-6">
            Av. Circunvalación del Golf los Incas 206,<br /> Lima, PE.
              </a>
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
        href="wa.me/51994037392" // Reemplaza con tu número de WhatsApp
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
