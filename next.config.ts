import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30, // 30 seconds for dynamic routes
      static: 180, // 3 minutes for static routes
    },
    reactCompiler: true,
  },
};

export default nextConfig;
