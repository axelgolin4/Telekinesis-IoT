/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // El sitio vive en /es y /en; la raíz va a español.
  async redirects() {
    return [{ source: "/", destination: "/es", permanent: false }];
  },
};

export default nextConfig;
