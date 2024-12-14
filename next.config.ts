import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en-US/", // TODO: Make this configurable
        permanent: true,
      },
      {
        source: "/en-Us/:path",
        destination: "/en-US/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
