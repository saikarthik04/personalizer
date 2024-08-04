/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.youtube.com",
      "cdn.pixabay.com",
      "lh3.googleusercontent.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "/photo/**",
      },
    ],
    domains: ["lh3.googleusercontent.com"],
    unoptimized: false,
  },
};

export default nextConfig;
