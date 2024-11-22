import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import contacto from '/contactofoto.png';
import flecha from '/flecha4.png';
import { FaUser, FaIdCard, FaEnvelope, FaMobileAlt, FaCommentDots, FaFacebook, FaMapMarkerAlt, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface FormData {
  nombre: string;
  ruc: string;
  email: string;
  celular: string;
  servicio: string;
  mensaje: string;
  terms: boolean;
}

const ContactForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    ruc: '',
    email: '',
    celular: '',
    servicio: '',
    mensaje: '',
    terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    const newValue = isCheckbox ? (e.target as HTMLInputElement).checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        'service_3674kt4', // Reemplaza con tu Service ID
        'template_pfyhduv', // Reemplaza con tu Template ID
        {
          reply_to: formData.email,
          nombre: formData.nombre,
          ruc: formData.ruc,  
          email: formData.email,
          celular: formData.celular,
          servicio: formData.servicio,
          mensaje: formData.mensaje,
        },
        '6YlUD-lV9jLuoM3VV' // Reemplaza con tu User ID de EmailJS
      )
      .then(() => {
        console.log('Correo enviado con éxito.');
        setIsModalOpen(true);
        setFormData({
          nombre: '',
          ruc: '',
          email: '',
          celular: '',
          servicio: '',
          mensaje: '',
          terms: false,
        });
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
      });
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isModalOpen]);

  return (
    <motion.div
      className="container-section py-16 px-4 lg:px-8 bg-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="content-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="hidden lg:flex flex-col justify-center pr-12">
            <p className="text-[19px] mb-2">
              Estamos aquí para ayudarte. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
            </p>

    <div className="contact-info space-y-4 mb-8 mt-4">
      <div className="flex items-center space-x-2">
        <FaPhoneAlt className="text-primary" />
        <a href="tel:994037392" className="text-base text-primary hover:underline">
          994 037 392
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <FaEnvelope className="text-primary" />
        <a href="mailto:Informes@ehr.com.pe" className="text-base text-primary hover:underline">
          Informes@ehr.com.pe
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <FaLinkedin className="text-primary" />
        <a
          href="https://www.linkedin.com/company/estructura-hr/?originalSubdomain=pe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-primary hover:underline"
        >
          Estructura HR 
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt className="text-primary" />
        <a
          href="https://www.google.com.pe/maps/place/Av.+Circunvalaci%C3%B3n+del+Golf+los+Incas+206,+Santiago+de+Surco+15023/@-12.0777695,-76.9588513,17z/data=!4m16!1m9!3m8!1s0x9105c6fea1c24223:0x5227f0ef13ab3c44!2sAv.+Circunvalaci%C3%B3n+del+Golf+los+Incas+206,+Santiago+de+Surco+15023!3b1!8m2!3d-12.0778496!4d-76.958809!10e5!16s%2Fg%2F11fn4l344z!3m5!1s0x9105c6fea1c24223:0x5227f0ef13ab3c44!8m2!3d-12.0778496!4d-76.958809!16s%2Fg%2F11fn4l344z?hl=es-419&entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-primary hover:underline"
        >
          Av. Circunvalación del Golf los Incas 206, Lima
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <FaFacebook className="text-primary" />
        <a
          href="https://www.facebook.com/estructurahr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-primary hover:underline"
        >
          Estructura HR 
        </a>
      </div>
    </div>


            <img src={contacto} alt="Contacto" className="rounded-lg object-cover h-[350px]" />
            <img src={flecha} alt="Flecha" className="mt-8 ml-auto scale-75" />
          </div>

          <div className="p-0 lg:pb-8 rounded-lg">
            <h2 className="text-2xl lg:text-4xl font-medium mb-6 text-center">Contáctanos</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <label className="text-sm font-semibold">Nombre completo</label>
                <div className="flex items-center border border-gray-300 rounded-md focus-within:border-primary transition duration-300 hover:border-primary">
                  <FaUser className="text-gray-400 mx-2" />
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 focus:outline-none rounded-md"
                  />
                </div>

                <label className="text-sm font-semibold">RUC</label>
                <div className="flex items-center border border-gray-300 rounded-md focus-within:border-primary transition duration-300 hover:border-primary">
                  <FaIdCard className="text-gray-400 mx-2" />
                  <input
                    type="text"
                    name="ruc"
                    value={formData.ruc}
                    onChange={handleChange}
                    required
                    pattern="[0-9]*"
                    inputMode="numeric"
                    className="w-full px-4 py-2 focus:outline-none rounded-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold">Email</label>
                  <div className="flex items-center border border-gray-300 rounded-md focus-within:border-primary transition duration-300 hover:border-primary">
                    <FaEnvelope className="text-gray-400 mx-2" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 focus:outline-none rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold">Celular</label>
                  <div className="flex items-center border border-gray-300 rounded-md focus-within:border-primary transition duration-300 hover:border-primary">
                    <FaMobileAlt className="text-gray-400 mx-2" />
                    <input
                      type="tel"
                      name="celular"
                      value={formData.celular}
                      onChange={handleChange}
                      required
                      pattern="[0-9]*"
                      inputMode="numeric"
                      className="w-full px-4 py-2 focus:outline-none rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold">Selecciona un servicio</label>
                <select
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary transition duration-300 hover:border-primary"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="outsourcing-nomina">Outsourcing de Procesos</option>
                  <option value="outsourcing-contable">Outsourcing de Tecnología</option>
                  <option value="outsourcing-administrativo">Outsourcing Administrativo/Financiero</option>
                  <option value="outsourcing-legal">Outsourcing Comercial</option>
                  <option value="outsourcing-fiscal">Outsourcing Industrial</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold">Mensaje</label>
                <div className="flex items-center border border-gray-300 rounded-md focus-within:border-primary transition duration-300 hover:border-primary">
                  <FaCommentDots className="text-gray-400 mx-2" />
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-2 focus:outline-none rounded-md"
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  id="terms"
                  className="mr-2"
                  required
                />
                <label htmlFor="terms" className="text-sm">
                  He leído y acepto las condiciones de privacidad y tratamiento de mis datos personales.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-green-800 transition duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999999]">
          <div className="bg-primary rounded-lg shadow-lg max-w-sm p-10 relative">
            <h2 className="text-2xl font-bold mb-4 text-center text-white">
              ¡Gracias por tu interés en ser un Partner de Estructura HR!
            </h2>
            <p className="text-sm text-center mb-4 text-white">
              Nos pondremos en contacto contigo en breve para proporcionarte más detalles.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute shadow-xl -top-3 -right-3 bg-primary text-white rounded-full px-[17px] py-2 hover:bg-green-800 transition duration-300"
            >
              X
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ContactForm;
