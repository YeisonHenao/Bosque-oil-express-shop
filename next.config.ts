import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Esto es importante para exportación estática de imágenes de Next.js
    // Si usas dominios externos para tus imágenes, también irían aquí
    // domains: ['example.com'],
  },
  basePath: '/bosqueoilsiteweb',
  /* config options here */
};

export default nextConfig;
