/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  compiler: {
    removeConsole: false,
  },
  images: {
    domains: ['images.pexels.com'],
  },
}

module.exports = nextConfig