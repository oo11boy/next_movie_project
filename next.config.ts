import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["digimoviez.com"],
    localPatterns: [
      {
        pathname: "/assets/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
