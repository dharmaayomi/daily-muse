import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "servicestew-us.backendless.app",
      },
    ],
    // loader: "custom",
    // loaderFile: "./my/image/loader.js",
  },
};

export default nextConfig;
