// components/SoatContentSection.tsx
import React from "react";

// Asegúrate de que las rutas de importación para Badge y Button sean correctas
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { AnimatedSection } from "./AnimatedSection";

// Nota: Si 'text-muted-foreground' te da problemas,
// es porque no tienes shadcn/ui configurado o no has definido ese color.
// En ese caso, puedes reemplazar 'text-muted-foreground' por 'text-gray-600'
// o 'text-gray-500' para un efecto similar con Tailwind estándar.

const SoatContentSection: React.FC = () => {
  return (
    <div className="space-y-6 text-white">
      <Badge className="bg-red-600 px-4 py-2">SERVICIO SOAT</Badge>

      {/* Título actualizado */}
      <h2 className="text-3xl lg:text-4xl font-bold">
        SOAT disponible hasta las 11:00 PM
      </h2>

      {/* Párrafo actualizado y con text-muted-foreground */}
      <p className="text-lg">
        Obtén tu Seguro Obligatorio de Accidentes de Tránsito de manera rápida y
        segura. Servicio disponible todos los días hasta las 11:00 PM.
      </p>

      <div className="space-y-4">
        {[
          "Comprálo hasta con 29 días de anticipación",
          "Disponible 7 días a la semana",
          "Horario: 6:00 AM - 10:00 PM",
          "Evita fotomultas y circula seguro",
        ].map((item, index) => (
          <AnimatedSection
            key={index}
            animation="slideLeft"
            delay={300 + index * 100}
          >
            <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-300">{item}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <Button size="lg" className="bg-red-600 hover:bg-red-700">
        Solicitar SOAT Ahora
      </Button>
    </div>
  );
};

export default SoatContentSection;
