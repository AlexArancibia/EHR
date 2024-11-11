import React, { useEffect, useState } from 'react';
import contacto from '/contactofoto.png';
import flecha from '/flecha4.png';
import { FaUser, FaIdCard, FaEnvelope, FaMobileAlt, FaCommentDots } from 'react-icons/fa';
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
    const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const isCheckbox = type === 'checkbox';
    const newValue = isCheckbox ? (e.target as HTMLInputElement).checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <div className='content-section'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="hidden lg:flex flex-col justify-center pr-12 ">
            <p className="text-[19px] mb-2">
              Estamos aquí para ayudarte. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
            </p>
            <p className="text-base mb-2">994 037 392</p>
            <p className="text-base mb-8">Informes@ehr.com.pe</p>
            <img
              src={contacto}
              alt="Contacto"
              className="rounded-lg object-cover h-[350px]"
            />
            <img
              src={flecha}
              alt="Flecha"
              className="mt-8 ml-auto scale-75"
            />
          </div>

          <div className="p-0 lg:pb-8 rounded-lg">
            <h2 className="text-2xl lg:text-4xl font-medium mb-6 text-center">Contáctanos</h2>
            <div className='block lg:hidden mb-8'>
              <p className="text-md mb-4 text-left lg:text-left">
                Estamos aquí para ayudarte. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
              </p>
              <p className="text-sm mb-2">Informes@ehr.com.pe</p>
              <p className="text-sm mb-8">994 037 392</p>
              <img
                src={contacto}
                alt="Contacto"
                className="rounded-lg object-cover w-full h-[250px]"
              />
            </div>

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
