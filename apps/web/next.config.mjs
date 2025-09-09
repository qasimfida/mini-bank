/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  },
  // Optimize for deployment
  poweredByHeader: false,
  compress: true,
  // Fix for Windows permission issues
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
