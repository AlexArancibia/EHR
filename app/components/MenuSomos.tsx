import React from "react";
import { FaUniversity, FaEye, FaHeart, FaShieldAlt, FaUsers } from "react-icons/fa"; // Importa los íconos que necesitas

const MenuSomos = () => {
  return (
    <div className="p-4 rounded shadow-lg w-full max-w-96">
      <ul className="flex flex-wrap justify-between space-x-4">
        {/* Subítem Misión */}
        <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded transition-colors duration-300">
          <FaUniversity className="w-5 h-5 text-yellow-400" />
          <span className="font-medium">Misión</span>
        </li>

        {/* Subítem Visión */}
        <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded transition-colors duration-300">
          <FaEye className="w-5 h-5 text-yellow-400" />
          <span className="font-medium">Visión</span>
        </li>

        {/* Subítem Valores */}
        <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded transition-colors duration-300">
          <FaHeart className="w-5 h-5 text-yellow-400" />
          <span className="font-medium">Valores</span>
        </li>

        {/* Subítem Historia */}
        <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded transition-colors duration-300">
          <FaShieldAlt className="w-5 h-5 text-yellow-400" />
          <span className="font-medium">Historia</span>
        </li>

        {/* Subítem Equipo */}
        <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded transition-colors duration-300">
          <FaUsers className="w-5 h-5 text-yellow-400" />
          <span className="font-medium">Equipo</span>
        </li>
      </ul>
    </div>
  );
};

export default MenuSomos;
