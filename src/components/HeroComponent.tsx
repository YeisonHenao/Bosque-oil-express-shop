// components/HeroComponent.tsx
import React from 'react';

// Define las props que el componente HeroComponent va a recibir
interface HeroComponentProps {
  children: React.ReactNode; // 'children' será cualquier contenido renderizable por React
}

const HeroComponent: React.FC<HeroComponentProps> = ({ children }) => {
  return (
    <section
      className="relative w-full overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center"
      // Nuevas clases de Tailwind para el fondo y el relleno vertical
      // 'relative': Necesario si añades elementos posicionados absolutamente dentro.
      // 'w-full': Ocupa todo el ancho disponible.
      // 'overflow-hidden': Asegura que nada se salga del Hero.
      // 'py-20 lg:py-32': Relleno vertical responsivo.
      // 'bg-gradient-to-br from-green-50 to-emerald-100': Nuevo fondo degradado de abajo a la derecha.
      // 'flex items-center justify-center': Centra el contenido (children) horizontal y verticalmente.
      // NOTA: Eliminamos 'text-white' del section para que el texto sea negro por defecto o se defina en el children.
    >
      {/* Contenedor interno para dar un ancho máximo y centrar el contenido */}
      <div className="container mx-auto px-4 text-black">
        {children}
      </div>
    </section>
  );
};

export default HeroComponent;