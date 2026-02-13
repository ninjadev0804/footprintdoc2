import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "52.86.193.182"
      }
    ]
  }
};

export default nextConfig;
