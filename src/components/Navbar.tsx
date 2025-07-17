import Link from "next/link";
import { FaPhone } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Nombre de la web */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-600">
              Bosque Oil Express Shop SAS
            </Link>
          </div>

          {/* Enlaces centrales */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="/soat"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                SOAT para tu vehículo
              </Link>
              <Link
                href="/precios"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Licores
              </Link>
              <Link
                href="/contacto"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Aceites
              </Link>
              <Link
                href="/contacto"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Filtros
              </Link>
              <Link
                href="/contacto"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Snacks
              </Link>
            </div>
          </div>

          {/* Botón de llamada */}
          <div>
            <a
              href="tel:+573245906881"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaPhone className="mr-2" />
              <span>Llama ya</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
