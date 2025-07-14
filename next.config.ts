import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  images: {
    domains: ["kodinyumba.app"],
    unoptimized: true, 
  },
};

export default nextConfig;
