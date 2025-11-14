import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["image.tmdb.org"], // Allow TMDB images (posters)
  },
};

export default nextConfig;

