import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "kindly-squid-396.convex.cloud", protocol: "https" },
      { hostname: "hidden-starling-28.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;