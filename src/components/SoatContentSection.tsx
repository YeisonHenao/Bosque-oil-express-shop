// components/SoatContentSection.tsx
import React from 'react';

// Asegúrate de que las rutas de importación para Badge y Button sean correctas
import Badge from './ui/Badge';
import Button from './ui/Button';

// Nota: Si 'text-muted-foreground' te da problemas,
// es porque no tienes shadcn/ui configurado o no has definido ese color.
// En ese caso, puedes reemplazar 'text-muted-foreground' por 'text-gray-600'
// o 'text-gray-500' para un efecto similar con Tailwind estándar.

const SoatContentSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <Badge className="bg-red-600 text-white px-4 py-2">SERVICIO SOAT</Badge>
      
      {/* Título actualizado */}
      <h2 className="text-3xl lg:text-4xl font-bold">SOAT disponible hasta las 11:00 PM</h2>
      
      {/* Párrafo actualizado y con text-muted-foreground */}
      <p className="text-lg text-muted-foreground">
        Obtén tu Seguro Obligatorio de Accidentes de Tránsito de manera rápida y segura. Servicio disponible
        todos los días hasta las 11:00 PM.
      </p>
      
      <div className="space-y-4">
        {/* Puntos actualizados */}
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          {/* Eliminamos 'text-gray-300' para que el color se herede o use el predeterminado */}
          <span>Proceso rápido y sin complicaciones</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Disponible 7 días a la semana</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Horario extendido hasta las 11:00 PM</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Personal capacitado para asistirte</span>
        </div>
      </div>
      <Button size="lg" className="bg-red-600 hover:bg-red-700">
        Solicitar SOAT Ahora
      </Button>
    </div>
  );
};

export default SoatContentSection;