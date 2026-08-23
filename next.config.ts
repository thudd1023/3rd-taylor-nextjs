import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/thank-you",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/submission-thank-you",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/free-gtm-scan/results/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "3rdandtaylor.com" }],
        destination: "https://www.3rdandtaylor.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
