import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    domains: ['kodinyumba.app'],
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true
  }
}

export default nextConfig
