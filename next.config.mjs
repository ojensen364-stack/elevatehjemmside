/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.discordapp.com', 'media.discordapp.net'],
  },
};

export default nextConfig;
