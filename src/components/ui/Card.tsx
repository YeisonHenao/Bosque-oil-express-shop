// components/Card.tsx
import React from 'react';

// Define las props que el componente Card va a recibir
interface CardProps {
  children: React.ReactNode; // 'children' será cualquier contenido renderizable por React
  className?: string; // Prop opcional para añadir clases adicionales desde el padre
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`
        bg-white rounded-lg shadow-lg overflow-hidden
        p-6 md:p-8 lg:p-10
        border border-gray-200
        hover:shadow-xl transition-shadow duration-300 ease-in-out
        ${className || ''}
      `}
      // Clases de Tailwind para el diseño base de la tarjeta:
      // 'bg-white': Fondo blanco.
      // 'rounded-lg': Bordes redondeados.
      // 'shadow-lg': Sombra sutil.
      // 'overflow-hidden': Asegura que el contenido no sobresalga si tiene bordes o radios.
      // 'p-6 md:p-8 lg:p-10': Relleno responsivo (padding) para el contenido.
      // 'border border-gray-200': Borde ligero.
      // 'hover:shadow-xl transition-shadow duration-300 ease-in-out': Efecto de sombra al pasar el ratón.
      // '${className || ''}': Permite añadir clases adicionales desde el componente padre.
    >
      {children}
    </div>
  );
};

export default Card;