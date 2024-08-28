/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["www.familydecorative.com", "assets.familydecorative.com"],
  },
};

module.exports = nextConfig;
