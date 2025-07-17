import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from 'next/font/google' // Importa la fuente Inter

// Configura la fuente. Puedes especificar los pesos que quieres cargar.
// 'subsets: ['latin']' es esencial para que la fuente funcione correctamente.
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })


export const metadata: Metadata = {
  title: "Bosque Oil Express Shop SAS",
  description: "Bosque Oil Express Shop SAS is a leading provider of automotive services, specializing in oil changes, tire rotations, and other essential vehicle maintenance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={inter.variable}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
