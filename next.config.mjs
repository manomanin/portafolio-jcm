const isProd = process.env.NODE_ENV === 'production';

// Servido en GitHub Pages como proyecto: https://manomanin.github.io/portafolio-jcm/
// En dev corre en la raíz para que sea cómodo trabajar local.
const repoBase = '/portafolio-jcm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? repoBase : '',
  assetPrefix: isProd ? `${repoBase}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoBase : '',
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
