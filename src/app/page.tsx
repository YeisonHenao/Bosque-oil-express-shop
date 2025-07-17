import Image from "next/image";
import Badge from "@/components/ui/Badge";
import HeroComponent from "@/components/HeroComponent";
import HeroContent from "@/components/HeroContent";
import Card from "@/components/ui/Card";
import {
  FaFile,
  FaShoppingCart,
  FaCar,
  FaUtensils,
  FaStar,
  FaShoppingBag
} from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <HeroComponent>
        <HeroContent />
      </HeroComponent>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-screen-xl mb-4">
        <Card>
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaFile className="h-8 w-8 text-red-600" />
          </div>
          <div className="text-center mb-4">
            <h2 className="font-bold">SOAT</h2>
          </div>
          <p className="mb-4 text-justify-custom text-center">
            Seguro para tu vehículo, no te arriesgues a fotomultas. Comprálo
            hasta con 29 días de anticipación.
          </p>
          <Badge className="bg-red-600 text-white">
            {" "}
            Horarios: 6:00 am - 11:00 pm{" "}
          </Badge>
        </Card>
        <Card>
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaShoppingCart className="h-8 w-8 text-purple-600" />
          </div>
          <div className="text-center mb-4">
            <h2 className="font-bold">Licores</h2>
          </div>
          <p className="mb-4 text-justify-custom text-center">
            Amplia selección de licores, vinos y cervezas para todas las ocasiones y gustos.
          </p>
        </Card>
        <Card>
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaStar className="h-8 w-8 text-blue-600" />
          </div>
          <div className="text-center mb-4">
            <h2 className="font-bold">Aceites</h2>
          </div>
          <p className="mb-4 text-justify-custom text-center">
            Variedad de aceites para tu vehículo, manejamos marcas reconocidas y todos están sellados con garantía.
          </p>
        </Card>
        <Card>
          {/* Y una cuarta, quinta, etc. para que se sigan ajustando */}
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCar className="h-8 w-8 text-yellow-600" />
          </div>
          <div className="text-center mb-4">
            <h2 className="font-bold">Filtros</h2>
          </div>
          <p className="mb-4 text-justify-custom text-center">
            Todo tipo de filtros de calidad para tu vehículo, con la mejor mano de obra y atención.
          </p>
        </Card>
        <Card className="hover:shadow-green-lg transition-shadow duration-300 ease-in-out">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaShoppingBag className="h-8 w-8 text-green-600" />
          </div>
          <div className="text-center mb-4">
            <h2 className="font-bold">Snacks</h2>
          </div>
          <p className="mb-4 text-justify-custom text-center">
            Papas, galletas, dulces, acompañamientos para el licor y para calmar tus antojos nocturnos.
          </p>
        </Card>
      </div>
    </div>
  );
}
