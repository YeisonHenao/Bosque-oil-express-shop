import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import HeroComponent from "@/components/HeroComponent";
import HeroContent from "@/components/HeroContent";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SoatContentSection from "@/components/SoatContentSection";
import { FloatingElements } from "@/components/FloatingElements";
import { CounterSection } from "@/components/CounterSection";
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
      <FloatingElements />
      {/* Hero Section */}
      <HeroComponent>
        <HeroContent />
      </HeroComponent>
      <CounterSection />
      {/* Feature Cards */}
      <section id="featureCards" className="bg-slate-800 text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl py-20">
          <AnimatedSection animation="slideUp" delay={100}>
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
            </Card>
          </AnimatedSection>
          <AnimatedSection animation="slideUp" delay={200}>
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
          </AnimatedSection>
          <AnimatedSection animation="slideUp" delay={300}>
            <Card>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-center mb-4">
                <h2 className="font-bold">Aceites</h2>
              </div>
              <p className="mb-4 text-justify-custom text-center">
                Variedad de aceites para tu vehículo, manejamos marcas
                reconocidas y todos están sellados con garantía.
              </p>
            </Card>
          </AnimatedSection>
          <AnimatedSection animation="slideUp" delay={400}>
            <Card>
              {/* Y una cuarta, quinta, etc. para que se sigan ajustando */}
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCar className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-center mb-4">
                <h2 className="font-bold">Filtros</h2>
              </div>
              <p className="mb-4 text-justify-custom text-center">
                Todo tipo de filtros de calidad para tu vehículo, con la mejor
                mano de obra y atención.
              </p>
            </Card>
          </AnimatedSection>
          <AnimatedSection animation="slideUp" delay={500}>
            <Card className="hover:shadow-green-lg transition-shadow duration-300 ease-in-out">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShoppingBag className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-center mb-4">
                <h2 className="font-bold">Snacks</h2>
              </div>
              <p className="mb-4 text-justify-custom text-center">
                Papas, galletas, dulces, acompañamientos para el licor y para
                calmar tus antojos nocturnos.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="container px-4 mx-auto">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                Nuestro Ecosistema de Servicios
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Más que una tienda de conveniencia. Descubre todos nuestros
                negocios y servicios especializados
              </p>
            </div>
          </AnimatedSection>

          {/* Licorerias VIP */}
          <AnimatedSection animation="slideUp" delay={100}>
            <Card className="bg-gradient-to-br from-purple-900/50 to-slate-700 border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group mb-12">
              <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <FaStar className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-white text-2xl">
                      Licorerias VIP
                    </h2>
                    <Badge className="bg-purple-600 text-white mt-2">
                      Servicio Premium
                    </Badge>
                  </div>
                </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-slate-300 text-lg">
                    Dos ubicaciones exclusivas con la mejor selección de
                    licores premium, vinos importados y cervezas artesanales.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-slate-300">
                          Licores premium y exclusivos
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-slate-300">
                          Vinos importados y nacionales
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-slate-300">
                          Cervezas artesanales
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-slate-300">
                          Asesoría personalizada
                        </span>
                      </div>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300">
                      Conocer Ubicaciones
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group">
                      <Image
                        src="./placeholder.svg?height=200&width=250"
                        alt="Licorera VIP Sede 1"
                        width={250}
                        height={200}
                        className="rounded-xl shadow-lg transition-transform duration-500 w-full h-48 object-cover"
                      />
                      <p className="text-slate-400 text-sm mt-2 text-center">
                        Sede Principal
                      </p>
                    </div>
                    <div className="group">
                      <Image
                        src="./placeholder.svg?height=200&width=250"
                        alt="Licorera VIP Sede 2"
                        width={250}
                        height={200}
                        className="rounded-xl shadow-lg transition-transform duration-500 w-full h-48 object-cover"
                      />
                      <p className="text-slate-400 text-sm mt-2 text-center">
                        Sede Norte
                      </p>
                    </div>
                  </div>
                </div>
            </Card>
          </AnimatedSection>

          {/* Servicios Automotrices */}
          <AnimatedSection animation="slideUp" delay={200}>
            <Card className="bg-gradient-to-br from-orange-900/50 to-slate-700 border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 group mb-12">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <FaShoppingCart className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-white text-2xl">
                    Servicios Automotrices
                  </h2>
                  <Badge className="bg-orange-600 text-white mt-2">
                    Taller Especializado
                  </Badge>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-slate-300 text-lg">
                    Taller especializado en cambio de aceite y nivelación de
                    automóviles con personal capacitado y equipos modernos.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-slate-300">
                        Cambio de aceite profesional
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-slate-300">
                        Nivelación y alineación
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-slate-300">
                        Aceites de marcas reconocidas
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-slate-300">
                        Servicio rápido y garantizado
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 hover:scale-105 transition-all duration-300">
                    Agendar Servicio
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <Image
                      src="./placeholder.svg?height=200&width=250"
                      alt="Taller Automotriz - Área de Servicio"
                      width={250}
                      height={200}
                      className="rounded-xl shadow-lg transition-transform duration-500 w-full h-48 object-cover"
                    />
                    <p className="text-slate-400 text-sm mt-2 text-center">
                      Área de Servicio
                    </p>
                  </div>
                  <div className="group">
                    <Image
                      src="./placeholder.svg?height=200&width=250"
                      alt="Taller Automotriz - Equipos"
                      width={250}
                      height={200}
                      className="rounded-xl shadow-lg transition-transform duration-500 w-full h-48 object-cover"
                    />
                    <p className="text-slate-400 text-sm mt-2 text-center">
                      Equipos Modernos
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
      <section id="soat" className="py-20 bg-slate-900">
        {" "}
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideRight">
              <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="./interior2.jpg"
                  alt="Servicio SOAT"
                  layout="fill" // Esto hace que la imagen llene el contenedor padre
                  objectFit="cover" // Esto asegura que la imagen cubra el espacio sin distorsionarse
                  className="rounded-xl" // Las esquinas redondeadas y sombra ahora en el contenedor
                />
              </div>
            </AnimatedSection>
            {/* El componente SoatContentSection ya tiene los textos actualizados */}
            <AnimatedSection animation="slideLeft" delay={200}>
              <SoatContentSection />
            </AnimatedSection>
          </div>
        </div>
      </section>
      <section id="ventajas" className="py-20 bg-slate-800 text-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Por qué elegir Bosque Oil Express Shop SAS?
            </h2>
            <p className="text-xl text-muted-foreground">
              Ventajas que nos hacen únicos en el mercado
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <FaClock className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Nunca Cerramos</h3>
              <p className="text-muted-foreground">
                Abierto las 24 horas del día, los 365 días del año. Siempre
                estamos aquí cuando nos necesitas.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <FaStar className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Precios Fijos</h3>
              <p className="text-muted-foreground">
                Nuestros precios no varían por horario. El mismo precio justo
                las 24 horas del día.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <FaShoppingCart className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Gran Variedad</h3>
              <p className="text-muted-foreground">
                Más de 2,600 productos diferentes para satisfacer todas tus
                necesidades diarias.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-green-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Necesitas algo ahora mismo?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Visítanos en cualquier momento. Estamos siempre abiertos para
            servirte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://maps.app.goo.gl/7dfwY7Fc88AHLT5w7" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-lg px-8">
                <FaMapPin className="h-5 w-5 mr-2" />
                Ver Ubicación
              </Button>
            </a>
            <a href="tel:+573245906881" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-green-600 bg-transparent">
                <FaPhone className="h-5 w-5 mr-2" />
                Llamar Ahora
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
