/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.timbu.cloud",
        port: "",
        pathname: "/images/vogue-vortex-1/**",
      },
    ],
  },
};

export default nextConfig;

//https://timbu-get-all-products.reavdev.workers.dev/
