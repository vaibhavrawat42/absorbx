/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/api/mcp/asset/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: false },
    ];
  },
};

module.exports = nextConfig;
