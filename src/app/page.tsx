import Image from "next/image";
import Badge from "@/components/ui/Badge";
import HeroComponent from "@/components/HeroComponent";
import HeroContent from "@/components/HeroContent";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SoatContentSection from "@/components/SoatContentSection";
import {
  FaFile,
  FaShoppingCart,
  FaCar,
  FaClock,
  FaStar,
  FaShoppingBag,
  FaPhone,
  FaMapPin,
} from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <HeroComponent>
        <HeroContent />
      </HeroComponent>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-screen-xl py-20">
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
            Amplia selección de licores, vinos y cervezas para todas las
            ocasiones y gustos.
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
            Variedad de aceites para tu vehículo, manejamos marcas reconocidas y
            todos están sellados con garantía.
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
            Todo tipo de filtros de calidad para tu vehículo, con la mejor mano
            de obra y atención.
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
            Papas, galletas, dulces, acompañamientos para el licor y para calmar
            tus antojos nocturnos.
          </p>
        </Card>
      </div>
      <section id="soat" className="py-20 bg-gray-50">
        {" "}
        {/* ¡Fondo actualizado a bg-gray-50! */}
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/interior2.jpg"
              alt="Servicio SOAT"
              layout="fill" // Esto hace que la imagen llene el contenedor padre
              objectFit="cover" // Esto asegura que la imagen cubra el espacio sin distorsionarse
              className="rounded-xl" // Las esquinas redondeadas y sombra ahora en el contenedor
            />
          </div>
            {/* El componente SoatContentSection ya tiene los textos actualizados */}
            <SoatContentSection />
          </div>
        </div>
      </section>
      <section id="ventajas" className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Por qué elegir ConveniMax 24/7?</h2>
              <p className="text-xl text-muted-foreground">Ventajas que nos hacen únicos en el mercado</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <FaClock className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Nunca Cerramos</h3>
                <p className="text-muted-foreground">
                  Abierto las 24 horas del día, los 365 días del año. Siempre estamos aquí cuando nos necesitas.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <FaStar className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold">Precios Fijos</h3>
                <p className="text-muted-foreground">
                  Nuestros precios no varían por horario. El mismo precio justo las 24 horas del día.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <FaShoppingCart className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Gran Variedad</h3>
                <p className="text-muted-foreground">
                  Más de 2,600 productos diferentes para satisfacer todas tus necesidades diarias.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-green-600 text-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Necesitas algo ahora mismo?</h2>
            <p className="text-xl mb-8 opacity-90">
              Visítanos en cualquier momento. Estamos siempre abiertos para servirte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-lg px-8">
                <FaMapPin className="h-5 w-5 mr-2" />
                Ver Ubicación
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                <FaPhone className="h-5 w-5 mr-2" />
                Llamar Ahora
              </Button>
            </div>
          </div>
        </section>
    </div>
  );
}
