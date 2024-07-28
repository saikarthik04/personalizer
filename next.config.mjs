/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.pixabay.com',
              port: '',
              pathname: '/photo/**',
            },
          ],
          domains: ['lh3.googleusercontent.com'],
          unoptimized:false,
      },
};

export default nextConfig;
