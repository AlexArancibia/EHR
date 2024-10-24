import React from "react";
import { FaUniversity, FaEye, FaHeart } from "react-icons/fa"; // Importa los íconos que necesitas

const MenuServicios = () => {
  return (
    <div className=" text-white p-4 rounded shadow-lg">
      <h3 className="text-xl font-bold mb-4">Servicios</h3>
      <ul>
        {/* Subítem Misión */}
        <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded transition-colors">
          <FaUniversity className="w-5 h-5 text-yellow-400" />
          <span>Misión</span>
        </li>

        {/* Subítem Visión */}
        <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded transition-colors">
          <FaEye className="w-5 h-5 text-yellow-400" />
          <span>Visión</span>
        </li>

        {/* Subítem Valores */}
        <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded transition-colors">
          <FaHeart className="w-5 h-5 text-yellow-400" />
          <span>Valores</span>
        </li>
      </ul>
    </div>
  );
};

export default MenuServicios;
