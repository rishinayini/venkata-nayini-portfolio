import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["**.figma.site"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
