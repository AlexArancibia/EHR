import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from '@remix-run/react';  // Importa NavLink de Remix

// Definición del tipo MenuItem sin 'submenu'
interface MenuItem {
  href: string;
  label: string;
}

interface HamburgerMenuProps {
  navItems: MenuItem[];
}

function HamburguerMenu({ navItems }: HamburgerMenuProps) {
  const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      {/* Botón Hamburguesa */}
      <motion.button
        onClick={() => setActive((pv) => !pv)}
        className={`relative z-50 h-10 w-10 rounded-full transition-colors ${active ? 'bg-transparent' : 'bg-transparent'}`} // Fondo transparente cuando está cerrado
        animate={active ? 'open' : 'closed'}
        initial={false}
      >
        <motion.span
          style={{
            left: '50%',
            top: '30%',
            x: '-50%',
            y: '-50%',
          }}
          className={`absolute h-1 w-8 ${active ? 'bg-primary' : 'bg-primary'}`} // Color de fondo blanco cuando está abierto
          variants={{
            open: {
              rotate: ['0deg', '0deg', '45deg'],
              top: ['30%', '50%', '50%'],
            },
            closed: {
              rotate: ['45deg', '0deg', '0deg'],
              top: ['50%', '50%', '30%'],
            },
          }}
        />
        <motion.span
          style={{
            left: '50%',
            top: '50%',
            x: '-50%',
            y: '-50%',
          }}
          className={`absolute h-1 w-8 ${active ? 'bg-primary' : 'bg-primary'}`} // Color de fondo blanco cuando está abierto
          variants={{
            open: {
              rotate: ['0deg', '0deg', '-45deg'],
            },
            closed: {
              rotate: ['-45deg', '0deg', '0deg'],
            },
          }}
        />
        <motion.span
          style={{
            left: '68%',
            bottom: '30%',
            x: '-50%',
            y: '50%',
          }}
          className={`absolute h-1 w-4 ${active ? 'bg-primary' : 'bg-primary'}`} // Color de fondo blanco cuando está abierto
          variants={{
            open: {
              rotate: ['0deg', '0deg', '45deg'],
              left: '50%',
              bottom: ['30%', '50%', '50%'],
            },
            closed: {
              rotate: ['45deg', '0deg', '0deg'],
              left: '68%',
              bottom: ['50%', '50%', '30%'],
            },
          }}
        />
      </motion.button>

      {/* Menú Desplegable */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[72px] inset-0 left-0 z-40 flex h-full w-full bg-black/50 "
          >
            <div className='bg-primary flex h-[200px] w-full  p-8'>
            <ul className="m-auto space-y-8 text-left">
              {navItems.map((item) => (
                <li key={item.href} className='border-b-2 border-white/10'>
                  <NavLink
                    to={item.href}  // Usa NavLink para la navegación en Remix
                    className=" text-white"  // Aplica clases adicionales cuando el enlace está activo
                    onClick={() => setActive(false)} // Cierra el menú al hacer clic en un enlace
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

export default HamburguerMenu;
