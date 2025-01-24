/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Ensures paths like `/about/` work
  assetPrefix: '/', // Use relative paths for assets
};

export default nextConfig;
