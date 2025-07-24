
import { ShoppingCart, Phone } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button"; // Ajusta la ruta si es necesario
import { AnimatedSection } from "./AnimatedSection";


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">

      <AnimatedSection animation="slideUp">
        {/* Usamos el contenedor simple del primer header */}
        <div className="container flex h-16 items-center justify-between px-4">
          {/* Logo/Nombre de la web: Bosque Oil Express Shop SAS con icono y estilo group */}
          <div className="flex items-center space-x-2 group">
            <ShoppingCart className="h-6 w-6 text-green-500 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold text-white">Bosque Oil Express Shop SAS</span>
          </div>

          {/* Enlaces centrales: Reducidos y con los estilos de ConveniMax */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#productos"
              className="text-sm font-medium text-slate-300 hover:text-green-500 transition-all duration-300 hover:scale-105"
            >
              Productos
            </Link>
            <Link
              href="#soat"
              className="text-sm font-medium text-slate-300 hover:text-green-500 transition-all duration-300 hover:scale-105"
            >
              SOAT
            </Link>
            <Link
              href="#ventajas"
              className="text-sm font-medium text-slate-300 hover:text-green-500 transition-all duration-300 hover:scale-105"
            >
              Ventajas
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium text-slate-300 hover:text-green-500 transition-all duration-300 hover:scale-105"
            >
              Contacto
            </Link>
          </nav>

          {/* Botón de llamada: Usando tu componente Button */}
          <a href="tel:+573245906881" rel="noopener noreferrer">
            <Button className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
              <Phone className="h-4 w-4 mr-2" />
              Llamar Ahora
            </Button>
          </a>
        </div>
      </AnimatedSection>
    </header>
  );
}
