/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    BASIC_AUTH: process.env.BASIC_AUTH,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.us-east-1.wasabisys.com',
      },
    ],
  },
}
