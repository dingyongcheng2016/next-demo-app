/** @type {import('next').NextConfig} */
const path = require('path');
const withLess = require('next-with-less');

const nextConfig = withLess({
  reactStrictMode: true,
  images: {
    domains: ['www.nextjs.cn']
  },
  staticPageGenerationTimeout: 90,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  }
})

module.exports = nextConfig
