import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'], // Allow images from Unsplash
  },
};

export default nextConfig;
