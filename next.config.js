/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['imagedelivery.net'], // For Farcaster profile images
  },
  env: {
    NEXT_PUBLIC_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID || 'farcaster-frames-template',
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
