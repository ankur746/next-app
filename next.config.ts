import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['m.media-amazon.com'],
    remotePatterns: [new URL('https://cdn.dummyjson.com/**')],
  }
};

export default nextConfig;
