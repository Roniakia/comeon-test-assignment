const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: './build',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/games',
        permanent: true,
      },
      {
        source: '/search',
        destination: '/games',
        permanent: true,
      },
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
