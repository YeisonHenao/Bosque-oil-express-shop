import { FaMailBulk, FaMapPin, FaPhone, FaShoppingCart } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="contacto" className="bg-gray-900 text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FaShoppingCart className="h-6 w-6 text-green-500" />
                <span className="text-xl font-bold">Bosque Oil Express Shop SAS</span>
              </div>
              <p className="text-gray-400">
                Tu tienda de conveniencia de confianza, abierta las 24 horas para servirte mejor.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horarios</h4>
              <div className="space-y-2 text-gray-400">
                <p>Lunes a Domingo: 24 horas</p>
                <p>SOAT: Hasta 11:00 PM</p>
                <p>Sin variación de precios</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <div className="space-y-2 text-gray-400">
                <p>Venta de productos</p>
                <p>SOAT hasta 11 PM</p>
                <p>Pago de servicios</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <FaPhone className="h-4 w-4" />
                  <span>(+57) 324 590 6881</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaMailBulk className="h-4 w-4" />
                  <span>oilexpresss@bosqueoilexpressshop.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaMapPin className="h-4 w-4" />
                  <span>CRA 52 # 78-20</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Bosque Oil Express Shop SAS. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    )
}