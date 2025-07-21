const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  images: {
    domains: ['m.media-amazon.com'],
    remotePatterns: [new URL('https://cdn.dummyjson.com/**')],
  }
};

export default  withBundleAnalyzer(nextConfig);
