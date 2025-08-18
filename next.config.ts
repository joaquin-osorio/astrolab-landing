import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // evitá /_next/image
    unoptimized: true,
  },

  async redirects() {
    return [
      // www → sin www en TU dominio
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.arturia.pcmidicenter.com" }],
        destination: "https://arturia.pcmidicenter.com/:path*",
        permanent: true,
      },
      // (opcional) por si alguien entra a otro host del mismo proyecto
      {
        source: "/:path*",
        has: [{ type: "host", value: "http://arturia.pcmidicenter.com" }], // dev tools a veces arman esto
        destination: "https://arturia.pcmidicenter.com/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  trailingSlash: false,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
