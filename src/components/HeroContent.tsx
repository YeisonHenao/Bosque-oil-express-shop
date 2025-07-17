// components/HeroContent.tsx
import React from 'react';
import Image from 'next/image';
import { Clock, Star } from 'lucide-react'; // Importa los íconos de lucide-react

// Asegúrate de que las rutas de importación para Badge y Button sean correctas
// Si usas shadcn/ui:
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// Si usas las implementaciones mínimas que creamos:
import Badge from './ui/Badge';
import Button from './ui/Button';


const HeroContent: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center text-black"> {/* Aseguramos texto negro aquí */}
      <div className="space-y-8">
        <div className="space-y-4">
          {/* Badge */}
          <Badge className="bg-green-600 text-white px-4 py-2 text-sm font-medium">
            <Clock className="h-4 w-4 mr-2" />
            ABIERTO 24/7
          </Badge>
          {/* Título */}
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Tu tienda de
            <span className="text-green-600"> conveniencia</span>
            <br />
            que nunca cierra
          </h1>
          {/* Párrafo descriptivo */}
          <p className="text-xl max-w-lg"> {/* Eliminamos text-muted-foreground para que sea negro */}
            Más de 2,600 productos disponibles las 24 horas del día, 7 días a la semana. Sin variaciones de
            precio por horario.
          </p>
        </div>
        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
            Ver Productos
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-gray-400 hover:border-gray-600">
            Ubicación
          </Button>
        </div>
        {/* Información adicional */}
        <div className="flex items-center space-x-8 text-sm"> {/* Eliminamos text-muted-foreground */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span>Abierto ahora</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>4.8/5 estrellas</span>
          </div>
        </div>
      </div>
      {/* Sección de imagen */}
      <div className="relative">
        <Image
          src="/local.jpg" // Asegúrate de tener esta imagen o cámbiala
          alt="Tienda ConveniMax 24/7"
          width={500}
          height={600}
          className="rounded-2xl shadow-2xl"
        />
        {/* Tarjeta flotante inferior */}
        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="font-semibold">24/7 Disponible</p>
              <p className="text-sm">Siempre abierto para ti</p> {/* Eliminamos text-muted-foreground */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;