// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: "export",
  basePath: "/profile-next",
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
