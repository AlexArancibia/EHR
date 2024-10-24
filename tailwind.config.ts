import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#234940',     // Azul índigo vibrante
        secondary: '#6BE1B5',   // Morado suave
        accent: '#6BE1B5',      // Morado oscuro para énfasis
        background: '#F3F3F3',  // Fondo gris claro
        neutral: '#303030',     // Texto gris oscuro
        footer: '#10221E',      // Gris mediano para detalles
      },
      fontFamily: {
        sans: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      backgroundImage:{
        'custom-gradient': 'linear-gradient(269.78deg, #29574D -16.46%, #10221E 118.27%)',
      }
    },
  },
  plugins: [],
} satisfies Config;
