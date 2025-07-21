const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  images: {
    domains: ['m.media-amazon.com'],
    remotePatterns: [new URL('https://cdn.dummyjson.com/**')],
  },
  experimental: {
    serverActions: true,
  }
};

export default  withBundleAnalyzer(nextConfig);
