/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  optimizeFonts: true,
  swcMinify: true,
  experimental: {
    gzipSize: true,
  }
}

module.exports = nextConfig
