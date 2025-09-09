/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  },
  // Enable static generation for better deployment compatibility
  trailingSlash: true,
  // Optimize for deployment
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
