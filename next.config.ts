import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/spire",
  trailingSlash: true,
  images: { unoptimized: true },
  distDir: "docs",
};

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require("next-pwa")({
  dest: "docs",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  buildExcludes: [/middleware-manifest\.json$/],
  publicExcludes: ["!icons/**/*", "!manifest.json"],
});

export default withPWA(nextConfig);
