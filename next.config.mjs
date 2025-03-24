/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_SITE_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_SITE_DOMAIN,
        pathname: '/**', // Дозволяє завантажувати всі зображення з цього домену
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  sassOptions: {
    additionalData: `
      @import "src/shared/styles/_breakpoints.scss";
      @import "src/shared/styles/_colors.scss";
      @import "src/shared/styles/_mixins.scss";
      @import "src/shared/styles/_variables.scss";
      `,
  },
};

export default nextConfig;
