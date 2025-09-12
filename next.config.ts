import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  outputFileTracingRoot: '/Users/davidjehring/Development/Websites/phc-conference-2026'
};

export default nextConfig;
