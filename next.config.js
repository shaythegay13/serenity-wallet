/** @type {import('next').NextConfig} */
const nextConfig = {
  // appDir is enabled by default in Next.js 13+
  eslint: {
    // Warning: Disable linting during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: Disable type checking during builds
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
