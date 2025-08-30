/** @type {import('next').NextConfig} */
const nextConfig = {
  // appDir is enabled by default in Next.js 13+
  eslint: {
    // Warning: Disable linting during builds
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
