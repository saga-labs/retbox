/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.cerebase.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
