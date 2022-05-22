/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_IMGBB_KEY: process.env.NEXT_PUBLIC_IMGBB_KEY,
  },
};

module.exports = nextConfig;
